import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class FilesService {
  private readonly uploadPath = path.join(process.cwd(), 'uploads');
  private readonly isProduction = process.env.NODE_ENV === 'production';

  constructor() {
    if (this.isProduction && !process.env.CLOUDINARY_URL) {
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
    }
  }

  ensureUploadsDir() {
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  async handleUploadedFile(file: Express.Multer.File) {
    this.ensureUploadsDir();

    if (this.isProduction) {
      try {
        const url = await this.uploadToCloudinary(file.path);
        fs.unlinkSync(file.path);
        return { filename: file.filename, path: url };
      } catch (error) {
        console.error('Cloudinary falló, guardando localmente:', error);
      }
    }

    return { filename: file.filename, path: `/uploads/${file.filename}` };
  }

  private async uploadToCloudinary(filePath: string): Promise<string> {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'forever-kids',
    });
    return result.secure_url;
  }

  removeFile(fileUrl: string) {
    if (!fileUrl) return;

    // Cloudinary
    if (fileUrl.includes('cloudinary.com')) {
      const segments = fileUrl.split('/');
      const publicIdIndex = segments.indexOf('forever-kids');
      if (publicIdIndex !== -1) {
        const publicId = segments.slice(publicIdIndex).join('/').replace(/\.[^.]+$/, '');
        cloudinary.uploader.destroy(publicId).catch(() => {});
      }
      return;
    }

    // Local
    try {
      const filename = path.basename(fileUrl);
      const filePath = path.join(this.uploadPath, filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.error('Error eliminando archivo:', error);
    }
  }
}

import { diskStorage } from 'multer';

import * as path from 'path';
import * as fs from 'fs';

import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(process.cwd(), 'uploads');

      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }

      cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

      cb(null, `file-${uniqueSuffix}${extname(file.originalname)}`);
    },
  }),

  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (
    req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
      return cb(new Error('Solo se permiten imágenes'), false);
    }

    cb(null, true);
  },
};

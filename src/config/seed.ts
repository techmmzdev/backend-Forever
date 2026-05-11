import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL no está definida en el archivo .env');
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function seedPermissions() {
  const existing = await prisma.rolePermission.findFirst();
  if (existing) {
    console.log('⚠️  Los permisos ya existen, saltando seed de permisos.');
    return;
  }

  const allPermissions = [
    'dashboard',
    'categories',
    'products',
    'movements',
    'users',
    'permissions',
  ];
  const staffPermissions = ['dashboard', 'products', 'movements'];

  await prisma.rolePermission.createMany({
    data: [
      ...allPermissions.map((p) => ({ role: 'ADMIN' as const, permission: p })),
      ...staffPermissions.map((p) => ({
        role: 'STAFF' as const,
        permission: p,
      })),
    ],
  });

  console.log('✅ Permisos sembrados correctamente');
}

async function main() {
  await seedPermissions();

  const existing = await prisma.user.findUnique({
    where: { email: 'admin@foreverkids.com' },
  });

  if (existing) {
    console.log('⚠️  El usuario admin ya existe, saltando seed.');
    return;
  }

  const hashedPassword = await bcrypt.hash('Admin123!', 10);

  const admin = await prisma.user.create({
    data: {
      username: 'Super Admin',
      email: 'admin@foreverkids.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Usuario admin creado: ', admin.username, '-', admin.email);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

# Forever Kids — Warehouse Management API

API de gestión de inventario y almacén construida con **NestJS 11**, **Prisma 7** y **PostgreSQL**.

---

## Stack

| Tecnología | Uso |
|------------|-----|
| NestJS 11 | Framework backend |
| Prisma 7 + PostgreSQL | Base de datos (Neon) |
| Passport + JWT | Autenticación |
| bcrypt | Hashing de contraseñas |
| class-validator / class-transformer | Validación de DTOs |
| Multer | Upload de archivos |
| Cloudinary | Hosting de imágenes (fallback) |
| Resend + react-email | Emails transaccionales |
| nestjs-pino | Logging estructurado |
| @nestjs/throttler | Rate limiting |

---

## Estructura del proyecto

```
src/
├── app/           # Módulo raíz
├── auth/          # Login, register, JWT guards, roles decorator
├── users/         # CRUD de usuarios (soft delete)
├── categories/    # CRUD de categorías (soft delete)
├── products/      # CRUD de productos con colores e imágenes
├── movements/     # Movimientos de stock (INGRESO/SALIDA)
├── roles/         # Permisos granulares por rol
├── dashboard/     # Estadísticas agregadas
├── files/         # Subida de archivos (local + Cloudinary)
├── mail/          # Plantillas de email con react-email
├── health/        # Health check de base de datos
├── config/        # PrismaService global + seed
└── common/        # Guards, decoradores y filtros compartidos
```

---

## Funcionalidades

### Autenticación y autorización
- JWT con expiración de 8 horas
- Roles: `ADMIN` y `STAFF`
- 6 permisos granulares configurables para STAFF
- Recuperación de contraseña por email (Resend)
- Actualización de perfil con re-emisión de JWT

### Productos
- SKU, alias, marca, categoría, stock
- **Soporte multicolor** — stock distribuido por color
- **Unidades por caja** — visualización en cajas + unidades sueltas
- Imagen por producto (local o Cloudinary)
- Soft delete / restore

### Movimientos de stock
- INGRESO y SALIDA
- Distribución por color (si el producto tiene colores)
- Anulación de movimientos (crea movimiento inverso, solo ADMIN)
- Edición de observaciones y recibido por
- Trazabilidad completa

### Dashboard
- Conteos: productos, categorías, usuarios activos
- Alertas de stock bajo con código de colores
- Últimos 5 movimientos

### Usuarios
- CRUD completo (solo ADMIN)
- Soft delete con restauración
- Protección: no auto-eliminación, no eliminar último admin

### Categorías
- CRUD con soft delete y restauración

### Permisos
- Gestión de 6 permisos para rol STAFF
- Sincronización en frontend cada 30 segundos

---

## Endpoints principales

### Auth
| Método | Ruta | Acceso |
|--------|------|--------|
| POST | `/auth/register` | ADMIN |
| POST | `/auth/login` | Público |
| GET | `/auth/me` | Autenticado |
| POST | `/auth/forgot-password` | Público |
| POST | `/auth/reset-password` | Público |
| PUT | `/auth/profile` | Autenticado |

### Productos
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/products?includeInactive=true` | Autenticado |
| GET | `/products/:id` | Autenticado |
| POST | `/products` | ADMIN |
| PUT | `/products/:id` | ADMIN |
| DELETE | `/products/:id` | ADMIN (soft delete) |
| PUT | `/products/:id/restore` | ADMIN |
| POST | `/products/:id/image` | ADMIN |

### Colores de productos
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/products/:id/colors` | Autenticado |
| POST | `/products/:id/colors` | ADMIN |
| PUT | `/products/colors/:colorId` | ADMIN |
| DELETE | `/products/colors/:colorId` | ADMIN |

### Movimientos
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/movements` | Autenticado |
| GET | `/movements/product/:productId` | Autenticado |
| POST | `/movements` | ADMIN, STAFF |
| PUT | `/movements/:id` | ADMIN, STAFF |
| POST | `/movements/:id/void` | ADMIN |

### Categorías
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/categories?includeInactive=true` | Autenticado |
| GET | `/categories/:id` | Autenticado |
| POST | `/categories` | ADMIN |
| PUT | `/categories/:id` | ADMIN |
| DELETE | `/categories/:id` | ADMIN (soft delete) |
| PUT | `/categories/:id/restore` | ADMIN |

### Usuarios
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/users` | ADMIN |
| GET | `/users/:id` | ADMIN |
| POST | `/users` | ADMIN |
| PUT | `/users/:id` | ADMIN |
| DELETE | `/users/:id` | ADMIN (soft delete) |

### Dashboard
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/dashboard/stats` | Autenticado |

### Roles y permisos
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/roles` | ADMIN |
| PUT | `/roles/:id/permissions` | ADMIN |

### Health
| Método | Ruta | Acceso |
|--------|------|--------|
| GET | `/health` | Público |

---

## Variables de entorno

Crear un archivo `.env` en la raíz del backend:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=tu_secreto_jwt
JWT_EXPIRES_IN=8h

RESEND_API_KEY=re_...
FROM_EMAIL=notificaciones@tudominio.com

CLOUDINARY_CLOUD_NAME=tu_cloud
CLOUDINARY_API_KEY=123456
CLOUDINARY_API_SECRET=abc123

THROTTLE_TTL=60
THROTTLE_LIMIT=10

PORT=7500
LOG_LEVEL=info
```

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar y llenar variables de entorno
cp .env.example .env

# 3. Generar Prisma Client
npx prisma generate

# 4. Ejecutar migraciones
npx prisma migrate dev

# 5. Poblar base de datos (crea admin inicial)
npx tsx src/config/seed.ts

# 6. Iniciar servidor
npm run start:dev
```

---

## Comandos útiles

```bash
npm run build        # Compilar
npm run start:dev    # Desarrollo con watch
npm run start:prod   # Producción
npm run lint         # ESLint
npx prisma studio    # UI de base de datos
```

---

## Licencia

MIT

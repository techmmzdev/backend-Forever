# Forever Kids - Warehouse Management API

API de inventario y gestión de almacén construida con NestJS y Prisma.

---

## Resumen

- Backend modular con autenticación JWT y roles (`ADMIN`, `STAFF`)
- Gestión de productos, categorías, movimientos e imágenes
- Uso de Prisma para acceso a PostgreSQL
- Validaciones firmes en DTOs y control de permisos

---

## Estructura principal

- `src/app/`
- `src/auth/`
- `src/categories/`
- `src/config/`
- `src/files/`
- `src/movements/`
- `src/products/`
- `src/users/`

---

## Endpoints clave

- `POST /auth/register`
- `POST /auth/login`
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`
- `POST /products/:id/image`
- `GET /categories`
- `POST /categories`
- `PUT /categories/:id`
- `DELETE /categories/:id`
- `GET /movements`
- `POST /movements`

---

## Seguridad y comportamiento

- Autenticación con JWT
- Roles para control de acceso
- Password hashing con bcrypt
- Soft delete en productos y categorías
- Upload de imágenes con Multer

---

## Detalles importantes

- El servicio principal sirve archivos estáticos desde `/uploads`
- `PrismaService` es global y se reutiliza en todos los módulos
- `ValidationPipe` está activo con `whitelist`, `forbidNonWhitelisted` y `transform`
- El seed crea un administrador inicial si no existe

---

## Usuario administrador inicial

- `admin@foreverkids.com`
- `Admin123!`

---

## Licencia

MIT

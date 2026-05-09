import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: ('ADMIN' | 'STAFF')[]) =>
  SetMetadata('roles', roles);

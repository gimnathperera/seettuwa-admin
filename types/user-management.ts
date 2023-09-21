export interface User {
  id: number | string;
  email: string;
  fullName: string;
  phoneNumber: string;
  roles: Role[];
  status: UserStatus;
}

export interface Role {
  id: number | string;
  name: RoleName;
  permissions: Permission[];
}

export interface Permission {
  id: number | string;
  name: string;
  description?: string;
}

export enum RoleName {
  Admin = 'ADMIN',
  Visitor = 'VISITOR',
  Owner = 'OWNER',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED',
}

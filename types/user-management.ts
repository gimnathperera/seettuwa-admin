import { toTitleCase } from '@/utils/functions';

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

export enum PreferredLanguage {
  Sinhala = 'SINHALA',
  English = 'ENGLISH',
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
}

export const userStatusOptions = Object.values(UserStatus).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

export const userRoleOptions = Object.values(RoleName).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

export const preferredLanguageOptions = Object.values(PreferredLanguage).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

export const userGenderOptions = Object.values(Gender).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

import { toTitleCase } from '@/utils/functions';

export interface User {
  id: number | string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dob: string | Date;
  address: string;
  role: Role | RoleName;
  status: UserStatus;
  preferredLanguage: PreferredLanguage;
  gender: Gender;
}

export type Login = Pick<User, 'email' | 'password'>;

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

export const userRoleOptions = Object.values(RoleName).map(role => ({
  value: role,
  label: toTitleCase(role),
}));

export const preferredLanguageOptions = Object.values(PreferredLanguage).map(language => ({
  value: language,
  label: toTitleCase(language),
}));

export const userGenderOptions = Object.values(Gender).map(gender => ({
  value: gender,
  label: toTitleCase(gender),
}));

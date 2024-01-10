import { toTitleCase } from '@/utils/functions';

export interface Seettu {
  id: number | string;
  seettuName: string;
  status: SeettuStatus;
  startDate: string | Date;
  endDate: string | Date;
  description: string;
  type: SeettuTypes;
  members: any[];
  member: string;
  totalAmount: number;
}

export enum SeettuTypes {
  Traditional = 'TRADITIONAL',
  Modern = 'MODERN',
}

export enum SeettuStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Completed = 'COMPLETED',
}

export const seettuStatusOptions = Object.values(SeettuStatus).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

export const seettuTypeOptions = Object.values(SeettuTypes).map(status => ({
  value: status,
  label: toTitleCase(status),
}));

import { RoleName, User, UserStatus } from '@/types/user-management';

export const users: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    fullName: 'John Doe',
    phoneNumber: '555-123-4567',
    roles: [
      {
        id: '1',
        name: RoleName.Admin,
        permissions: [
          {
            id: '101',
            name: 'Manage Users',
            description: 'Can manage user accounts',
          },
          {
            id: '102',
            name: 'View Reports',
          },
        ],
      },
    ],
    status: UserStatus.Active,
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    fullName: 'Jane Smith',
    phoneNumber: '555-987-6543',
    roles: [
      {
        id: '2',
        name: RoleName.Owner,
        permissions: [
          {
            id: '103',
            name: 'Edit Content',
            description: 'Can edit website content',
          },
        ],
      },
    ],
    status: UserStatus.Active,
  },
  {
    id: '3',
    email: 'alice.johnson@example.com',
    fullName: 'Alice Johnson',
    phoneNumber: '555-567-8901',
    roles: [
      {
        id: '3',
        name: RoleName.Visitor,
        permissions: [
          {
            id: '104',
            name: 'View Content',
            description: 'Can view website content',
          },
        ],
      },
    ],
    status: UserStatus.Inactive,
  },
  {
    id: '4',
    email: 'robert.green@example.com',
    fullName: 'Robert Green',
    phoneNumber: '555-234-5678',
    roles: [
      {
        id: '4',
        name: RoleName.Visitor,
        permissions: [],
      },
    ],
    status: UserStatus.Pending,
  },
  {
    id: '5',
    email: 'lisa.adams@example.com',
    fullName: 'Lisa Adams',
    phoneNumber: '555-678-9012',
    roles: [
      {
        id: '5',
        name: RoleName.Visitor,
        permissions: [
          {
            id: '105',
            name: 'Edit Content',
            description: 'Can edit website content',
          },
        ],
      },
    ],
    status: UserStatus.Active,
  },
  {
    id: '6',
    email: 'michael.brown@example.com',
    fullName: 'Michael Brown',
    phoneNumber: '555-789-0123',
    roles: [
      {
        id: '6',
        name: RoleName.Visitor,
        permissions: [],
      },
    ],
    status: UserStatus.Inactive,
  },
  {
    id: '7',
    email: 'susan.miller@example.com',
    fullName: 'Susan Miller',
    phoneNumber: '555-345-6789',
    roles: [
      {
        id: '7',
        name: RoleName.Admin,
        permissions: [
          {
            id: '106',
            name: 'Manage Users',
            description: 'Can manage user accounts',
          },
        ],
      },
    ],
    status: UserStatus.Active,
  },
  {
    id: '8',
    email: 'david.wilson@example.com',
    fullName: 'David Wilson',
    phoneNumber: '555-456-7890',
    roles: [
      {
        id: '8',
        name: RoleName.Owner,
        permissions: [
          {
            id: '107',
            name: 'View Reports',
          },
        ],
      },
    ],
    status: UserStatus.Suspended,
  },
  {
    id: '9',
    email: 'emily.jones@example.com',
    fullName: 'Emily Jones',
    phoneNumber: '555-890-1234',
    roles: [
      {
        id: '9',
        name: RoleName.Visitor,
        permissions: [],
      },
    ],
    status: UserStatus.Inactive,
  },
  {
    id: '10',
    email: 'william.taylor@example.com',
    fullName: 'William Taylor',
    phoneNumber: '555-567-1234',
    roles: [
      {
        id: '10',
        name: RoleName.Owner,
        permissions: [
          {
            id: '108',
            name: 'Edit Content',
            description: 'Can edit website content',
          },
        ],
      },
    ],
    status: UserStatus.Active,
  },
];

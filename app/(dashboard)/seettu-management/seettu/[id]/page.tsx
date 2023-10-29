'use client';

import { FC } from 'react';
import Grid from '@mui/material/Grid';
import {
  PageContainer,
  ProfileConnections,
  ProfileOverview,
  ProfileSeettuList,
  ProfileTimeLine,
  UserProfileHeader,
} from '@/components';

const data = {
  about: [
    {
      property: 'Full Name',
      value: 'John Doe',
      icon: 'mdi:account-outline',
    },
    {
      property: 'Status',
      value: 'active',
      icon: 'mdi:check',
    },
    {
      property: 'Role',
      value: 'Owner',
      icon: 'mdi:star-outline',
    },

    {
      property: 'Language',
      value: 'English',
      icon: 'mdi:translate',
    },
  ],
  contacts: [
    {
      property: 'Contact',
      value: '(123) 456-7890',
      icon: 'mdi:phone-outline',
    },

    {
      property: 'Email',
      value: 'john.doe@example.com',
      icon: 'mdi:email-outline',
    },
  ],
  seettu: [
    {
      property: 'Completed Seettu',
      value: '12',
      icon: 'mdi:github',
      color: 'primary',
    },
    {
      property: 'Ongoing Settu',
      value: '2',
      icon: 'mdi:react',
      color: 'info',
    },
  ],
  overview: [
    {
      property: 'Task Compiled',
      value: '13.5k',
      icon: 'mdi:check',
    },
    {
      property: 'Connections',
      value: '897',
      icon: 'mdi:account-outline',
    },
    {
      property: 'Projects Compiled',
      value: '146',
      icon: 'mdi:view-grid-plus-outline',
    },
  ],
  connections: [
    {
      isFriend: false,
      connections: '45',
      name: 'Cecilia Payne',
      avatar: '/images/avatars/2.png',
    },
    {
      isFriend: true,
      connections: '1.32k',
      name: 'Curtis Fletcher',
      avatar: '/images/avatars/3.png',
    },
    {
      isFriend: true,
      connections: '125',
      name: 'Alice Stone',
      avatar: '/images/avatars/4.png',
    },
    {
      isFriend: false,
      connections: '456',
      name: 'Darrell Barnes',
      avatar: '/images/avatars/5.png',
    },
    {
      isFriend: false,
      connections: '1.2k',
      name: 'Eugenia Moore',
      avatar: '/images/avatars/8.png',
    },
  ],
  teamsTech: [
    {
      members: 72,
      ChipColor: 'error',
      chipText: 'Developer',
      title: 'React Developers',
      avatar: '/images/icons/project-icons/react-label.png',
    },
    {
      members: 122,
      chipText: 'Support',
      ChipColor: 'primary',
      title: 'Support Team',
      avatar: '/images/icons/project-icons/support-label.png',
    },
    {
      members: 7,
      ChipColor: 'info',
      chipText: 'Designer',
      title: 'UI Designer',
      avatar: '/images/icons/project-icons/figma-label.png',
    },
    {
      members: 289,
      ChipColor: 'error',
      chipText: 'Developer',
      title: 'Vue.js Developers',
      avatar: '/images/icons/project-icons/vue-label.png',
    },
    {
      members: 24,
      chipText: 'Marketing',
      ChipColor: 'secondary',
      title: 'Digital Marketing',
      avatar: '/images/icons/project-icons/twitter-label.png',
    },
  ],
};

const SeettuDetailed: FC = () => {
  return (
    <PageContainer title='සීට්ටුව Online | Seettu Detailed' description='Seettu Detailed'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <UserProfileHeader />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={5} xs={12}>
              <ProfileOverview
                about={data.about}
                contacts={data.contacts}
                seettu={data.seettu}
                overview={data.overview}
              />
            </Grid>
            <Grid item lg={8} md={7} xs={12}>
              <ProfileTimeLine />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item lg={8} md={7} xs={12}>
              <ProfileSeettuList />
            </Grid>
            <Grid item lg={4} md={5} xs={12}>
              <ProfileConnections connections={data.connections} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SeettuDetailed;

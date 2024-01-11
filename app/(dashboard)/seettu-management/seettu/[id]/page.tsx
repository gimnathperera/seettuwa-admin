'use client';

import {
  PageContainer,
  SeettuOverview,
  SeettuProfileHeader,
  SeettuUserList,
  TimeLine,
} from '@/components';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

const data = {
  about: [
    {
      property: 'Seettu Name',
      value: 'Pillow Mart 2024',
    },
    {
      property: 'Status',
      value: 'active',
    },
    {
      property: 'Duration',
      value: '8 Months',
    },
    {
      property: 'Completed',
      value: '24% [240 LKR]',
    },
  ],
  timeline: [
    {
      property: 'Total Amount',
      value: '1000 LKR',
    },
    {
      property: 'Start Date',
      value: '17 April 2021',
    },
    {
      property: 'End Date',
      value: '24 April 2027',
    },
  ],
  contacts: [
    {
      property: 'Member Count',
      value: '24',
    },

    {
      property: 'Owner',
      value: 'Jhon Doe',
    },
  ],
};

const SeettuDetailed: FC = () => {
  return (
    // TODO: title should be dynamic based on the seettu name
    <PageContainer title='සීට්ටුව Online | Seettu Detailed' description='Seettu Detailed'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SeettuProfileHeader />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={5} xs={12}>
              <SeettuOverview
                about={data.about}
                contacts={data.contacts}
                timeline={data.timeline}
              />
            </Grid>
            <Grid item lg={8} md={7} xs={12}>
              <TimeLine />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SeettuUserList />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SeettuDetailed;

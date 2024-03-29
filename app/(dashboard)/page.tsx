'use client';
import { PageContainer, ProductPerformance, RecentTransactions } from '@/components';
import { Grid } from '@mui/material';

const Dashboard = (): JSX.Element => {
  return (
    <PageContainer title='සීට්ටුව Online | Overview' description='this is Dashboard'>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <RecentTransactions />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dashboard;

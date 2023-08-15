'use client';
import { Grid } from '@mui/material';
import { PageContainer, RecentTransactions, ProductPerformance } from '@/components';

const Dashboard = (): JSX.Element => {
  return (
    <PageContainer title='Dashboard' description='this is Dashboard'>
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

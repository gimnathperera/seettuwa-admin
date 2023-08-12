'use client';
import { Grid, Box } from '@mui/material';
import { PageContainer, RecentTransactions, ProductPerformance, Blog } from '@/components';

const Dashboard = (): JSX.Element => {
  return (
    <PageContainer title='Dashboard' description='this is Dashboard'>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;

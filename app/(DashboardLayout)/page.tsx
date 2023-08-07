'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from './components/container/PageContainer';
// components

import RecentTransactions from './components/dashboard/RecentTransactions';
import ProductPerformance from './components/dashboard/ProductPerformance';
import Blog from './components/dashboard/Blog';

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
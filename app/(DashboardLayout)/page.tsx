'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/containers/page-container';
import RecentTransactions from '@/components/dashboard/recent-transactions';
import ProductPerformance from '@/components/dashboard/product-performance';
import Blog from '@/components/dashboard/blog';

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

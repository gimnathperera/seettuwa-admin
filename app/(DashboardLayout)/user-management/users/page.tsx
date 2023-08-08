'use client';
// import { useQuery } from 'convex/react';
// import { api } from '@/convex/_generated/api';

import DashboardCard from '../../components/shared/ContentWrapper';
import PageContainer from '../../components/container/PageContainer';
import { Button, Grid, IconButton } from '@mui/material';
import CustomizedTables from '../../components/random';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SamplePage = (): any => {
  // const tasks = useQuery(api.tasks.get) || [];

  return (
    <PageContainer title='Users' description='Public users'>
      <Grid container flexDirection='column' gap={3}>
        <Grid item xs={12}>
          <DashboardCard
            title='Search Criteria'
            action={
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            title='Public Users'
            action={<Button variant='contained'>Create New User</Button>}
            middleContent={<CustomizedTables />}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;

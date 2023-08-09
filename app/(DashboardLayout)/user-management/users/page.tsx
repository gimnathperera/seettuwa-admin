'use client';
// import { useQuery } from 'convex/react';
// import { api } from '@/convex/_generated/api';

import TableOuterCard from '../../components/shared/TableOuterCard';
import PageContainer from '../../components/container/PageContainer';
import { Button, Grid, Typography } from '@mui/material';
import CustomizedTables from '../../components/random';
import TableFilterBar from '../../components/shared/TableFilterBar';

const SamplePage = (): any => {
  // const tasks = useQuery(api.tasks.get) || [];

  return (
    <PageContainer title='Users' description='Public users'>
      <Grid container flexDirection='column' gap={3}>
        <Grid item xs={12}>
          <Grid container flex='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h4' color='textSecondary'>
                Public Users
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Create a new user</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TableFilterBar />
        </Grid>

        <Grid item xs={12}>
          <TableOuterCard middleContent={<CustomizedTables />} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;

'use client';
// import { useQuery } from 'convex/react';
// import { api } from '@/convex/_generated/api';

import TableOuterCard from '../../components/shared/TableOuterCard';
import PageContainer from '../../components/container/PageContainer';
import { Button, Grid, Typography } from '@mui/material';
import CustomizedTables from '../../components/random';
import TableFilterBar from '../../components/shared/table-filter-search-bar';

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
          <TableFilterBar
            placeholder='Search public users'
            searchOptions={[
              { key: 'Name', value: 'name' },
              { key: 'Email', value: 'email' },
            ]}
            filterOptions={[
              {
                filterKey: { key: 'Status', value: 'status' },
                filterOptions: [
                  { key: 'Active', value: 'active' },
                  { key: 'Inactive', value: 'inactive' },
                  { key: 'Pending', value: 'pending' },
                ],
                filterType: 'SELECT',
              },
              {
                filterKey: { key: 'Role', value: 'role' },
                filterOptions: [
                  { key: 'Admin', value: 'admin' },
                  { key: 'Owner', value: 'owner' },
                  { key: 'Visitor', value: 'visitor' },
                ],
                filterType: 'SELECT',
              },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <TableOuterCard middleContent={<CustomizedTables />} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;

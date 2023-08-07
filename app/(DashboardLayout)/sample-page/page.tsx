'use client';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import DashboardCard from '../components/shared/DashboardCard';
import PageContainer from '../components/container/PageContainer';

const SamplePage = (): any => {
  const tasks = useQuery(api.tasks.get) || [];

  return (
    <PageContainer title='Sample Page' description='this is Sample page'>
      <DashboardCard title='Sample Page'>
        <>{tasks?.map(({ _id, text }) => <p key={_id.toString()}>{text}</p>)}</>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

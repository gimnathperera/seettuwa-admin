'use client';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function Home(): JSX.Element {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className='flex min-h-screen flex-col items-center gap-2'>
      {tasks?.map(({ _id, text }) => <div key={_id.toString()}>{text}</div>)}
    </main>
  );
}

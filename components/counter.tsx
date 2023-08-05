'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <Button radius='full' onPress={(): void => setCount(count + 1)}>
      Count is {count}
    </Button>
  );
};

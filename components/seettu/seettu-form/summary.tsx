import KeyValueItem from '@/components/shared/key-value-item';
import { Grid, Typography } from '@mui/material';
import { UseFormWatch } from 'react-hook-form';
import { Seettu } from '@/types/seettu-management';

type Summary = {
  watch: UseFormWatch<Seettu>;
};

const Summary = ({ watch }: Summary): JSX.Element => {
  const [seettuName] = watch(['seettuName']);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Basic Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Seettu Name' value={seettuName} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Participants Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Role' value={'LOL'} />
      </Grid>
    </Grid>
  );
};

export default Summary;

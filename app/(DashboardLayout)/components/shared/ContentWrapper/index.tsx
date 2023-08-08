import styled from '@emotion/styled';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

type Props = {
  title?: string | JSX.Element;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardHeading?: string | JSX.Element;
  headTitle?: string | JSX.Element;
  headSubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middleContent?: string | JSX.Element;
};

const StyledCard = styled(Card)(() => ({
  borderRadius: '20px',
}));

const StyledCardContent = styled(CardContent)(() => ({
  padding: '30px 30px 0px 30px',
}));

const DashboardCard = ({ title, children, action, middleContent }: Props): JSX.Element => {
  return (
    <StyledCard elevation={0}>
      <StyledCardContent>
        {title ? (
          <Stack direction='row' spacing={2} justifyContent='space-between' alignItems={'center'}>
            <Box>
              {typeof title === 'string' ? <Typography variant='h5'>{title}</Typography> : title}
            </Box>
            {action}
          </Stack>
        ) : null}

        {children}
      </StyledCardContent>
      {middleContent}
    </StyledCard>
  );
};

export default DashboardCard;

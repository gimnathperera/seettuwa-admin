import styled from '@emotion/styled';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

type Props = {
  title?: string;
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

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardHeading,
  headTitle,
  headSubtitle,
  middleContent,
}: Props): JSX.Element => {
  return (
    <StyledCard elevation={0}>
      {cardHeading ? (
        <CardContent>
          <Typography variant='h5'>{headTitle}</Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            {headSubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: '30px' }}>
          {title ? (
            <Stack
              direction='row'
              spacing={2}
              justifyContent='space-between'
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant='h5'>{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant='subtitle2' color='textSecondary'>
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middleContent}
      {footer}
    </StyledCard>
  );
};

export default DashboardCard;

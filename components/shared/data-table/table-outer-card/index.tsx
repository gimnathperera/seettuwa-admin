import { Typography } from '@mui/material';
import { StyledCard, StyledCardContent, StyledCardHeader } from './style';

type Props = {
  title?: string | JSX.Element;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardHeading?: string | JSX.Element;
  headTitle?: string | JSX.Element;
  headSubtitle?: string | JSX.Element;
  middleContent?: string | JSX.Element;
};

const DashboardCard = ({ title, action, middleContent }: Props): JSX.Element => {
  return (
    <StyledCard elevation={0} sx={{ overflow: 'auto', width: { xs: '316px', sm: 'auto' } }}>
      {title || action ? (
        <StyledCardHeader
          title={typeof title === 'string' ? <Typography variant='h5'>{title}</Typography> : title}
          action={action}
        />
      ) : null}

      {middleContent ? <StyledCardContent>{middleContent}</StyledCardContent> : null}
    </StyledCard>
  );
};

export default DashboardCard;

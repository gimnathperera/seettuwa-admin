import TuneIcon from '@mui/icons-material/Tune';
import { FilterButton } from './index.styles';

type Props = {};

const Filter = ({}: Props): JSX.Element => {
  return (
    <>
      <FilterButton>
        <TuneIcon />
      </FilterButton>
    </>
  );
};

export default Filter;

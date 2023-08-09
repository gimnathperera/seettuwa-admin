import TuneIcon from '@mui/icons-material/Tune';
import { FilterButton } from './index.styles';

type Props = {};

const FilterBy = ({}: Props): JSX.Element => {
  return (
    <FilterButton>
      <TuneIcon />
    </FilterButton>
  );
};

export default FilterBy;

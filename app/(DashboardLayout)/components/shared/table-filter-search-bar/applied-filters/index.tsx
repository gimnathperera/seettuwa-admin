import { SearchParam } from '..';
import { ChipContainer, FilterChip } from './index.styles';

interface Props {
  searchParams: SearchParam[];
  onDelete: (searchParam: SearchParam) => void;
}
const AppliedFilters = ({ searchParams, onDelete }: Props): JSX.Element => {
  return (
    <ChipContainer>
      {searchParams.map(({ key, value }) => (
        <FilterChip
          label={`${key}: ${value}`}
          variant='outlined'
          onDelete={(): void => onDelete({ key, value })}
          key={`${key}-${value}`}
        />
      ))}
    </ChipContainer>
  );
};
export default AppliedFilters;

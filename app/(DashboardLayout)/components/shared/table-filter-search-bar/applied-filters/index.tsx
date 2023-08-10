import { SearchParam } from '..';
import { ChipContainer, FilterChip } from './index.styles';

interface Props {
  searchParams: SearchParam[];
}
const AppliedFilters = ({ searchParams }: Props): JSX.Element => {
  return (
    <ChipContainer>
      {searchParams.map(({ key, value }) => (
        <FilterChip
          label={`${key}: ${value}`}
          variant='outlined'
          onDelete={(): void => console.log('')}
          key={`${key}-${value}`}
        />
      ))}
    </ChipContainer>
  );
};
export default AppliedFilters;

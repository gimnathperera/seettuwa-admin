import { ChipContainer, FilterChip } from './index.styles';

const AppliedFilters = (): JSX.Element => {
  return (
    <ChipContainer>
      <FilterChip
        label='Name: Jhon Doe'
        variant='outlined'
        onDelete={(): void => console.log('')}
      />
      <FilterChip
        label='Status: Active'
        variant='outlined'
        onDelete={(): void => console.log('')}
      />
    </ChipContainer>
  );
};
export default AppliedFilters;

import { useState } from 'react';
import { Grid } from '@mui/material';
import AppliedFilters from './applied-filters';
import FilterBy, { Filter, SelectOption } from './filter-by';
import SearchBy from './search-by';
import { SearchBarContainer, StyledDivider, StyledIconButton } from './index.styles';

export interface SearchParam {
  key: string;
  value: string;
}

interface Props {
  placeholder?: string;
  searchOptions: SelectOption[];
  filterOptions?: Filter[];
  onPrint?: () => void;
}

{
  /* TODO: Known issues: 
restrict user from adding same filter twice
Add different filter types (e.g. date range, number range, etc.
Ability to add searchBy value by pressing enter  
  )
*/
}

const DataTable: React.FC<Props> = ({
  placeholder,
  searchOptions,
  filterOptions,
  onPrint,
}): JSX.Element => {
  const [searchParams, setSearchParams] = useState<SearchParam[]>([]);

  const handlePrintButtonClick = (): void => {
    if (onPrint && typeof onPrint === 'function') {
      onPrint();
    } else {
      window.print();
    }
  };

  const handleAddFilterByParam = ({ filterKey, filterValue }: FilterBy): void => {
    setSearchParams(prevSearchParams => [
      ...prevSearchParams,
      { key: filterKey, value: filterValue },
    ]);
  };

  const handleAddSearchByParam = ({ searchKey, searchValue }: SearchBy): void => {
    setSearchParams(prevSearchParams => [
      ...prevSearchParams,
      { key: searchKey, value: searchValue },
    ]);
  };

  const handleRemoveSearchParam = (paramToRemove: SearchParam): void => {
    setSearchParams(prevSearchParams =>
      prevSearchParams.filter(param => param.value !== paramToRemove.value),
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchBarContainer>
          {filterOptions?.length ? (
            <>
              <FilterBy filters={filterOptions} onFilterBy={handleAddFilterByParam} />
              <StyledDivider orientation='vertical' />
            </>
          ) : null}

          <SearchBy
            searchOptions={searchOptions}
            placeholder={placeholder}
            onSearchBy={handleAddSearchByParam}
          />

          <StyledDivider orientation='vertical' />

          <StyledIconButton color='info' onClick={handlePrintButtonClick}>
            📥
          </StyledIconButton>
        </SearchBarContainer>
      </Grid>
      {searchParams?.length ? (
        <Grid item xs={12}>
          <AppliedFilters searchParams={searchParams} onDelete={handleRemoveSearchParam} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default DataTable;

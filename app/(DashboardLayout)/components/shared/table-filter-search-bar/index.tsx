import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import { SearchBarContainer, SearchInput, StyledDivider, StyledIconButton } from './index.styles';
import FilterBy from './filter-by';
import SearchBy from './search-by';
import { Grid } from '@mui/material';
import AppliedFilters from './applied-filters';

const TableFilterBar = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchBarContainer>
          <FilterBy />
          <StyledDivider orientation='vertical' />

          <StyledIconButton>
            <SearchIcon />
          </StyledIconButton>

          <SearchInput placeholder='Search public users' />

          <SearchBy />

          <StyledDivider orientation='vertical' />

          <StyledIconButton>
            <PrintIcon />
          </StyledIconButton>
        </SearchBarContainer>
      </Grid>
      <Grid item xs={12}>
        <AppliedFilters />
      </Grid>
    </Grid>
  );
};

export default TableFilterBar;

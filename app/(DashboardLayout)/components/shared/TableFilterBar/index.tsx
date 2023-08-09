import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import { SearchBarContainer, SearchInput, StyledDivider, StyledIconButton } from './index.styles';
import Filter from './Filter';

const TableFilterBar = (): JSX.Element => {
  return (
    <SearchBarContainer>
      <Filter />

      <StyledDivider orientation='vertical' />

      <StyledIconButton>
        <SearchIcon />
      </StyledIconButton>

      <SearchInput placeholder='Search public users' />

      <StyledDivider orientation='vertical' />

      <StyledIconButton>
        <PrintIcon />
      </StyledIconButton>
    </SearchBarContainer>
  );
};

export default TableFilterBar;

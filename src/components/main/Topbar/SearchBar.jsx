import styled from "styled-components";

export default function SearchBar() {
  return(
    <SearchContainer placeholder='Enter Name or Date'></SearchContainer>
  );
}

const SearchContainer = styled.input`
  border: 1px solid #818181;
  border-radius: 9px;
  padding: 8px;
  flex: 1;
  margin-top: 10px;
  margin-bottom: 9px;
`;
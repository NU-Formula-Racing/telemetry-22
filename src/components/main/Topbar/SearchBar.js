import React from 'react';

function SearchBar({keyword,setKeyword}) {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  console.log(keyword);
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search sensor"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
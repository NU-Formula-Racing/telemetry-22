// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';



// export default function SearchBar(props){
//     let fileList = [{name:"file1", date:Date()}, {name: "file2", date:Date()}];
//     const filterOptions = (option, input) => {
//     if (input) {
//         return option.data.name.toLowerCase().includes(input.toLowerCase())
//     }
//     return true;
//     };

//     return (
//       <Select
//         // defaultValue={fileList[0]}
//         isClearable
//         isSearchable
//         name="search"
//         options={fileList}
//         // filterOption={filterOptions}
//         getOptionLabel={option =>
//             `${option.name} ${option.date}`
//         }
//       />
//     );
// }

import React, { Component } from 'react';
import Select from 'react-select';

const filterOptions = (option, input) => {
    if (input) {
        if (option.data.name.toLowerCase().includes(input.toLowerCase()) || 
        dateString(option.data.date).includes(input)){
          return true;
        } else {
          return false;
        }
    }
    return true;
    };

let fileList = [{name:"file1", date: new Date(2022,3,5)}, {name: "file2", date:new Date(2021,10,12)}, 
{name: "file3", date:new Date(2002,11,11)},{name: "file4", date:new Date(2021,9,5)}];

const dateString = (date) => {
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    month = (month + 1 < 10) ? "0" + (month + 1) : (month + 1)
    day = (day < 10) ? "0" + day : day
    return month + "/" + day + "/" + year;
}

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {searchVal: null}
    this.myRef = React.createRef();
  }
  handleFocus= () => {
    this.setState({searchVal : null})
  };
  handleChange = value => {
    this.setState({searchVal : value})
    this.myRef.current.blur()
  };
  render() {
    return (
        <div style={{width: "100%", zIndex:"2"}}>
        <Select
        ref={this.myRef}
        placeholder={"Search for file by name or MM/DD/YYYY"}
        isClearable
        isSearchable
        name="search"
        options={fileList}
        filterOption={filterOptions}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        getOptionLabel={option =>
            `${option.name} (${dateString(option.date)})`
        }
        value = {this.state.searchVal}
      />
      </div>
    );
  }
}
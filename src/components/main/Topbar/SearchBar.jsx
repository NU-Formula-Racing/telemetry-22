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
        return option.data.name.toLowerCase().includes(input.toLowerCase())
    }
    return true;
    };

let fileList = [{name:"file1", date: new Date()}, {name: "file2", date:new Date()}];

const dateString = (date) => {
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    return (month + 1) + "-" + day + "-" + year;
}

export default class SearchBar extends Component {
  render() {
    return (
        <div style={{width: "100%"}}>
        <Select
        // defaultValue={fileList[0]}
        placeholder={"Select from " + this.props.selectedGroup + "..."}
        isClearable
        isSearchable
        name="search"
        options={fileList}
        filterOption={filterOptions}
        getOptionLabel={option =>
            `${option.name} ${dateString(option.date)}`
        }
      />
      </div>
    );
  }
}
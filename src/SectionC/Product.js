import * as React from 'react';
import SearchAppBar from '../Search/SearchBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../Style/General.css";
import "./SecC.css";


export  function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event,SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{display:'none'}}></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'Last 30days'}
          label="Day"
          onChange={handleChange}
        >
          <MenuItem value={'One week'}>One week</MenuItem>
          <MenuItem value={'Last 15days'}>Last 15days</MenuItem>
          <MenuItem value={'Last 30days'}>Last 30days</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function SecC() {
const ProName = 'Product Shell'

  return (
    <div className='Product'>
      <div className='d-flex d-js d-ac'>
      <SearchAppBar dataHere ={ProName} />
        <BasicSelect/>
      </div>
        <div className='d-flex d-js pro-list'>
          <p className='w25'>Product Name</p>
          <ul className='d-flex d-js w30 tac'>
            <li>Stock</li>
            <li>Price</li>
            <li>Total Sales</li>
          </ul>
        </div>
    </div>
  );
}

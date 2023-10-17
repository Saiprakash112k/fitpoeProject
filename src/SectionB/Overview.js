import React from 'react';
import { ChartContainer, BarPlot } from "@mui/x-charts";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState } from 'react';

import './SecB.css';

const uData = [3000, 2500, 4700, 3100, 4000, 2000, 4200, 5000, 4500, 3700, 3400, 4000];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const Month = xLabels.map((item) => {
  return (<p className='month'>{item}</p>)
})

export function TinyBarChart() {
  return (
    <div className='tinyChart'>
      <ChartContainer
        width={670}
        height={300}
        series={[{ data: uData, label: "uv", type: "bar" }]}
        xAxis={[{ scaleType: "band", data: xLabels}]}
      >

        <BarPlot slots={{
          bar: (props) => {
            const radius = 10;
            const { x, y, height, width, ownerState, ...restProps } = props;
            const d = `M${x},${y} h${width - radius} a${radius},${radius} 0 0 1 ${radius},${radius} v${height - radius} a${radius},${radius} 0 0 1 ${-radius},${radius} h${radius * 2 - width} a${radius},${radius} 0 0 1 ${-radius},${-radius} v${radius - height} a${radius},${radius} 0 0 1 ${radius},${-radius} z`
            
            let color = '';
            (ownerState.dataIndex == 7)?color = 'rgb(90,50,234)':color = 'rgb(242,239,255)';
            

            return <path d={d} fill={ownerState.color = color}
              {...restProps} />
          }
          // rgb(242,239,255)
          // <path d="M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z" fill="none" stroke="black" stroke-width="3" />

        }} 
        />
      </ChartContainer>
      <div className='d-flex d-jse pos-ab months'>{Month}</div>
    </div>
  );
}

export  function BasicSelect(props) {
  const [quarterly , setQuarterly] = useState('');

  const handleChange = (SelectChangeEvent,event) => {
    setQuarterly(event.props.value);
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{display:'none'}}></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'Quarterly'}
          label='Quarterly'
          onChange={handleChange}
        >

     
             <MenuItem value={'Quarterly'}>Quarterly</MenuItem>
 <MenuItem value={'Halfyearly'}>Halfyearly</MenuItem>
 <MenuItem value={'Yearly'}>Yearly</MenuItem>
            



        </Select>
      </FormControl>
    </Box>
  );
}

const Overview = () => {

  return (
    <div className='overview pos-rel'>
      <div  className='d-flex d-js d-ac overview-select'>
      <div>
        <h2 className='h2fontSize'>Overview</h2>
        <p  className='OverName'>Monthly Earning</p>
      </div>
      <div>
<BasicSelect/>
      </div>
      </div>
      <div className='chart'>
      <TinyBarChart />
      </div>
    </div>
  )
}
export default Overview;





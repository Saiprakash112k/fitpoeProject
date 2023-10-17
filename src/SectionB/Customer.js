import React from 'react';
import './SecB';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';


const data = [
    { label: 'Group A', value: 150 },
    { label: 'Group B', value: 400 },
    { label: 'Group C', value: 300 },
];

export function PieChartWithPaddingAngle() {
    return (
        <Stack direction="row">
            <PieChart
                series={[
                    {
                        paddingAngle: 5,
                        innerRadius: 70,
                        outerRadius: 45,
                        data,
                    },
                ]}
                margin={{ right: 5 }}
                width={200}
                height={200}
                legend={{ hidden: true }}
            >
                
            </PieChart>
        </Stack>
    );
}
export const Customercontent = () => {
    return (
        <>
            <div className='customer-con'>
                <h2 className='h2fontSize'>Customer</h2>
                <p className='OverName'>Customer that buy products</p>
            </div>
        </>
    )
}

const Customer = () => {
    return (
        <div className='customer d-flex d-js d-fc'>
            <Customercontent />
            <div className='pos-rel  d-center circleChart'>
                <PieChartWithPaddingAngle />
                <div className='circle-chart d-center d-fc'>
                    <h1>65%</h1>
                    <p>Total New Customers</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Customer;
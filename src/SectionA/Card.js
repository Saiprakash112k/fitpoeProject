import React from "react";
import './Card.css';
import '../Style/General.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { height, width } from "@mui/system";
import '../Style/Media.css'
    const cardData = [
        {
            image: require('../Images/SecA/coin.png'),
            Name: "Earning",
            Rate: '198',
            Arrow: <i className="fa fa-arrow-up" aria-hidden="true"></i>,
            Percentage: '37.8%',
            Period: 'month',
            background:'rgb(229,255,241)',
            color:'rgb(83,193,124)'

        },
        {
            image: require('../Images/SecA/lists.png'),
            Name: "Orders",
            Rate: '2.4',
            Arrow: <i className="fa fa-arrow-down" aria-hidden="true"></i>,
            Percentage: '2%',
            Period: 'month',
            background:'rgb(231,219,255)',
            color:'rgb(211,24,84)'
        },
        {
            image: require('../Images/SecA/save-money.png'),
            Name: "Balance",
            Rate: '2.4',
            Arrow: <i className="fa fa-arrow-down" aria-hidden="true"></i>,
            Percentage: '2%',
            Period: 'month',
            background:'rgb(204,242,255)',
            color:'rgb(211,24,84)'
        },
        {
            image: require('../Images/SecA/basket.png'),
            Name: "Total Sales",
            Rate: '89',
            Arrow: <i className="fa fa-arrow-up" aria-hidden="true"></i>,
            Percentage: '11%',
            Period: 'week',
            background:'rgb(255,184,222)',
            color:'rgb(83,193,124)'
        }

    ]
const CardComponent = ()=>{

    const cardContent = cardData.map((item) => {
        return (
            <>
                <div className="cardContent">
                    <Card>
                        <Box className="cardBox d-flex d-ac">
                            <Box variant='div' sx={{backgroundColor:item.background}} className='d-center circle-img'><CardMedia sx={{width:'65px',height:'65px'}} image={(item.image)}/></Box>
                            <CardContent>
                                <Typography variant="titel"
                                    color='rgb(225,225,225)' component='p'>{item.Name}</Typography>
                                <Typography variant="rate" component='h2'>${item.Rate}k</Typography>
                                <div className="d-center">
                                <Typography variant="per" className="mData" component='p' sx={{color:item.color}}>{item.Arrow} {item.Percentage} &nbsp;</Typography>
                                <Typography variant="per" className="mData"component='p'>this {item.Period}</Typography>
                                </div>
                            </CardContent>
                        </Box>
                    </Card>
                </div>
            </>
        )
    })

    return(
        <>
        {cardContent}
        </>
    )
}

export default CardComponent;

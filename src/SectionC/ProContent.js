import React from "react";
const Data = require('./Data.json')
const ProContent = () => {
    const productData = Data.ProductData.map((item) => {
        return (
            <div className="d-flex d-js productCard">
                <div className="d-flex">
                    <div className="productimg">
                        <img src={require(`../Images/ProductImage/${item.ProductImage}.jpg`)} alt={item.ProductImage} />
                    </div>
                    <div className="cardCon">
                        <h4>{item.ProductName}</h4>
                        <p>{item.ProductContent}</p>
                    </div>
                </div>
                <ul className="d-flex d-js w30 listcontent d-ac tac">
                    <li>{item.Stock} in stock</li>
                    <li className="price">$ {item.Price}</li>
                    <li>{item.TotalSales}</li>
                </ul>
            </div>
        )
    })
 
    return (
        <div className="pro-con max-w">
{productData}
        </div>
    )
}
export default ProContent
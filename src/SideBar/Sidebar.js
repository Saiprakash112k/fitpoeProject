import React, { useState } from "react";
import "../Style/General.css"
import "../SideBar/Sidebar.css"
import "../Style/Media.css"
const Sidebar = (props) => {

    return (
  
        
            <div className="sideBar d-flex d-fc d-js">
                <div>
                    <div className="d-flex d-ac dashboard p20">
                        <div className="dash-img"><img src={require("../Images/SideBar/setting.png")}></img> </div>
                        <h2>Dashboard</h2>
                    </div>
                    <div className="dash-list p20">
                        <ul className="pos-rel">
                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <div className="pos-rel">
                                        <img src={require('../Images/SideBar/rounded-rectangle.png')} />
                                        <img src={require('../Images/SideBar/key.png')} className="pos-ab key" />
                                    </div>
                                    Dashboard
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>

                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <div className="pos-rel">
                                        <img src={require('../Images/SideBar/rounded-rectangle.png')} />
                                        <img src={require('../Images/SideBar/3d-cube.png')} className="pos-ab key" />
                                    </div>
                                    Product
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>
                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <div className="pos-rel">
                                        <img src={require('../Images/SideBar/rounded-rectangle.png')} />
                                        <img src={require('../Images/SideBar/account.png')} className="pos-ab key" />
                                    </div>
                                    Customers
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>
                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <img src={require('../Images/SideBar/save-money.png')} />
                                    Income
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>
                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <img src={require('../Images/SideBar/promotions.png')} />
                                    Promote
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>
                            <li className="d-flex d-ac d-js">
                                <div className="d-center">
                                    <img src={require('../Images/SideBar/comment.png')} />
                                    Help
                                </div>
                                <img src={require('../Images/SideBar/next.png')} className="arrow" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile d-flex d-ac d-js">
                    <div className="d-center">
                        <div className="profile-img"><img src={require('../Images/SideBar/profile-img.png')} /></div>
                        <div>
                            <p className="evano">Evano</p>
                            <p className="evo-pm">Project Manager</p>
                        </div>
                    </div>
                    <img src={require('../Images/SideBar/next.png')} className="arrow" />
                </div>
            </div>

    )
}
export default Sidebar;
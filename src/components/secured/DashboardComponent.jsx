import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import SideBarComponent from '../shared/SideBarComponent';

const DashboardComponent = () => {
    const [dashboardData, setdashboardData] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/assets/dashboard.json")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.statusCode === 200) {
                        setdashboardData(result.response);
                    }
                },
                (error) => {

                }
            )
    }, [])

    return (
        <section className='pageSection'>
            <div className="row align-items-start">
                <div className="col-sm-3 d-flex justify-content-center pt-3">
                    <SideBarComponent></SideBarComponent>
                </div>
                <div className="col-sm-9 pt-3">
                    <div className="d-flex align-content-start flex-wrap ml-2">
                        {
                            dashboardData.length > 0 &&
                            dashboardData.map((item) => {
                                return (
                                    <div className="dashboard-card p-0" key={item.productId}>
                                        <CardComponent cardData={item} />
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashboardComponent;
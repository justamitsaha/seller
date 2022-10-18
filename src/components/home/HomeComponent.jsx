import React, { useState } from "react";
import LoginComponent from './LoginComponent';
import RegisterationComponent from './RegisterationComponent';
import ForgotPasswordComponenet from './ForgotPasswordComponenet';



function HomeComponent() {
    const [tabSelected, settabSelected] = useState("loginSelected");

    return (
        <section className="homeSection pageSection">
            <div className="container-fluid text-center home-container pt-5 pb-5">
                <div className="row">
                    <div className="col-sm-7">
                    </div>
                    <div className="col-sm-5">
                        <div className='home-tab-section m-5'>
                            <nav>
                                <div className="nav home-tab-header nav-tabs row" id="nav-tab" role="tablist">
                                    <div className='col d-grid gap-2 p-0'>
                                        <button className={`btn btn-dark tab-button ${(tabSelected === 'loginSelected') ? 'tabselected' : ''}`} type="button" onClick={() => settabSelected("loginSelected")} id="tab1">Login</button>
                                    </div>
                                    <div className='col d-grid gap-2 p-0'>
                                        <button className={`btn btn-dark tab-button ${(tabSelected === 'registerSelected') ? 'tabselected' : ''}`} type="button" onClick={() => settabSelected("registerSelected")} id="tab2">Register</button>
                                    </div>
                                    <div className='col d-grid gap-2 p-0'>
                                        <button className={`btn btn-dark tab-button ${(tabSelected === 'forgotPasswordSelected') ? 'tabselected' : ''}`} type="button" onClick={() => settabSelected("forgotPasswordSelected")} id="tab3">Forgot Password</button>
                                    </div>

                                </div>
                            </nav>
                            <div className="home-tab-content tab-content" id="nav-tabContent">
                                <div className="home-tab tab-pane fade show active" id="forgotPassword" role="tabpanel" aria-labelledby="nav-home-tab">
                                    {(tabSelected === 'loginSelected') ? <LoginComponent /> : null}
                                    {(tabSelected === 'registerSelected') ? <RegisterationComponent /> : null}
                                    {(tabSelected === 'forgotPasswordSelected') ? <ForgotPasswordComponenet /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeComponent;
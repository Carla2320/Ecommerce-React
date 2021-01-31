import React from 'react';
import { AccountInfo } from './AccountInfo';
import { Adresses } from './Adresses';
import { PaymentMethod } from './PaymentMethod';
export const Profile = () => {
    
    return (
<div classNameName="my-account pt-80 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h3 className="title text-capitalize mb-30 pb-25">my account</h3>
            </div>
            <div className="col-lg-3 col-12 mb-30">
                <div className="myaccount-tab-menu nav" role="tablist">
                    <a href="#dashboad" data-toggle="tab"><i className="fas fa-tachometer-alt"></i>
                        Dashboard</a>
                    <a href="#orders" data-toggle="tab"><i className="fa fa-cart-arrow-down"></i>
                        Orders</a>
                    <a href="#payment-method" data-toggle="tab"><i className="fa fa-credit-card"></i>
                        Payment
                        Method</a>
                    <a href="#address-edit" data-toggle="tab"><i className="fa fa-map-marker"></i>
                        address</a>
                    <a href="#account-info" data-toggle="tab" className="active"><i className="fa fa-user"></i> Account
                        Details</a>
                    <a href="login.html"><i className="fa fa-sign-out"></i> Logout</a>
                </div>
            </div>
            <div className="col-lg-9 col-12 mb-30">
                <div className="tab-content" id="myaccountContent">
                    <div className="tab-pane fade" id="dashboad" role="tabpanel">
                        <div className="myaccount-content">
                            <h3>Dashboard</h3>

                            <div className="welcome mb-20">
                                <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a
                                        href="login-register.html" className="logout"> Logout</a>)</p>
                            </div>

                            <p className="mb-0">From your account dashboard. you can easily check &amp; view your
                                recent orders, manage your shipping and billing addresses and edit your
                                password and account details.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="orders" role="tabpanel">
                        <div className="myaccount-content">
                            <h3>Orders</h3>

                            <div className="myaccount-table table-responsive text-center">
                                <table className="table table-bordered">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mostarizing Oil</td>
                                            <td>Aug 22, 2018</td>
                                            <td>Pending</td>
                                            <td>$45</td>
                                            <td><a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Katopeno Altuni</td>
                                            <td>July 22, 2018</td>
                                            <td>Approved</td>
                                            <td>$100</td>
                                            <td><a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Murikhete Paris</td>
                                            <td>June 12, 2017</td>
                                            <td>On Hold</td>
                                            <td>$99</td>
                                            <td><a href="shopping-cart.html" className="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="payment-method" role="tabpanel">
                        <PaymentMethod className="payment-method"/>
                    </div>
                    <div className="tab-pane fade" id="address-edit" role="tabpanel">
                        <Adresses />
                    </div>
                    <AccountInfo className="account-info" />
                </div>
            </div>
        </div>
    </div>
</div>
)
}
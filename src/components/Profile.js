import React from 'react';
import { useSelector } from 'react-redux';
import { AddCard } from './AddCard';
export const Profile = () => {
    
    const { usuario } = useSelector( state => 
        state.auth );

    var arr = [];

    usuario.tarjeta?Object.keys(usuario.tarjeta).forEach(function(key) {
        arr.push(usuario.tarjeta[key]);
    }) : arr=[];
    return (
<div class="my-account pt-80 pb-50">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="title text-capitalize mb-30 pb-25">my account</h3>
            </div>
            <div class="col-lg-3 col-12 mb-30">
                <div class="myaccount-tab-menu nav" role="tablist">
                    <a href="#dashboad" data-toggle="tab"><i class="fas fa-tachometer-alt"></i>
                        Dashboard</a>
                    <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down"></i>
                        Orders</a>
                    <a href="#payment-method" data-toggle="tab"><i class="fa fa-credit-card"></i>
                        Payment
                        Method</a>
                    <a href="#address-edit" data-toggle="tab"><i class="fa fa-map-marker"></i>
                        address</a>
                    <a href="#account-info" data-toggle="tab" class="active"><i class="fa fa-user"></i> Account
                        Details</a>
                    <a href="login.html"><i class="fa fa-sign-out"></i> Logout</a>
                </div>
            </div>
            <div class="col-lg-9 col-12 mb-30">
                <div class="tab-content" id="myaccountContent">
                    <div class="tab-pane fade" id="dashboad" role="tabpanel">
                        <div class="myaccount-content">
                            <h3>Dashboard</h3>

                            <div class="welcome mb-20">
                                <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a
                                        href="login-register.html" class="logout"> Logout</a>)</p>
                            </div>

                            <p class="mb-0">From your account dashboard. you can easily check &amp; view your
                                recent orders, manage your shipping and billing addresses and edit your
                                password and account details.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="orders" role="tabpanel">
                        <div class="myaccount-content">
                            <h3>Orders</h3>

                            <div class="myaccount-table table-responsive text-center">
                                <table class="table table-bordered">
                                    <thead class="thead-light">
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
                                            <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Katopeno Altuni</td>
                                            <td>July 22, 2018</td>
                                            <td>Approved</td>
                                            <td>$100</td>
                                            <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Murikhete Paris</td>
                                            <td>June 12, 2017</td>
                                            <td>On Hold</td>
                                            <td>$99</td>
                                            <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="payment-method" role="tabpanel">
                        <div class="myaccount-content">
                            <h3>Payment Method</h3>
                            {
                            arr.map((item) =>
                             <p key={item.numero}>{ item.cvs } {item.numero} {item.date} {item.tipo}</p>
                            )
                            }
                            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#addCardModal">
                            + Agregar tarjeta
                            </button>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="address-edit" role="tabpanel">
                        <div class="myaccount-content">
                            <h3>Billing Address</h3>
                            <address>
                                <p><strong>{ usuario.nombre_usuario }</strong></p>
                                <p>{ usuario.direccion_principal }</p>
                            </address>
                            <address>
                                <p>{ usuario.direccion_secundaria }</p>
                            </address>
                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="account-info" role="tabpanel">
                        <div class="myaccount-content">
                            <h3>Account Details</h3>
                            <div class="account-details-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6 col-12 mb-30">
                                            <input
                                                type="text"
                                                id="first-name"
                                                className="form-control"
                                                value={ usuario.nombre_usuario }
                                                name="cedula"
                                                placeholder="First Name"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                            </div>
                                        <div class="col-lg-6 col-12 mb-30">
                                            <input
                                                type="text"
                                                id="last-name"
                                                className="form-control"
                                                value={ usuario.apellido_usuario }
                                                name="cedula"
                                                placeholder="Last Name"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                        </div>
                                        <div class="col-12 mb-30">
                                            <input
                                                type="text"
                                                id="display-name"
                                                className="form-control"
                                                value={ usuario.cedula }
                                                name="cedula"
                                                placeholder="CI"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                        </div>
                                        <div class="col-12 mb-30">
                                            <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    value={ usuario.email_usuario }
                                                    name="cedula"
                                                    placeholder="Email Address"
                                                    autoComplete="off"
                                                    disabled="true"
                                                />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                  <AddCard />
                </div>
            </div>
        </div>
    </div>
</div>
)
}
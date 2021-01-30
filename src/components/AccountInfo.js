import React from 'react';
import { useSelector } from 'react-redux';


export const AccountInfo = () => {
    const { usuario } = useSelector( state => 
        state.auth );
    return (
        <div className="tab-pane fade active show" id="account-info" role="tabpanel">
                        <div className="myaccount-content">
                            <h3>Account Details</h3>
                            <div className="account-details-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-30">
                                            <input
                                                type="text"
                                                id="first-name"
                                                classNameName="form-control"
                                                value={ usuario.nombre_usuario }
                                                name="cedula"
                                                placeholder="First Name"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                            </div>
                                        <div className="col-lg-6 col-12 mb-30">
                                            <input
                                                type="text"
                                                id="last-name"
                                                classNameName="form-control"
                                                value={ usuario.apellido_usuario }
                                                name="cedula"
                                                placeholder="Last Name"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                        </div>
                                        <div className="col-12 mb-30">
                                            <input
                                                type="text"
                                                id="display-name"
                                                classNameName="form-control"
                                                value={ usuario.cedula }
                                                name="cedula"
                                                placeholder="CI"
                                                autoComplete="off"
                                                disabled="true"
                                            />
                                        </div>
                                        <div className="col-12 mb-30">
                                            <input
                                                    type="email"
                                                    id="email"
                                                    classNameName="form-control"
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
    )
}
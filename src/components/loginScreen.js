import React from 'react';

export const loginSreen = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <form className="col">
                <h1>
                    Ingreso
                </h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-danger btn-lg btn-block">Ingresar</button>
                </form>
                <div className="col">
                <img src="../../assets/chaqueta.jpg" class="d-block w-100"/>
                </div>
            </div>
        </div>
        )
}
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useStateValue } from '../reducers/StateProvider';
import { AccountInfo } from './AccountInfo';
import { Adresses } from './Adresses';
import { PaymentMethod } from './PaymentMethod';

function Pago(){
    const [{ basket }] = useStateValue();
    console.log(basket[0])
    const num=basket.map((item)=>
        item.id
    );
    console.log(num)
    for (var i =0;i<basket.length; i++){
        console.log(basket[i])
    }

    const { usuario } = useSelector( state => 
        state.auth );

    var tarjetas = [];
    Object.keys(usuario.tarjeta).forEach(function(key) {
        tarjetas.push(usuario.tarjeta[key]);
    });
    
    const { cedula } = useSelector( state => state.auth.usuario);

    const dispatch = useDispatch();



      const submit = (e) => {
        console.log("tarjeta escogida",e.numero);
        for (var i =0;i<basket.length; i++){
            //dispatch(detalle_venta("",basket[i].cantidad,basket[i].precio,basket[i].id))

        }
        const sumaprecio=basket?.reduce((acum,item)=>{
        return parseFloat(item.precio)+acum;}, 0);
        console.log(sumaprecio)
        

      }

    return (
       
<div>
<section class="check-out-section pt-80 pb-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-30">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="false" aria-controls="collapseOne">
                                    1 Personal Information
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordion">
                                <AccountInfo />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    2 Addresses
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <Adresses />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse"
                                    data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span>3</span> Payment
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <PaymentMethod />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-30">
                <ul class="list-group cart-summary rounded-0">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <ul class="items">
                            <li>1 item</li>
                            <li>Shipping</li>
                        </ul>
                        <ul class="amount">
                            <li>$11.90</li>
                            <li>$7.00</li>
                        </ul>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <ul class="items">
                            <li>Total (tax excl.)</li>
                            <li>Taxes</li>
                        </ul>
                        <ul class="amount">
                            <li>$18.90</li>
                            <li>$0</li>
                        </ul>
                    </li>
                    <li class="list-group-item text-center">
                        <button class="btn theme-btn--dark1 btn--md">Proceed to checkout</button>
                    </li>
                </ul>

                <div class="delivery-info mt-20">
                    <ul>
                        <li>
                            <img src="assets/img/icon/10.png" alt="icon"/> Security policy (edit with Customer
                            reassurance module)
                        </li>
                        <li>
                            <img src="assets/img/icon/11.png" alt="icon"/> Delivery policy (edit with Customer
                            reassurance module)
                        </li>
                        <li class="mb-0">
                            <img src="assets/img/icon/12.png" alt="icon"/> Return policy (edit with Customer
                            reassurance module)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</div>       
        
    )
}
export default Pago;
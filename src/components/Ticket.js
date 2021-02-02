import React from 'react';
import { useHistory } from 'react-router-dom';
export const Ticket = () => {
    const history = useHistory();
    return (
        <div class="container col-lg-4 mb-30">
                <ul class="list-group cart-summary rounded-0">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <ul class="items">
                            <li>NUMERO</li>
                            <li>ENTREGA PREVISTA</li>
                        </ul>
                        <ul class="amount">
                            <li>87687ASDKJHASKDJ10293UTOWEI</li>
                            <li>10 DE FEBRERO</li>
                        </ul>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <ul class="items">
                            <li>Total Pedido</li>
                            <li>Envio</li>
                        </ul>
                        <ul class="amount">
                            <li>$18.90</li>
                            <li>$0.50</li>
                        </ul>
                    </li>
                    <li class="list-group-item text-center">
                        <button class="btn theme-btn--dark1 btn--md" onClick={()=>history.push('/home')}>SEGUIR COMPRANDO</button>
                    </li>
                </ul>
            </div>
       
    )
}
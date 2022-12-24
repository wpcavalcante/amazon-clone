import React from 'react';
import "./subtotal.css"
import { useStateValue } from '../../../StateProvider';
import {getBasketTotal} from '../../../Reducer';

export default function Subtotal(){

    const [{basket}, dispatch] = useStateValue()


    return (
        <div className='subtotal'>
            <p>Total {basket.length} produtos: <strong>R${getBasketTotal(basket)}</strong></p>
            <div className="subtotal-gift">
                <input type="checkbox" /> Esse pedido é para presente
            </div>
            <button>Finalizar Compra</button>
        </div>
    )
}
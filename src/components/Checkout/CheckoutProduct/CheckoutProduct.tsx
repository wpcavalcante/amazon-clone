import React from 'react';

import { useStateValue } from '../../../StateProvider';

type PropsType = {
    id:string
    title:string 
    price:number 
    rating:any
    image:string
}

export default function CheckoutProduct(props:PropsType){

    const [{basket}, dispatch] = useStateValue()

    function removeFromBasket(){
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:props.id,

        })
    }

    return(
        <div className="flex my-20">
            <img src={props.image} alt="" className='object-contain w-80 h-80'/>
            <div className="pl-4">
                <h3 className='text-xl font-bold'>{props.title}</h3>
                <p className="text-2xl font-extrabold">R${props.price}</p>
                <div className="flex">
                    {
                        //@ts-ignore
                        Array(props.rating).fill().map((_, i) =>(
                            <p className='text-2xl mt-4'>⭐</p>
                        ))
                    }
                </div>
                <button className='bg-main-color rounded-xl py-4 px-4 mt-8 text-md  uppercase text-black transition .2s ease-in hover:bg-btn-color' onClick={removeFromBasket}>Remover do carrinho</button>
            </div>
        </div>
    )
}
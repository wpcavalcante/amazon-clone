import React from 'react';
import {useStateValue} from "../../../StateProvider"

type PropsType = {
    id:string
    title:string 
    price:number 
    rating:any
    image:string
}
export default function Product(props: PropsType){

    const [state,dispatch] = useStateValue()

    function addToBasket(){
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:props.id,
                title: props.title,
                image:props.image,
                price:props.price,
                rating:props.rating
            }
        })
    }



    return(
        <div className="flex flex-col items-center justify-between m-4 p-8 w-full bg-white z-2">
            <div className="h-64 mb-4">
                <h3 className='text-2xl'>{props.title}</h3>
                <p className="mt-4 text-2xl font-bold">R${props.price}</p>
                <div className="flex">
                    {
                        //@ts-ignore
                        Array(props.rating).fill().map((_, i) =>(
                            <p className='text-3xl mt-4'>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img className='h-64 w-full object-contain m-8' src={props.image} alt="" />
            <button onClick={addToBasket} className="bg-btn-color rounded-xl py-4 px-4 mt-4 text-xl  uppercase text-black transition .2s ease-in hover:bg-main-color">Adicionar ao carrinho</button>

        </div>
    )
}
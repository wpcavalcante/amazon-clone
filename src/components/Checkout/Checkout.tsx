import React from 'react';
import Header from '../Header/Header';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

import { useStateValue } from '../../StateProvider';


export default function Checkout(){

    const [{basket}, dispatch] = useStateValue()




    return(
        <div>
            <Header/>
            <div className="flex p-16 bg-white h-max content-between max-sm:flex-col">
                <div className="flex flex-col mr-8">
                    <img src="https://3c5239fcccdc41677a03-1135555c8dfc8b32dc5b4bc9765d8ae5.ssl.cf1.rackcdn.com/Adver--Banners--150x750px-RIOT.jpg" 
                    alt="" className='w-full mb-4'/>
                    <h2 className="mr-4 mt-8 p-2 border-b-2 border-solid border-lightgray text-3xl">Sua Lista de Compras</h2>
                   {
                    basket.map((item: { id: string; title: string; image: string; price: number; rating: any; }) =>(
                        <CheckoutProduct 
                        id = {item.id}
                        title ={item.title}
                        image = {item.image}
                        price ={item.price}
                        rating = {item.rating}
                        />
                    ))
                   }
                </div>

                <div>
                    <Subtotal/>
                </div>
            </div>
        </div>
     
    )
}
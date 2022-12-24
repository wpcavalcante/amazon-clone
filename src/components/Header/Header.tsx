import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { useStateValue } from '../../StateProvider';



export default function Header(){
        const [{basket}, dispatch] = useStateValue()

        return(
            <div className="h-32 flex items-center bg-header-color sticky top-0 z-50">
                <Link to="/" style={{textDecoration:"none"}}>
                <div className="flex items-center text-main-color mx-8">
                    <StoreIcon className="mr-4" fontSize='large'/>
                    <h2 className="text-white text-3xl uppercase border-none font-bold">Amazon</h2>
                </div>
                </Link>
            
                <div className="flex flex-1 item-center rounded-3xl mx-3">
                    <input type="text" className='h-9 p-4 border-none w-full' />
                    <SearchIcon fontSize="large" className='p-1  bg-main-color'/>
                </div>

                <div className="header-nav">
                    <ul className="flex content-evenly items-center">
                        <li className="flex flex-col mx-4 text-white max-sm:hidden">
                            <h6 className='text-2xl'>Olá, faça seu login</h6>
                            <h5 className='text-xl'>Contas e Listas</h5>
                        </li>
                        <li className="flex flex-col mx-4 text-white max-sm:hidden">
                            <h6 className='text-2xl'>Seus</h6>
                            <h5 className='text-xl'>Pedidos</h5>
                        </li>
                        <Link to="/checkout" style={{textDecoration:"none"}}>
                        <li className="flex items-center text-main-color mr-8 ml-10">
                            <AddShoppingCartIcon fontSize='large'/>
                            <h5 className='mx-2 text-3xl'>{basket.length}</h5>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
}

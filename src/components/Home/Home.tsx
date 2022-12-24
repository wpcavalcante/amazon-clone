import React from 'react';
import Header from '../Header/Header';
import Product from './Product/Product';


export default function Home(){
    return(
        <div>
        <Header/>
        <div className="flex content-center ml-auto mr-auto max-w-screen-xl">
            <div className="w-full">
                <div className="flex z-50 mx-4 max-md:flex-col">
                    <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                    <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                </div>
                <div className="flex z-50 mx-4 max-md:flex-col">
                <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                </div>
                <div className="flex z-50 mx-4 max-md:flex-col">
                <Product
                        id="1"
                        title="Webcam 1080P com microfone e capa de privacidade, câmera USB para webcam, webcam de streaming HD para desktop e 
                        laptop PC com microfone base rotativo de 360 graus (Black)"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg"
                    />
                
                </div>
                
            </div>
        </div>
    </div>
    )
}
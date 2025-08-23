import { useState } from 'react';
import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Listing from './components/listing/Listing';
import type ProductDataTypes from './types/ProductDataTypes';
import type { IProductStateType } from './types/ProductDataTypes';



export default function ProductListing() {
    const [products, setProducts] = useState<ProductDataTypes[]>([]);
    const productState: IProductStateType = { products, setProducts };

    return (
        <>
            <Header />
            {/* TODO: filter to make get request to server or test mock */}
            <Filter productState={productState} />
            <Counter />
            <Listing productState={productState} />
            <Footer />
        </>
    )
}
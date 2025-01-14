"use client"
import React from 'react';
import dynamic from 'next/dynamic'
// import Products from '../../../components/Products';
// import ProductsOne from '../../../components/ProductsOne';
// import ProductsTwo from '../../../components/ProductsTwo';
// import ProductsThree from '../../../components/ProductsThree';

const Products= dynamic(() => import('../../../components/Products'), { ssr: false })
const ProductsOne= dynamic(() => import('../../../components/ProductsOne'), { ssr: false })
const ProductsTwo= dynamic(() => import('../../../components/ProductsTwo'), { ssr: false })
const ProductsThree= dynamic(() => import('../../../components/ProductsThree'), { ssr: false })
const page = () => {
    return (
        <div className='dark:bg-primary overflow-x-hidden'>
           <div className='dark:bg-primary'>
           <Products/>
            <ProductsOne/>
            <ProductsTwo/>
            <ProductsThree/>
           </div>
        </div>
    );
};

export default page;
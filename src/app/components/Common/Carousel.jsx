"use client"
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';


export default function CarouselImg() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    // Sample mock product data
    useEffect(() => {
        const mockData = [
            { name: 'Product 1', price: '20.00', inventoryStatus: 'INSTOCK' },
            { name: 'Product 2', price: '30.00', inventoryStatus: 'LOWSTOCK' },
            { name: 'Product 3', price: '25.00', inventoryStatus: 'OUTOFSTOCK' },
            { name: 'Product 4', price: '40.00', inventoryStatus: 'INSTOCK' },
            { name: 'Product 5', price: '35.00', inventoryStatus: 'LOWSTOCK' },
            { name: 'Product 6', price: '50.00', inventoryStatus: 'INSTOCK' }
        ];
        setProducts(mockData);
    }, []);

    const productTemplate = (product) => {
        return (
            <>


                <div className=" m-2 text-center py-5 px-3">
                    <div className="">

                        <img src='https://image-cdn.hypb.st/https://hypebeast.com/image/2018/09/uber-new-2018-logo-first-look-TWW.jpg?w=960&cbr=1&q=90&fit=max' alt='' className='w-90 h-40' />
                    </div>
                    <div>

                        <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                            <Button icon="pi pi-search" rounded />
                            <Button icon="pi pi-star-fill" rounded severity="success" />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="card ">
            <Carousel value={products} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
}

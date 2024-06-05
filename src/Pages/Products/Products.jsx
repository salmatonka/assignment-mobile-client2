import React from 'react'
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../Hooks/useTitle';
import MobilesCard from '../MobilesCard/MobilesCard';
const Products = () => {
    useTitle('Product');
    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await fetch('https://mobile-market-server.onrender.com/usedMobile')
            const data = await res.json()
            return data;
        }
    })
    // console.log(mobiles)

    return (
        <div className="bg-gradient-to-tr to-purple-100 from-cyan-100 ">
            <div className='py-10 px-6'>
                {/* {
          allProducts.length
        } */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        mobiles?.reverse()
                        ?.slice(0, 6)?.map(mobile => <MobilesCard
                            key={mobile?._id}
                            mobile={mobile}
                        ></MobilesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products

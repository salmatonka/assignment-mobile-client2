import React from 'react'
import MobilesCard from '../MobilesCard/MobilesCard';
import useTitle from '../../Hooks/useTitle';

const FilterByCategorey = () => {
    useTitle('FilterByCategorey');
    const mobiles = useLoaderData()
    return (
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        mobiles.map(mobile => <MobilesCard
                            key={mobile?._id}
                            mobile={mobile}
                        ></MobilesCard>)
                    }
                </div>
        </div>
    );
};

export default FilterByCategorey

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
const Categories = () => {
    useTitle('Categories');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mobile-market-server.onrender.com/mobileCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="bg-gradient-to-tr to-purple-100 from-cyan-100 ">
        <div className=' bg-gradient-to-tr to-purple-200 from-cyan-200 w-full mx-auto shadow-2xl'>
            <h1 className="text-3xl pt-14 font-bold text-center pb-10">Mobile Phone Brand</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10'>
            {
                categories.map(category => <Link
                    key={category.id}
                    category={category}
                    to={`/usedMobile/${category.category}`}>
                    <button className='category-button bg-gradient-to-tr to-purple-400 from-cyan-300 w-full py-3 rounded-lg'>{category.name}</button></Link>
                )
            }
            </div>
        </div>
    </div>
    );
};

export default Categories

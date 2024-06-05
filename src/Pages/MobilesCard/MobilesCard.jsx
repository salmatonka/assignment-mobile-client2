import React from 'react'
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const MobilesCard = ({mobile}) => {
    useTitle('MobilesCard');
    const { _id, name, details, img, sellerName, report, userEmail, launch_date, resale_price, current_price
        , location, year } = mobile;
    // console.log(mobile)

    return (
        <div className='py-6'>
            <div className="max-w-lg p-4 pb-8 bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-2xl rounded-lg dark:text-gray-100 ">

                <div className="">
                    <div className="">
                        <img src={img} alt="" className=" object-center w-full bg-gray-100 rounded-md h-72 " />
                        <div className="flex items-center text-md px-6 py-4">
                            <span>Posted Date: {launch_date}</span>

                        </div>

                    </div>
                    <div className="space-y-4 px-6">
                        <div className="">
                            <h2 className="text-2xl text-[#1159AB] font-bold pt-2 pb-4">{name}</h2>
                            <h4 className=" tb-2 py-4"> <span className="text-[#1159AB] font-bold ">Details:</span> {details?.slice(0, 60)}...</h4>
                            < h4 className="text-lg  tb-2 ">Resale Price: ৳{resale_price}</h4>
                            <h4 className="text-lg  pb-10"><s>Original Price: ৳{current_price}</s></h4>

                        </div>
                    </div>

                </div>
                <Link className=' flex justify-center' to={`/mobile/${_id}`}><button style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }} className='category-button fond-semibold bg-gradient-to-tr to-purple-400 from-cyan-300 w-full mx-6 py-3 rounded-lg'>Details</button></Link>

            </div>



        </div>


    );
};

export default MobilesCard

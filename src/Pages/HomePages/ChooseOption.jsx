import React from 'react'
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineSync } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';

const ChooseOption = () => {
  return (
    <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-16 '>
    <div>
        <div className='bg-gradient-to-tr to-purple-200 from-cyan-200 w-5/6 mx-auto rounded-lg shadow-2xl text-center  py-4'>
            <h3 className='text-center text-3xl font-bold pb-4 mt-6'>WHY CHOOSE US</h3>
            <p>mMarket.com – Recognize the today’s Technology gets obsolete tomorrow so, we keep hawk’s eye on the International trend and bring a solution which is essential, important and worthy to invest. mMarket.com have dedicated distribution point in all major cities all over Bangladesh to ensure faster delivery & reliable service.</p>


            <div>
                <div className="container p-2 mx-auto rounded-md sm:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">



                    <div className="duration-300 transform bg-gradient-to-tr to-purple-300 from-cyan-300 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-sm">
                            <AiFillSetting className='text-2xl ml-20' ></AiFillSetting>

                            <h6 className="mb-2 font-semibold leading-5">Great Value</h6>
                            <p className="text-sm text-gray-900">
                                We get you the best value for your money
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-gradient-to-tr to-purple-300 from-cyan-300 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-sm">
                            <BiHeadphone className='text-2xl ml-20' ></BiHeadphone>

                            <h6 className="mb-2 font-semibold leading-5">24/7 SUPPORT</h6>
                            <p className="text-sm text-gray-900">
                                We’re here to support you around the clock
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-gradient-to-tr to-purple-300 from-cyan-300 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-sm">
                            <AiOutlineSync className='text-2xl ml-20' ></AiOutlineSync>

                            <h6 className="mb-2 font-semibold leading-5">Warranty Policy</h6>
                            <p className="text-sm text-gray-900">Policy Our warranty policy will give you peace of mind
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-gradient-to-tr to-purple-300 from-cyan-300 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-fulllg:p-5 border border-l-0 rounded-r shadow-sm">
                            <AiOutlineShoppingCart className='text-2xl ml-20' ></AiOutlineShoppingCart>

                            <h6 className="mb-2 font-semibold leading-5">Free Shipping</h6>
                            <p className="text-sm text-gray-900">
                                We often provide free shipping for our products
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</div>
  )
}

export default ChooseOption

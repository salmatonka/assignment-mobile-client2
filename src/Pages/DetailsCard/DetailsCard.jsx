 import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider';
const DetailsCard = () => {
    useTitle('DetailsCard');
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const [productData, setProductData] = useState(null)
    const detailsCard = useLoaderData();
    const { _id, name,details, img, sellerName, report, userEmail, launch_date, resale_price, current_price
        , location, year} = detailsCard;
    // console.log(detailsCard)

    const handleProductBooking = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            buyer: username,
            email,
            phone,
            location,
            resale_price, 
            current_price


        }
        console.log(booking)
        fetch(`https://mobile-market-server.onrender.com/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/dashboard/myOrder')

            })
    };

    const handleReported = (id) => {
        console.log(id)
        const permission = window.confirm(`Are you report ${name}`);
        if (permission) {
            fetch(`https://mobile-market-server.onrender.com/usedMobile?id=${id}`, {
                method: "PUT"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Product reported')
                        console.log(data);

                    }
                })
        }

    }

    const [bluetic, setBluetic] = useState(null)


    useEffect(() => {
        fetch(`https://mobile-market-server.onrender.com/users`)
            .then(res => res.json())
            .then(data => {
                setBluetic(data)

            })
    }, [bluetic])

    return (


<section className="text-gray-800 pt-12">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold text-[#1159AB] mb-3 leading-none sm:text-6xl">{name}</h1>
			<hr />
			<p className="text-lg mt-5">{details}</p>
			<div className='md:flex justify-between'>
				<h3 className='text-xl font-bold text-blue-600'>Resale Price: ৳ {resale_price}</h3>
				<h4><s>Current Price: ৳{current_price}</s> </h4>

			</div>
            <p>Date: {launch_date}</p>
			<p>Used time: {year} year</p>
			<p>Location: <span className='text-primary'>{location}</span> </p>
			<div className='p-3 shadow-xl md:flex items-center justify-between'>
			<div>
            <h2 className='text-xl text-secondary mr-2'>seller name: {sellerName} </h2>
                  {
                    bluetic?.map(blue=> <>
                    {
                        blue.email === userEmail && blue.verified && <FaCheck className='text-blue-600'></FaCheck>
                    }
                    </>) 
                  }
            </div>
                 <div className=''>
               {
                report?
                <button disabled className='btn btn-error btn-sm text-white w-32'>Report</button>
                :
                <button onClick={()=>handleReported(_id)} className='btn btn-error btn-sm text-white w-32'>Report</button>
               }
                 </div>
			</div>


            <label htmlFor='booking-modal' style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }} className="btn bg-gradient-to-tr to-purple-400 from-cyan-300 font-bold text-white mt-3">Book Now!</label>


			<div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProductData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name} for </h3>
                    <form onSubmit={handleProductBooking}>
                        <input name='name'  type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                        <div className='flex justify-between'>
                            <p>Resale Price: ৳{resale_price}</p>
                            <p><s> Current Price: ৳{current_price}</s> </p>
                        </div>
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                        <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                        {
                            !user && <p>Please login</p>
                        }
                       <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                            "btn bg-[#1159AB] w-full"
                            :
                            "btn btn-accent w-full btn-disabled"
                        } > 
                        </input>
                    </form>
                </div>
            </div>
        </div>

		</div>

	</div>
</section>

    );
};


export default DetailsCard


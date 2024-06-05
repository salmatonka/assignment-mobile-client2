
import useTitle from '../../../Hooks/useTitle';
import React, { useContext, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
const EditProduct = () => {
    useTitle('AddProduct');

    const product = useLoaderData();
    console.log(product)
    const [name, setName] = useState(product.name)
    const [date, setDate] = useState(product.date)
    const [img, setImg] = useState(product.imge)
    const [model, setModel] = useState(product.model)
    const [category, setCategory] = useState(product.categorye)
    const [location, setLocation] = useState(product.location)
    const [resale_price, setResale_price] = useState(product.resale_price)
    const [original_price, setOriginal_price] = useState(product.original_price)
    const [yearUsed, setYearUsed] = useState(product.yearUsed)
    const [details, setDetails] = useState(product.details)



    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const sellerName = form.sellerName.value;
        const date = form.date.value;
        const img = form.img.value;
        const model = form.model.value;
        const category = form.category.value;
        const location = form.location.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const yearUsed = form.yearUsed.value;
        const details = form.details.value;

        const newData = {
            name: brandName,
            sellerName,
            img,
            model,
            location,
            resale_price,
            original_price,
            category,
            details,
            userEmail: user.email,
            date, yearUsed
        }
        // console.log(newData)
        fetch(`https://mobile-market-server.onrender.com/myProduct?email=${user?.email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product added')
                navigate('/dashboard/myProduct')

            })



    }
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14'>
            <div className='flex mb-12 mt-5'>
                <div className='shadow-xl p-10 border border-2'>
                    <h3 className='text-3xl text-bold text-center'> Edit Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10'>
                            {/* left side  */}
                            <div className='md:w-1/2 '>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">BrandName</span></label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        name='brandName'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Picture</span></label>
                                    <input
                                        onChange={(e) => setImg(e.target.value)}
                                        value={img}
                                        name='img'
                                        type='text'
                                        className="file-input file-input-bordered file-input-info w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">SellerName</span></label>
                                    <input
                                        disabled
                                        defaultValue={user?.displayName}
                                        name='sellerName'
                                        type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input
                                        onChange={(e) => setLocation(e.target.value)}
                                        value={location}
                                        name='location'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Date</span></label>
                                    <input
                                        onChange={(e) => setDate(e.target.value)}
                                        value={date}
                                        name='date'
                                        type='date'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Model</span></label>
                                    <input
                                        onChange={(e) => setModel(e.target.value)}
                                        value={model}
                                        name='model'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <select
                                        onChange={(e) => setCategory(e.target.value)}
                                        required
                                        value={category}
                                        name='category'
                                        className="select select-bordered w-full">
                                        <option value='iphone'>iphone</option>
                                        <option value='Samsung'>Samsung</option>
                                        <option value='Nokia'>Nokia</option>
                                        <option value='Redmi'>Redmi</option>
                                        <option value='Vivo'>Vivo</option>
                                        <option value='Walton'>Walton</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right side  */}
                            <div className='md:w-1/2'>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Resale Price</span></label>
                                    <input
                                        onChange={(e) => setResale_price(e.target.value)}
                                        value={resale_price}
                                        name='resale_price'
                                        type='number'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">OriginalPrice</span></label>
                                    <input
                                        onChange={(e) => setOriginal_price(e.target.value)}
                                        value={original_price}
                                        name='original_price'
                                        type='number'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input
                                        disabled
                                        defaultValue={user?.email}
                                        name='email'
                                        type='email'
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Years of Use</span></label>
                                    <input
                                        onChange={(e) => setYearUsed(e.target.value)}
                                        value={yearUsed}
                                        name='yearUsed'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Details</span></label>
                                    <textarea
                                        onChange={(e) => setDetails(e.target.value)}
                                        value={details}
                                        name='details'
                                        type='text'
                                        className="input input-bordered w-full h-32" required />
                                </div>

                            </div>
                        </div>

                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product' />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default EditProduct

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa"
const MyProductTable = ({myProduct}) => {
    const { name,img, resale_price, _id } = myProduct;

    const navigate = useNavigate();
  const handleDeleteItem = id =>{
    const getPermission = window.confirm('Are you sure want to delete this product?')
  if(getPermission){
    fetch(`https://mobile-market-server.onrender.com/myProduct?id=${id}`,{
      method: "DELETE",

    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        console.log(data);
        toast.success('deleted success')
        navigate('/dashboard/myProduct')
         form.reset()
      }

    })
  }

  }



    return (
        <tr className="hover">
        <td>
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} alt='' />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{resale_price}</td>
        <td>
        <Link to={`/dashboard/editProduct/${_id}`}> <button  className="btn bg-purple-300 btn-md">Edit <FaRegEdit /></button></Link>
        </td>
        <td>
          <button onClick={()=> handleDeleteItem(_id)} className="btn bg-purple-300 btn-md">Delete</button>
        </td>
        
      </tr>
    );
};


export default MyProductTable

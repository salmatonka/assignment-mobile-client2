import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';
const AllUsers = () => {
    useTitle('AllUsers');
    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-market-server.onrender.com/users`)
            const data = await res.json()
            return data;
        }
    })
    // console.log(users)
    const handleDeleteUser = (id) => {
        console.log(id)
        const userPermission = window.confirm('Are you delete this users?');
        if (userPermission) {
            fetch(`https://mobile-market-server.onrender.com/users?id=${id}`, {
                method: "DELETE"

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted success')
                        refetch();
                    }

                })
        }
    }

    const handleVerifyUser = (id) => {
        const getPermission = window.confirm('Do you want to verify?');
        if (getPermission) {
            fetch(`https://mobile-market-server.onrender.com/users?id=${id}`, {
                method: "PUT"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        toast.success('verified')
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <h2>allusers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.verified ?
                                            <button disabled className='btn btn-secondary btn-sm'>verified</button>
                                            :
                                            <button onClick={() => handleVerifyUser(user._id)} className='btn btn-secondary btn-sm'>verify</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteUser(user._id)} className='btn btn-error btn-sm'>Delete</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers

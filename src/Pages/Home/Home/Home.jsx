import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data: students = [], isLoading, refetch } = useQuery({
        queryKey: ['student'],
        queryFn: async () => {
            const res = await fetch('https://softnerve-server.vercel.app/student');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    const handleDelete = (student) => {
        window.confirm(`are you sure?`);
        console.log(student._id);
        fetch(`https://softnerve-server.vercel.app/student/${student._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <div className='px-28 py-8 dark:bg-[#2f3541] dark:text-white'>
            <div>
                <h1 className='text-3xl font-bold text-slate-700 dark:text-white'>All Student List:</h1>
            </div>
            <div className="overflow-x-auto w-full pb-7">
                <table className="table w-full">

                    <thead>
                        <tr className='dark:text-slate-800'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students?.map((student, i) => {
                                return (
                                    <tr className='dark:text-slate-800' key={student?._id}>
                                        <th>
                                            <label>
                                                <p>{i + 1}</p>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={student?.photo} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{student?.sname}</div>
                                                    <span className="badge badge-ghost badge-sm">{student?.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{student?.address}</div>
                                            <span className="badge badge-ghost badge-sm">Phn No: {student?.phoneNumber}</span>
                                        </td>
                                        <td><div className="font-bold">{student?.department}</div></td>
                                        <th>
                                            <Link to={`/updateStudent/${student?._id}`}>
                                                <button className="btn btn-success btn-xs font-bold">Update</button>
                                            </Link>
                                            <Link to={`/student/${student?._id}`}>
                                                <button className="btn btn-warning btn-xs mx-2 font-bold">View</button>
                                            </Link>
                                            <button onClick={() => handleDelete(student)} className="btn btn-secondary btn-xs font-bold">Delete</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Home;
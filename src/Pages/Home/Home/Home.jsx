import React from 'react';

const Home = () => {
    return (
        <div className='px-28 dark:bg-[#2f3541] dark:text-white'>
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
                        <tr className='dark:text-slate-800'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Wyman Tear</div>
                                        <span className="badge badge-ghost badge-sm">wyman@gmail.com</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Bangladesh
                                <br />
                                <span className="badge badge-ghost badge-sm">+880 1787170612</span>
                            </td>
                            <td>C.S.E</td>
                            <th>
                                <button className="btn btn-success btn-xs font-bold">Update</button>
                                <button className="btn btn-warning btn-xs mx-2 font-bold">View</button>
                                <button className="btn btn-secondary btn-xs font-bold">Delete</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Home;
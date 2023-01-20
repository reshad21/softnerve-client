import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentInfo = () => {
    const { sid } = useParams();
    console.log(useParams());
    const { data: student = [], isLoading } = useQuery({
        queryKey: ['student', sid],
        queryFn: async () => {
            const res = await fetch(`https://softnerve-server.vercel.app/student/${sid}`);
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
    return (
        <div className='px-28 py-8 dark:bg-[#2f3541] dark:text-white'>


            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={student?.photo} alt="Shoes" className='w-[100%]' /></figure>
                <div className="card-body">
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Student name:</label> {student?.sname}</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Father name:</label> {student?.fname}</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Mother name:</label> {student?.mname}</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Department:</label> CSE</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Address:</label> {student?.address}</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Email:</label> {student?.email}</p>
                    <p className='dark:text-black'><label htmlFor="" className='font-bold'>Phone Number:</label> {student?.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;

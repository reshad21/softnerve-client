import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentInfo = () => {
    const { sid } = useParams();
    console.log(useParams());
    const { data: student = [], isLoading } = useQuery({
        queryKey: ['student', sid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/student/${sid}`);
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
        <div className='px-28'>
            <h1>single student information:{student?.sname}</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={student?.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{student?.sname}</h2>
                    <p><label htmlFor="" className='font-bold'>Department:</label> CSE</p>
                    <p><label htmlFor="" className='font-bold'>Father name:</label> {student?.fname}</p>
                    <p><label htmlFor="" className='font-bold'>Mother name:</label> {student?.mname}</p>
                    <p><label htmlFor="" className='font-bold'>Address:</label> {student?.address}</p>
                    <p><label htmlFor="" className='font-bold'>Email:</label> {student?.email}</p>
                    <p><label htmlFor="" className='font-bold'>Phone Number:</label> {student?.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;

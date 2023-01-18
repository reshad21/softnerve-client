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
        <div>
            <h1>single student information:{student?.sname}</h1>
        </div>
    );
};

export default StudentInfo;

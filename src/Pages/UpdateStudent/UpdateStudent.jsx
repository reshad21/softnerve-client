import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateStudent = () => {
    const { id } = useParams();
    console.log(id);
    const { data: student = [], isLoading } = useQuery({
        queryKey: ['student', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/student/${id}`);
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

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const sname = form.sname.value;
        const fname = form.fname.value;
        const mname = form.mname.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const address = form.address.value;
        // const photo = form.photo.value;

        const studentInfo = {
            phoneNumber,
            address,
            sname,
            fname,
            mname,
            email,
            // photo
        }
        console.log(studentInfo);

        fetch(`http://localhost:5000/student/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product added Successfully.');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='px-28 py-8 dark:bg-[#2f3541] dark:text-white'>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex flex-col">
                    <div>
                        <h1 className='text-5xl font-bold text-slate-700 dark:text-white'>Update Student Information</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdate}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" name='sname' placeholder="name" className="input input-bordered" defaultValue={student?.sname} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Father Name</span>
                                </label>
                                <input type="text" name='fname' placeholder="name" className="input input-bordered" defaultValue={student?.fname} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Mother Name</span>
                                </label>
                                <input type="text" name='mname' placeholder="name" className="input input-bordered" defaultValue={student?.mname} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Phone Number</span>
                                </label>
                                <input type="number" name='phoneNumber' placeholder="name" className="input input-bordered" defaultValue={student?.phoneNumber} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email Address</span>
                                </label>
                                <input type="email" name='email' placeholder="email address" className="input input-bordered" defaultValue={student?.email} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Permanent Address</span>
                                </label>
                                <input type="address" name='address' placeholder="Permanent address" className="input input-bordered" defaultValue={student?.address} />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Permanent address" className="input input-bordered" />
                            </div> */}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Information</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudent;
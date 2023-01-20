import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Dashbord = () => {
    const navigate = useNavigate();
    const imageHostKey = 'a5fac2a6ff064bf3f80d0506b3344941';

    const handleProductForm = (e) => {
        e.preventDefault();
        const form = e.target;

        // first we work with image files
        const image = form.photo.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((imgData) => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const photo = imgData.data.url;
                    // second now we work other input field
                    studentAllInfo(photo);
                    form.reset();
                    navigate('/');

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        const studentAllInfo = (photo) => {
            const sname = form.sname.value;
            const fname = form.fname.value;
            const mname = form.mname.value;
            const phoneNumber = form.phoneNumber.value;
            const email = form.email.value;
            const address = form.address.value;

            const studentInfo = {
                phoneNumber,
                address,
                sname,
                fname,
                mname,
                email,
                photo
            }
            console.log(studentInfo);

            fetch('http://localhost:5000/student', {
                method: 'POST', // or 'PUT'
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

    }
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex flex-col">
                    <div>
                        <h1 className='text-5xl font-bold text-slate-700'>Student Information</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleProductForm}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input type="text" name='sname' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Father Name</span>
                                </label>
                                <input type="text" name='fname' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Mother Name</span>
                                </label>
                                <input type="text" name='mname' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Phone Number</span>
                                </label>
                                <input type="number" name='phoneNumber' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email Address</span>
                                </label>
                                <input type="email" name='email' placeholder="email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Permanent Address</span>
                                </label>
                                <input type="address" name='address' placeholder="Permanent address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo</span>
                                </label>
                                <input type="file" name='photo' className="file-input file-input-bordered w-full" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;
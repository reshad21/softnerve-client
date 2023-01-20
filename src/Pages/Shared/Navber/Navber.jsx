import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const menuItems = <>
        <li><Link to='/'><button className='btn btn-success btn-outline font-bold border-2'>Home</button></Link></li>
        <li><Link to='/dashbord'><button className='btn btn-success btn-outline font-bold border-2'>Dashbord</button></Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#d7dedf] dark:bg-[#2f3541] dark:text-white">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">SoftNerve</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <button className='btn btn-outline btn-sm dark:bg-[#3d4451] dark:text-white' onClick={handleThemeSwitch}>Mode</button>
            </div>
        </div>
    );
};

export default Navber;
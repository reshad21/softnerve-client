import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashbord'>Dashbord</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">SoftNerve</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleButtonActive = (buttonId) => {
        setIsActive(buttonId);
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink to="/">
                        <img className="" src="https://i.ibb.co/9g204bW/Logo.png" alt="" />
                    </NavLink>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-7 -z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="menu menu-horizontal">
                            <NavLink to="/" className="tab text-lg text-black" >Home</NavLink>
                            <NavLink to="/donation" className="tab text-lg text-black" >Donation</NavLink>
                            <NavLink to="/statistics" className="tab text-lg text-black" >Statistics</NavLink>
                        </div>
                    </ul>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="tabs gap-9">

                            <NavLink to="/" onClick={ () => handleButtonActive(1) } className={` text-lg ${isActive === 1 ? 'text-red-500 underline' : ''}`} >Home</NavLink>

                            <NavLink to="/donation" onClick={ () => handleButtonActive(2) } className={` text-lg ${isActive === 2 ? 'text-red-500 underline' : ''}`} >Donation</NavLink>

                            <NavLink to="/statistics" onClick={ () => handleButtonActive(3)} className={` text-lg ${isActive === 3 ? 'text-red-500 underline' : ''}`} >Statistics</NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
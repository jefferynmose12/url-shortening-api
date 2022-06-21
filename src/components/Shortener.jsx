import React, { useState, useEffect } from 'react';
import Desktop from "../images/bg-shorten-desktop.svg";
import axios from 'axios'

function Shortener({setInputValue}) {

    const sectionStyle = {
        backgroundImage : `url('${Desktop}')`,
        backgroundColor : "hsl(257, 27%, 26%)",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        borderRadius : "10px"
    }

    const [value, setValue] = useState('');
    
    const handleLink = async (e) => {
        e.preventDefault();
        setInputValue(value);
        setValue('')
    }

    return (
        <>
            <div className="py-2 lg:py-8 px-2 lg:px-12" style={sectionStyle}>
                <form className="w-full flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
                    <input
                        className='h-12 w-full lg:w-4/5 pl-5 rounded outline-none'
                        name= "text" 
                        placeholder="Shorten a link here..." 
                        value={value}
                        onChange = {(e) => setValue(e.target.value)}
                    />
                    
                    <button className="h-12 w-full lg:w-1/5 text-white font-medium bg-teal-500 rounded" onClick={handleLink}>
                        Shorten It!
                    </button>
                </form>
            </div>
        </>
    )
}

export default Shortener;

import React, { useState } from 'react';
import Shortener from './Shortener';
import Shortened from './Shortened';
import Recognition from "../images/icon-brand-recognition.svg";
import Detail from "../images/icon-detailed-records.svg";
import Customize from "../images/icon-fully-customizable.svg";


function Statistics() {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="pt-0 pb-10 px-5 lg:pb-24 lg:px-28 xl:px-44 bg-gray-100">
            <div className='relative -top-16 lg:-top-14 '>
                <Shortener setInputValue={setInputValue} inputValue={inputValue} />
                <Shortened inputValue={inputValue} />
            </div>
            <div className="pt-14">
                <h2 className='text-3xl text-center font-bold text-gray-700'>Advanced Statistics</h2>
                <p className="pt-2 mx-auto text-gray-400 text-center font-semibold lg:w-1/2">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
                <div className="pt-20 pb-10 flex flex-col lg:flex-row gap-20 lg:gap-6 items-center w-full relative">
                    <div className="bg-white rounded-md px-5 py-7 shadow-md lg:h-48 xl:h-48 lg:w-2/6 z-20 flex flex-col items-center lg:block">
                        <div className='-mt-16 bg-gray-900 rounded-full h-16 w-16 flex items-center justify-center'>
                            <img src={Recognition} alt='recognition' className='w-8 h-8 flex items-center justify-center' />
                        </div>
                        <div className='pt-5 text-center lg:text-left'>
                            <h3 className='font-bold text-lg'>Brand Recognition</h3>
                            <p className='pt-2 text-gray-400 font-semibold'>Boost your brand recognition with each click.Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.
                            </p>
                        </div>
                    </div>
                    <div className="lg:translate-y-6 bg-white rounded-md px-5 py-7 shadow-md lg:h-48 xl:h-48 lg:w-2/6 z-20 flex flex-col items-center lg:block">
                        <div className='-mt-16 bg-gray-900 rounded-full h-16 w-16 flex items-center justify-center'>
                            <img src={Detail} alt='detail' className='w-8 h-8 flex items-center justify-center' />
                        </div>
                        <div className='pt-5 text-center lg:text-left'>
                            <h3 className='font-bold text-lg'>Detailed Records</h3>
                            <p className='pt-2 text-gray-400 font-semibold'>Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.
                            </p>
                        </div>
                    </div>
                    <div className="lg:translate-y-12 bg-white rounded-md px-2 md:px-5 py-7 shadow-md lg:h-48 xl:h-48 lg:w-2/6 z-20 flex flex-col items-center lg:block">
                        <div className='-mt-16 bg-gray-900 rounded-full h-16 w-16 flex items-center justify-center'>
                            <img src={Customize} alt='customize' className='w-8 h-8 flex items-center justify-center' />
                        </div>
                        <div className='pt-5 text-center lg:text-left'>
                            <h3 className='font-bold text-lg'>Fully Customizable</h3>
                            <p className='pt-2 text-gray-400 font-semibold'>Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                            </p>
                        </div>
                    </div>
                    <div className="bg-teal-300 absolute z-0  lg:bottom-28 h-4/5 w-2 lg:h-2 lg:w-4/5" />
                </div>
                
            </div>
        </div>
    )
}

export default Statistics

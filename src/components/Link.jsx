import BackgroundD from "../images/bg-boost-desktop.svg";
import BackgroundM from "../images/bg-boost-mobile.svg";

function Link() {

    const sectiondStyle = {
        backgroundImage: `url('${BackgroundD}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    
    const sectionmStyle = {
        backgroundImage: `url('${BackgroundM}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    
    return (
       <>
            <div style={sectiondStyle} className='hidden lg:block bg-[#3B3054]'>
                <div className="py-10 flex flex-col gap-5 items-center justify-center">
                    <h2 className='text-white font-semibold text-3xl'>Boost your links today</h2>
                    <button className="text-white text-sm h-9 w-36 font-semibold bg-teal-500 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
            <div style={sectionmStyle} className='lg:hidden bg-[#3B3054]'>
                <div className="py-20 flex flex-col gap-5 items-center justify-center">
                    <h2 className='text-white font-semibold text-3xl'>Boost your links today</h2>
                    <button className="text-white h-12 w-40 font-semibold bg-teal-500 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
       </>
    )
};

export default Link;

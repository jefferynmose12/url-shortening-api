import Desktop from "../images/illustration-working.svg"

function Main() {
    return (
        <div className="mt-20 px-5 pt-7 pb-48 lg:pt-14 lg:pl-28 xl:pl-44 flex flex-col-reverse gap-9 lg:flex-row items-center ">            
            <div className="lg:w-1/2 flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
                <h1 className="lg:pb-3 xl:pb-2 text-5xl lg:text-5xl xl:text-7xl text-gray-700 font-bold">More than just shorter links</h1>
                <p className="text-gray-400 font-semibold lg:w-4/5">Build your brand’s recognition and get detailed insights 
                on how your links are performing.
                </p>
                <button className="my-3 lg:my-9 xl:my-7 text-white h-12 w-40 font-semibold bg-teal-500 rounded-full">
                    Get Started
                </button>
            </div>
            <div className="lg:ml-auto -mr-32">
                <img src={Desktop} alt="desktopbg" />
            </div>
        </div>
    )
}

export default Main;

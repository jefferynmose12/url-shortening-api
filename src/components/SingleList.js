import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

function SingleList ( { shortLink, fullLink } ) {
    const [copy, setCopy] = useState(false);
  return (
    <>
        <div className='my-3 lg:my-5 py-2 lg:py-4 px-2 md:px-5 bg-white shadow rounded-md flex flex-col lg:flex-row items-center'>
            <p className='font-medium'>
                {shortLink}
            </p>
            <div className='lg:ml-auto pt-5 lg:pt-0 flex flex-col lg:flex-row items-center gap-3'>
                <p className='font-medium text-center text-teal-500'>
                    {fullLink}
                </p>
                <CopyToClipboard
                    text={shortLink}
                >
                    <button onClick={() => setCopy(!copy) } className={` h-9 px-4 rounded flex items-center justify-center bg-[#444347] text-white font-medium`}>
                        {copy ? 'copied ' : 'copy'}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    </>
  )
}

export default SingleList;
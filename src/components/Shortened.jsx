import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleList from './SingleList';

function Shortened({inputValue}) {

    const [shortenLinks, setShortenLinks] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLinks((prev) => {
                return [...prev, res.data.result]
            })
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      if (inputValue.length) {
        fetchData();
      }
    }, [inputValue])

    if(loading) {
        return (
            <div className='flex justify-center items-center py-7'>
                <div className='animate-spin rounded-full h-10 w-10 border-b-4 border-red-700' />
            </div>
        )
    }

    if(error) {
        return (
            <div className='flex justify-center items-center py-7 text-red-500'>something went error</div>
        )
    }

    return (
        <>
            {
                shortenLinks.map((shortLink, index) => (
                        <SingleList
                            key = {index}
                            id = {index}
                            shortLink = {shortLink.short_link}
                            fullLink = {shortLink.original_link}
                        />
                    )
                )
            }
        </>
    )
}

export default Shortened;
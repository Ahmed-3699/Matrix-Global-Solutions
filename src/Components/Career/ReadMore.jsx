import React, { useState } from 'react'

const ReadMore = ({ job }) => {
    const [readMore, setreadMore] = useState(false)
    return (
        <>

                {readMore ? job.jobDescription : `${job.jobDescription.substring(0, 100)}`}
                <button onClick={() => setreadMore(!readMore)} className='font-bold'>
                    {readMore ? <span className='ml-1'>show less</span> : <span className='ml-1'>read more...</span>}
                </button>
        </>
    )
}

export default ReadMore
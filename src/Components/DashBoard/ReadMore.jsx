import React, { useState } from 'react'

const ReadMore = ({e}) => {
    const [readMore, setreadMore] = useState(false)
    return (
        <>
            <div className='h-max w-full bg-[rgb(60,80,224)] mt-2 rounded-t-xl rounded-bl-xl px-4 py-3 break-words'>
                {readMore ? e.message : `${e.message.substring(0, 60)}`}
                <button onClick={() => setreadMore(!readMore)} className='font-bold'>
                    {readMore ? <span className='ml-1'>show less</span> : <span className='ml-1'>read more...</span>}
                </button>
                {/* <p className='text-white px-2 py-2'>{e.message}</p> */}
            </div>
        </>
    )
}

export default ReadMore
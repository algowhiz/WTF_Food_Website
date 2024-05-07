import React, { useState } from 'react'

import Cards from './Cards'

const Body = () => {

    const [toprated, settoprated] = useState(false);
    const [text, settext] = useState("");

    const Toprated = () => {
        settoprated(!toprated);
    }

    return (
        <div className="card-container m-10">
            <div className='m-4'>
                <h1 className='font-semibold text-3xl mb-4 '>Restaurants with online food delivery in Kolhapur</h1>
                <input type="text" className='border rounded-lg shadow-lg p-1 mr-5' onChange={(e) => settext(e.target.value)} placeholder='Search' />
                <button className='border rounded-lg shadow-lg p-2 mr-5' type='submit' onClick={Toprated}>Top rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                <Cards text={text} toprated={toprated} />
            </div>
        </div>
    )
}

export default Body

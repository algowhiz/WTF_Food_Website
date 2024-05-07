import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../Utils/URL';
import useRestaurent from '../Utils/useRestaurent';
import Shimmer from './Shimmer';

const Cards = ({ toprated, text }) => {
    const list = useRestaurent();

    
    const filterlist = list ? list.filter(restaurant => {
        const includesText = text !== '' && restaurant.info.name.toLowerCase().includes(text.toLowerCase());
        const isTopRated = toprated && restaurant.info.avgRating > 4.3;
        return (!text || includesText) && (!toprated || isTopRated);
    }) : [];



    return (list == null) ?   <Shimmer count={5} />
    : (
        <div className=' flex flex-wrap w-[100%] '>
            {filterlist.map((restaurant) => (
                <div className=" w-[250px] m-8 p-4 bg-[#fcfdff] rounded-2xl shadow-2xl " key={restaurant.info.id}>
                    <div className="img">
                        <img className='w-[200px] h-[140px] rounded-2xl' src={IMG_URL + restaurant.info.cloudinaryImageId} alt="" />
                    </div>
                    <div className="card-info p-2">
                        <p className='font-semibold text-xl mb-2'>{restaurant.info.name}</p>
                        <p className='font-mono font-bold'>{restaurant.info.costForTwo}</p>
                        <p className='font-thin'>{restaurant.info.cuisines.join(", ")}</p>
                        <p className='font-sans mt-3'>{restaurant.info.avgRatingString}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;

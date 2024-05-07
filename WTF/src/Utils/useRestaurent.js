import { useEffect, useState } from "react";

const useRestaurent = () =>{

    const [res_data , setres_data] = useState(null);

    useEffect(() => {
        fetchData();
        console.log("data fetching....");
    }, []);

    const fetchData = async () => {
        
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
            const json = await response.json();
            const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setres_data(restaurant);
       
    };
    return res_data;
}


export default useRestaurent;
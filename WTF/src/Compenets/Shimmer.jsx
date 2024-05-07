import React from 'react';

const Shimmer = ({ count }) => {
  // Generate an array with the specified count
  const shimmerCards = Array.from({ length: count }, (_, index) => index);

  return (
    <div className='flex flex-wrap w-full'>
      {shimmerCards.map(index => (
        <div key={index} className='w-[250px] m-8 p-4 bg-white rounded-2xl shadow-2xl'>
          <div className='img'>
            <div className='shimmer-placeholder shimmer-image w-[200px] h-[140px] rounded-2xl'></div>
          </div>
          <div className='card-info p-2'>
            <p className='shimmer-placeholder shimmer-text h-6 w-[80%] mb-2'></p>
            <p className='shimmer-placeholder shimmer-text h-4 w-[50%]'></p>
            <p className='shimmer-placeholder shimmer-text h-4 w-[60%]'></p>
            <p className='shimmer-placeholder shimmer-text h-4 w-[40%]'></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

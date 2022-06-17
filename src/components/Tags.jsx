import React from 'react';

const Tags = ({tag}) => {
  return (
    <div className="bg-yellow-200 px-3 py-1 w-fit rounded-md mb-2 sm:mb-0">
        <h4 className="text-xs sm:text-sm">{tag}</h4>
    </div>
  )
}

export default Tags;
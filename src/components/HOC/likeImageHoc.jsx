import React from 'react'
import CommonHOC from './commonhoc'

const LikeImageHoc=({handleCount,count})=>{
    return(
        <div>
            <button onClick={handleCount}> Like Image {count}</button>
        </div>
    )
}

export default CommonHOC(LikeImageHoc)
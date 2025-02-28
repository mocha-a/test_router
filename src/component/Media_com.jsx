import React from 'react'
import MediaList from './MediaList'

function Media_com({db}) {
  return (
    <>
        {
          db.map((item)=>
            <MediaList item={item}/>)
        }
    </>
  )

}

export default Media_com
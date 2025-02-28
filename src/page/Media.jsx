import React from 'react'
import { useLocation } from 'react-router-dom'
import db from '../data/db.json'
import Media_com from '../component/Media_com';

function Media() {
  const {state} = useLocation();
  console.log(db[state]);
  
  return (
      <Media_com db={db[state]}/>
  )
}

export default Media
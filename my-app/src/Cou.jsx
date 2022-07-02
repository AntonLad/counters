import React, {useState, useEffect} from 'react'

export default function Cou() {
  // let s=0
  const [s, setX] = useState(0)
  useEffect(() => {
    setTimeout(()=>{
      // s+=1
      setX( s+1)
      console.log('newS', s )
    }, 1000)
  }, [s])
  

  return (
    <div>{s}</div>
  )
}

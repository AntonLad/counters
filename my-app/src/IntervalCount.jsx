import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { updateArray } from './redux/reducers/arrayOfCount'
import { changeFourCounter } from './redux/reducers/count'

export default function IntervalCount({ id, count }) {
  const arrayFourCount = useSelector((s) => s.count.countArr)
  const array = useSelector((s) => s.array.array)
  const prevCount = useSelector((s) => s.prevCount.prevCount)
  const dispatch = useDispatch()


  const sum = array.reduce((acc, rec) => {
    return acc + rec.count
  }, 0)

  const result = () => {
    if ((prevCount.ind + 2) % 4 === 0) {return prevCount.prevCount}
    return array.reduce((acc, rec) => {
      return acc + rec.count
    }, 0)
  }
  const [coun, setCoun] = useState(result)

  const onClickDel = (id) => {
    const newArray = array.filter(it => {
      return it.id !== id
    })
    dispatch(updateArray(newArray))
    dispatch(changeFourCounter(newArray))
    setCoun(0)
    return newArray
  }


  useEffect(() => {
    setTimeout(function() {
      const newArray = arrayFourCount.map(it => {
        if (it.id === id) {
          
          setCoun(() => coun+1)
          it.count = coun
          // s = s+1 
          // console.log('count', count )
          return it
        }
        return it    
      })
      dispatch(changeFourCounter(newArray))
      // console.log ('disp')
      return newArray
  
    }, 1000);
  }, [array, count, coun])
  


  // setInterval(function() {
  //   const newArray = array.map(it => {

  //     if (it.id === id) {
  //       it.count += 1
  //       console.log('it.count', it.count )
  //       return it
  //     }
  //     return it    
  //   })
  //   // dispatch(updateArray(newArray))
  //   return newArray

  // }, 3000);

  // const newArray = () => {
  //   setInterval(function() {
  //     const newA = array.map(it => {
  
  //       if (it.id === id) {
  //         it.count += 1
  //         console.log('it.count', it.count )
  //         return it
  //       }
  //       return it    
  //     })
      
  //     return newA
  
  //   }, 3000);
  // }
  // dispatch(updateArray(newArray))
  

  return (
    <div>
      {coun}
        <button 
          type="button"
          onClick={() => {onClickDel(id)}}
        >
          Delete counter
        </button>
    </div>
  )
}

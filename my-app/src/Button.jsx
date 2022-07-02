import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'

import { updateArray } from './redux/reducers/arrayOfCount'
import { changeFourCounter } from './redux/reducers/count'


export default function Button() {
  const dispatch = useDispatch()
  const array = useSelector((s) => s.array.array)
  const arrayFourCount = useSelector((s) => s.count.countArr)
  
  const onClick = () => {
    const sum = array.reduce((acc, rec) => {
      return acc + rec.count
    }, 0)
    const newArray = [...array, { count: sum, id: Math.random() }]
    dispatch(updateArray(newArray))
    dispatch(changeFourCounter(newArray))
    // newArray.map((it, ind) => {
    //   console.log('ind', ind)
    //   if ((ind + 1) % 4 === 0 ) {
    //     console.log('IND', ind)
    //     const newArr = [...arrayFourCount, { count: sum, id: it.id }]
    //     dispatch(changeFourCounter(newArr))
    //   }
    // })



    return newArray
  }

  return (
    <div>
        <button 
        type="button"
        onClick={onClick}
      >
        Add counter
      </button>
    </div> 
  )
}

import React, { useState, useCallback, useEffect} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { updateArray } from './redux/reducers/arrayOfCount'
import { changeFourCounter } from './redux/reducers/count'
import { changePrevCounter } from './redux/reducers/prevCount'
import IntervalCount from './IntervalCount'


export default function Counter() {
  const array = useSelector((s) => s.array.array)
  const dispatch = useDispatch()
  
  

 
  const threeCounter = useCallback((it, ind) => {
    console.log('Test')
    const increase = id => {
      const newArray = array.map(it => {
        if (it.id === id) {
          it.count += 1
          return it
        }
        return it    
      })
      dispatch(updateArray(newArray))
      return newArray
    }
    
    const decrease = id => {
      const newArray = array.map(it => {
        if (it.id === id) {
          it.count -= 1
          return it
        }
        return it    
      })
      dispatch(updateArray(newArray))
      return newArray
    }
  
    const onClickDel = (id) => {
      const newArray = array.filter(it => {
        return it.id !== id
      })
      dispatch(updateArray(newArray))
      dispatch(changeFourCounter(newArray))
      return newArray
    }

    const getPrevCount = (ind) => {
      // array.reduce((acc, rec, i) => {
      //   if (ind < 3) { return array[5]}
      // })
      const prevObj = {
        prevCount: array?.[ind + 1]?.count || 0,
        ind: ind
      }
      dispatch(changePrevCounter(prevObj))
    }

    return (
      <div>
        {/* {array.map((it, ind) => {
          if ((ind + 1) % 4 !== 0) { */}
            {/* return ( */}
              <div key={it.id}>
                <button 
                  type="button"
                  onClick={() => {decrease(it.id)}}
                >
                  -
                </button>
                {it.count}
                <button 
                  type="button"
                  onClick={() => {increase(it.id)}}
                >
                  +
                </button>
                <button 
                  type="button"
                  onClick={() => {onClickDel(it.id); getPrevCount(ind)}}
                >
                  Delete counter
                </button>
              </div>
            {/* ) */}
        {/*   }
         })} */}
      </div>
      // <div>
      //   {array.map((it, ind) => {
      //     if ((ind + 1) % 4 !== 0) {
      //       return (
      //         <div key={it.id}>
      //           <button 
      //             type="button"
      //             onClick={() => {decrease(it.id)}}
      //           >
      //             -
      //           </button>
      //           {it.count}
      //           <button 
      //             type="button"
      //             onClick={() => {increase(it.id)}}
      //           >
      //             +
      //           </button>
      //           <button 
      //             type="button"
      //             onClick={() => {onClickDel(it.id)}}
      //           >
      //             Delete counter
      //           </button>
      //         </div>
      //       )
      //     }
      //     return (
      //       <div key={it.id}>
      //         {/* {it.count}
      //         <IntervalCount id={it.id} count={it.count} /> */}
      //       </div>
      //     )
      //   })}
      // </div>
    )
  }, [array] ) 

  let s = 0
  // useEffect(() => {
  //   setInterval(function() {
  //     // const newArray = array.map(it => {
  
  //       // if (it.id === id) {
  //         // setCoun(coun+1)
  //         s = s+1 
  //         console.log('coun', s )
  
  
  //         // return it
  //       // }
  //       // return it    
  //     // })
  //     // dispatch(updateArray(newArray))
  //     // return newArray
  
  //   }, 3000);
  // }, [])
        

  
  return (
    <div>
      {/* {threeCounter()}

      {array.map((it, ind) => {
        if ((ind + 1) % 4 === 0) {
          return (
            <div key={it.id}>
              <IntervalCount id={it.id} count={it.count} />
            </div>
          )
        }
        return (
          <div key={it.id}>
     
          </div>
        )
      })} */}
      {array.map((it, ind) => {
        if ((ind + 1) % 4 !== 0) {
          return (
            <div key={it.id}>
              {threeCounter(it, ind)}
            </div>
          )
        }
        return (
          <div key={it.id}>
            <IntervalCount id={it.id} count={it.count} />
          </div>
        )
      })}
      {/* {(array.length % 4 === 0) && <IntervalCount id={1} count={11} />} */}
      {/* {array.map((it, ind) => {
        if ((ind + 1) % 4 !== 0) {
          return (
            <div key={it.id}>
              <button 
                type="button"
                onClick={() => {decrease(it.id)}}
              >
                -
              </button>
              {it.count}
              <button 
                type="button"
                onClick={() => {increase(it.id)}}
              >
                +
              </button>
              <button 
                type="button"
                onClick={() => {onClickDel(it.id)}}
              >
                Delete counter
              </button>
            </div>
          )
        }
        return (
          <div key={it.id}>
            {it.count}
            <IntervalCount id={it.id} count={it.count} />
          </div>
        )
      })} */}
    </div>
  )
}

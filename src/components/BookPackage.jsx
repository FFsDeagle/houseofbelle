import React, { useContext, useState } from 'react'
import { CounterContext } from './NewBooking'

function BookPackage() {

    const { data, setData, selection } = useContext(CounterContext)

  return (
    <div>
        <div className='booknow-wrapper'>
            <div className="booknow-container">
                Test
                {/* {menu === 1 ? null : <button className="button-menu" onClick={() => setMenu(menu - 1)}>Back</button>}   
                {menu < 1 ? <button className="button-menu" onClick={() => setMenu(menu + 1)}>Next</button> : null} */}
            </div>
        </div>
    </div>
  )
}

export default BookPackage
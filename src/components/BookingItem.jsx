import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from './NewBooking'

const BookingItem = (props) => {

    const { menu, setMenu, data, setData, selection, setSelection, menuSelection, setMenuSelection } = useContext(CounterContext)

    const [subMenu, setSubMenu] = useState(null);

    useEffect(() => {
        displayMainMenu()
    },[])

    const selectMenu =(item) => {
        setMenu(menu + 1)
        const selectedItem = item
        console.log(selectedItem)
        setSelection(!selection)
        setMenuSelection([])
        displaySelection(item)
    }

    const displaySelection = (item) => {
        switch(menu){
            case 0:
                displayPackage(item.package)
            case 1:
                
        }
    }

    const displayPackage = (item) => {
        console.log(item)
        setMenuSelection(
            item.map((item, i) => {
                return(
                    <>
                        <div key={i} className='menu-item' onClick={() => selectMenu(item)}>
                            {item.name}
                        </div>
                    </>
                )
            })
        )
    }

    const displayMainMenu = () => {
        setMenuSelection(
            data.map((item, i) => {
                return(
                    <div className='menu-item' key={i} onClick={() => selectMenu(item)}>
                        {item.desc}
                    </div>
                )
            })
        )
    }

  return (
    <div>
        <div className='booknow-wrapper'>
            <div className="booknow-container">
                {menuSelection}
            </div>
        </div>
    </div>
  )
}

export default BookingItem;
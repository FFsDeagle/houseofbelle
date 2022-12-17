import React, { useState } from 'react'
import BookingItem from './BookingItem'
import MenuContext from './MenuContext';
import '../App.css'


export const CounterContext = React.createContext()

function NewBooking(props) {

    const [selection, setSelection] = useState(false);

    const [menuSelection, setMenuSelection] = useState([]);

    const [menu, setMenu] = useState(0);
    const value = { menu, setMenu };

    const [data, setData] = useState([
        {
            id: 0,
            desc: "Picnic",
            package: [{name: "2 - 4 People $240 inc. GST"}, {name: "4 - 8 People $320 inc. GST"},  {name: "8 - 16 People $390 inc. GST"},  {name: "16 - 24 People $460 inc. GST"}],
            checkbox: 0
        },
        {
            id: 1,
            desc: "Proposal",
            package: [{name: "ID 1 2 - 4 People $240 inc. GST"}, {name: "4 - 8 People $320 inc. GST"}, {name: "8 - 16 People $390 inc. GST"}, {name: "16 - 24 People $460 inc. GST"}],
            checkbox: 0
        },
        {
            id: 2,
            desc: "Elopement/Micro-wedding",
            package: [{name: "2 - 4 People $240 inc. GST"}, {name: "4 - 8 People $320 inc. GST"}, {name: "8 - 16 People $390 inc. GST"}, {name: "16 - 24 People $460 inc. GST"}],
            checkbox: 0
        },
        {
            id: 3,
            desc: "Decor hire",
            package: [{name: "2 - 4 People $240 inc. GST"}, {name: "4 - 8 People $320 inc. GST"}, {name: "8 - 16 People $390 inc. GST"}, {name: "16 - 24 People $460 inc. GST"}],
            checkbox: 0
        },
        {
            id: 4,
            desc: "Momentous",
            package: [{name: "2 - 4 People $240 inc. GST"}, {name: "4 - 8 People $320 inc. GST"}, {name: "8 - 16 People $390 inc. GST"}, {name: "16 - 24 People $460 inc. GST"}],
            checkbox: 0
        },
    ])
    
  return (
    <CounterContext.Provider value={{menu, setMenu, data, setData, selection, setSelection, menuSelection, setMenuSelection}}>
        <div className="new-booking-container">
            {selection ? null : <div className="booknow-container-sub-item-title">What would you like to book today?</div>}
            <div className='booknow-container-sub'>
                <div className="booknow-container-sub-item-info">
                   <BookingItem id={data.id} desc={data.desc} package={data.package} value={value} selection={selection} data={data}/>
                </div>
                <div className="package-button-container">
                    {menu === 0 ? null : <button className="button-menu" onClick={() => setMenu(menu - 1)}>Back</button>}   
                    {menu > 0 ? <button className="button-menu" onClick={() => setMenu(menu + 1)}>Next</button> : null}
                </div>
            </div>
        </div>
    </CounterContext.Provider>
  )
}

export default NewBooking
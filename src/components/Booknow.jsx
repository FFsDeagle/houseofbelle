import React, { useEffect, useState, useReducer, useRef } from 'react';
import DatePicker from 'react-date-picker';

const listItems = [
    {
        id: 0,
        title: "Picnic",
        description: "Select package type",
        detail: [{id: 0, name: "2 - 4 People $240 inc. GST"}, {id: 1, name: "4 - 8 People $240 inc. GST"}, {id: 2, name: "8 - 16 $240 inc. GST"}, {id: 3, name: "16 - 24 $240 inc. GST"}],
        selectedPackage: "",
        value: true,
        hide: false,
        titleShow: true,
        listShow: true,
        stage: 0,
    },
    {
        id: 1,
        title: "Proposal",
        description: "Select package type",
        detail: [{id: 0, name: "Coming Soon"}],
        // detail: [{id: 0, name: "2 - 4 People $240 inc. GST"}, {id: 1, name: "4 - 8 People $240 inc. GST"}, {id: 2, name: "8 - 16 $240 inc. GST"}, {id: 3, name: "16 - 24 $240 inc. GST"}],
        value: true,
        hide: false,
        titleShow: true,
        listShow: true,
        stage: 0,
    },
    {
        id: 2,
        title: "Elopement/Micro-wedding",
        description: "Select package type",
        detail: [{id: 0, name: "2 - 4 People $240 inc. GST"}, {id: 1, name: "4 - 8 People $240 inc. GST"}, {id: 2, name: "8 - 16 $240 inc. GST"}, {id: 3, name: "16 - 24 $240 inc. GST"}],
        value: true,
        hide: false,
        titleShow: true,
        listShow: true,
        stage: 0,
    },
    {
        id: 3,
        title: "Decor hire",
        description: "Select package type",
        detail: [{id: 0, name: "2 - 4 People $240 inc. GST"}, {id: 1, name: "4 - 8 People $240 inc. GST"}, {id: 2, name: "8 - 16 $240 inc. GST"}, {id: 3, name: "16 - 24 $240 inc. GST"}],
        value: true,
        hide: false,
        titleShow: true,
        listShow: true,
        stage: 0,
    },
    {
        id: 4,
        title: "Momentous",
        description: "Select package type",
        detail: [{id: 0, name: "Soy wax candles x 50 @ $200 inc. GST"}, {id: 0, name: "Soy wax candles x 100 @ $350 inc. GST"}, {id: 0, name: "Soy wax candles x 150 @ $550 inc. GST"}, {id: 0, name: "Soy wax candles x 200 @ $189 inc. GST"},],
        value: true,
        hide: false,
        titleShow: true,
        listShow: true,
        stage: 0,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
        case "VALUE":
        return state.map((listItem) => {
            if (listItem.id === action.id) {
                return { ...listItem, value: !listItem.value, hide: !listItem.hide};
            }else{
                return listItem
            }
        });
        case "HIDE":
        return state.map((listItem) => {
            if (listItem.id === action.id) {
                return { ...listItem, hide: !listItem.hide };
            }else {
                return listItem;
            }
        });
        case "ITEMTITLE":
            return state.map((listItem) => {
                if (listItem.id !== action.id) {
                    return { ...listItem, titleShow: !listItem.titleShow };
                }else {
                    return listItem;
                }
            });
        case "LIST":
            return state.map((listItem) => {
                if(listItem.id !== action.id) {
                    return { ...listItem, listShow: !listItem.listShow }
                }else {
                    return listItem;
                }
            })
        case "RADIO":
            return state.map((listItem) => {})
        default:
            return state;
    }
}

function Booknow() {

    //Data in list using useReducer
    const [listItem, dispatch] = useReducer(reducer, listItems);

    //Selection of menu items
    const [selection, setSelection] = useState(false);

    //Radio Button Selection
    const [data, setData] = useState({
        id: "0",
        selected: false,
    })

    //Page setter
    const [pagenumber, setPageNumber] = useState(0);

    //Area
    const [packageType, setPackageType] = useState('');
    const [event, setEvent] = useState('');
    const [purpose, setPurpose] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState(new Date())
    const [final, setFinal] = useState(false);
    const [custom, setCustom] = useState('');
    const [chalkboard, setChalkBoard] = useState('');

    const [inputCheck01, setInputCheck01] = useState(false)
    const [inputCheck02, setInputCheck02] = useState(false)

    let futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 14);

    const showElement = "-show"

    const hideElement = "-hide"
    
    useEffect(() => {
        setCheck("-1")
        return () => {
            displayData();
        } 
    },[listItems, onclick])

    const displayContents = selectedItem => {
        dispatch({type: 'VALUE', id: selectedItem})
        dispatch({type: 'ITEMTITLE', id: selectedItem})
        dispatch({type: 'LIST', id: selectedItem})
        // onClick={() => hideList(item.id)}
        setSelection(true);
    }

    const previousSelection = (selectedItem) => {
        // dispatch({type: 'HIDE', id: selectedItem}
        // )
        dispatch({type: 'VALUE', id: selectedItem})
        dispatch({type: 'ITEMTITLE', id: selectedItem})
        dispatch({type: 'LIST', id: selectedItem})
        resetInputs();
        setSelection(false);
    }

    const showDescription = (selectedItem) => {
        return (
            <>
                <div className='booknow-data-display'>
                    <div className="booknow-data-display-item-title">
                        {selectedItem.description}             
                    </div>
                </div>
                {selectedItem.detail.map((item, i) => (
                    <div key={i} className="booknow-data-display-item-info">
                        <label className='booknow-list-item'>
                            <input checked={data.id === String(i)} onChange={() => setCheckBox(item)} className='booknow-checkbox' type="checkbox" />
                            <div className="checkbox-desc">{item.name}</div>
                        </label>
                    </div>
                ))}
            </>
        )
    }

    const setCheck = (check) => {
        console.log(check)
        setCustom('')
        if(check === "-1"){
            setData({...data, id: check, selected: false});
        }else{
            setData({...data, id: check, selected: true});
        }
    }

    const setCheckBox = (i) => {
        setPackageType(i.name)
        setCheck(String(i.id))
    }

    let pageIndex = 0;

    const findIndexID = (id) => {
        pageIndex = id;
    }

    const setEventType = (item) => {
        setEvent(item.title);
        return displayContents(item.id)
    }

    const resetInputs = () => {
        setFinal(false);
        setEvent('');
        setPurpose('');
        setName('');
        setEmail('');
        setLocation('');
        setTime('');
        setCheck("-1")
        setCustom('');
    }

    const inputCustom = (e, item) => {
        setData({...data, id: item, selected: true});
        setCustom(e)
        setPackageType('')
    }

    const resetButton = (page) => {
        setPageNumber(page)
        setData({...data, id: 0, selected: false});
    }

    const enableLocationButton = (input) => {
        setLocation(input)
        if(input === ''){
            setData({...data, id: 0, selected: false});
        }else{
            setData({...data, id: 0, selected: true});
        }
    }

    const enablePurposeButton = (input) => {
        setPurpose(input)
        if(input === ''){
            setData({...data, id: 0, selected: false});
        }else{
            setData({...data, id: 0, selected: true});
        }
    }

    const enableChalkBoardButton = (input) => {
        setChalkBoard(input)
        if(input === ''){
            setData({...data, id: 0, selected: false});
        }else{
            setData({...data, id: 0, selected: true});
        }
    }

    const enableTimeButton = (input) => {
        setTime(input)
        if(input === ''){
            setData({...data, id: 0, selected: false});
        }else{
            setData({...data, id: 0, selected: true});
        }
    }

    const detectInputName = (input) => {
        setName(input)
        if(name === ''){
            console.log(inputCheck01)
            setInputCheck01(false)
        }else{
            setInputCheck01(true)
        }
        enableAbout();
    }

    const detectInputEmail = (input) => {
        setEmail(input)
        if(email === ''){
            setInputCheck02(false)
        }else{
            setInputCheck02(true)
        }
        enableAbout();
    }

    const enableAbout = () => {
        console.log("Check Name: " + inputCheck01)
        console.log("Check Email: " + inputCheck02)
        if(inputCheck01 === true && inputCheck02 === true){
            setData({...data, id: 0, selected: true});
        }else if(inputCheck01 !== false || inputCheck02 !== false) {
            setData({...data, id: 0, selected: false});
        }
    }

    const displayData = () => {
        switch(pagenumber){
            case 0:
                return(
                    listItem.map((item, i) => (
                        <div onClick={() => findIndexID(i)} className='item-container' key={i}>
                            <ul className={`faq-list${item.listShow ? "" : hideElement}`}>
                                <li className={`faq-item-header${item.value ? "" : hideElement}`} onClick={selection ? () => {} : () => setEventType(item)}>{item.titleShow ? item.title : null}</li>
                                <div className={`faq-item${item.value ? "" : showElement}`}>{item.value ? null : showDescription(item)}</div>
                                {item.value ? null : <div className='faq-item-header-hide'>Or enter a custom amount</div>}
                                {item.value ? null : <input placeholder='Custom e.g. 50 - 100' value={custom} onChange={e => inputCustom(e.target.value, item)} className='booknow-purpose-input' type="text" />}
                            </ul>
                            {item.hide ? <div className="booknow-btn-container">
                                <div className="booknow-btn" onClick={() => previousSelection(item.id)}>Back</div>
                                {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                                {data.selected ? <div onClick={() => resetButton(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                            </div> : null}
                        </div>
                    ))
                )
            case 1:        
                return(
                    <div className='item-container'>
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                Enter setup/delivery address
                            </div>
                            <div className="booknow-data-custom-loc-display">
                                <label className='booknow-list-loc'>
                                    <input placeholder='Address..' value={location} onChange={e => enableLocationButton(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                            {data.selected ? <div onClick={() => resetButton(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                        </div>
                    </div>
                )
            case 2:
                return(
                    <div className="item-container">
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                What is the event?
                            </div>
                            <div className="booknow-data-custom-loc-display">
                                <label className='booknow-list-loc'>
                                    <input placeholder='Birthday/Hangout/etc..' value={purpose} onChange={e => enablePurposeButton(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                            {data.selected ? <div onClick={() => resetButton(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                        </div>
                    </div>
                )
            case 3:
                return(
                    <div className="item-container">
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                Would you like a custom Chalkboard?
                            </div>
                            <div className="booknow-data-custom-loc-display">
                                <label className='booknow-list-loc'>
                                    <input placeholder='Birthday/Hangout/etc..' value={chalkboard} onChange={e => enableChalkBoardButton(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                            {data.selected ? <div onClick={() => resetButton(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                        </div>
                    </div>
                )
            case 4:
                return(
                    <div className="item-container">
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                Event Date & Time 
                            </div>
                            <div className="booknow-data-display-item-loc">
                                <label className='booknow-list-loc'>
                                    <DatePicker format="dd MMMM, yyyy" minDate={new Date(futureDate)} onChange={(date) => setDate(date)} value={date} />
                                </label>
                            </div>
                            <div className="booknow-data-custom-loc-display">
                                Enter your time
                                <label className='booknow-list-loc'>
                                    <input placeholder='3pm' value={time} onChange={e => enableTimeButton(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                            {data.selected ? <div onClick={() => resetButton(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                        </div>
                    </div>
                )
            case 5:
                return(
                    <div className="item-container">
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                About you 
                            </div>
                            <div className="booknow-data-display-item-loc">
                            <label className='booknow-list-loc'>
                                    <input placeholder='Name' value={name} onChange={e => detectInputName(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                                <label className='booknow-list-loc'>
                                    <input placeholder='Email' value={email} onChange={e => detectInputEmail(e.target.value)} className='booknow-purpose-input' type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {final ? <div className="booknow-btn" onClick={() => setPageNumber(6)}>Review</div> : null}
                            {data.selected ? <div onClick={() => setPageNumber(pagenumber + 1)} className="booknow-btn">Next</div> : null}
                        </div>
                    </div>
                )
            case 6:
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return(
                    <div className="item-container">
                        <div className="loc-list-show">
                            <div className="booknow-data-loc-display">
                                Confirm your details
                            </div>
                            <div className="booknow-data-display-item-loc">
                                <div className="booking-review-form">
                                    <div className="booking-container-wrapper">
                                        <div className="booking-review-container-01">
                                            <label className='booknow-review-loc' onClick={() => editPage(5)}>
                                                Name: {name}
                                            </label>
                                            <label className='booknow-review-loc' onClick={() => editPage(0)}>
                                                Event: {event}
                                            </label>
                                        </div>
                                        <div className="booking-review-container-01">
                                            <label className='booknow-review-loc' onClick={() => editPage(5)}>
                                                Email: {email}
                                            </label>
                                            <label className='booknow-review-loc' onClick={() => editPage(0)}>
                                                Package: {checkSelectedPackage()}
                                            </label>
                                        </div>
                                    </div>
                                    <label className='booknow-list-loc' onClick={() => editPage(1)}>
                                            Location: {location}
                                    </label>
                                    <div className="booking-container-wrapper">
                                        <div className="booking-review-container-01">
                                            <label className='booknow-review-loc' onClick={() => editPage(2)}>
                                                Plan: {purpose}
                                            </label>
                                        </div>
                                        <div className="booking-review-container-01">
                                            <label className='booknow-review-loc' onClick={() => editPage(4)}>
                                                Time: {time}
                                            </label>
                                        </div>
                                    </div>
                                    <label className='booknow-list-loc' onClick={() => editPage(4)}>
                                        Date: {date.toLocaleDateString("en-AU", options)}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="booknow-btn-container">
                            <div className="booknow-btn" onClick={() => setPageNumber(pagenumber - 1)}>Back</div>
                            {data.selected ? <div onClick={() => setPageNumber(pagenumber + 1)} className="booknow-btn">Payment</div> : null}
                        </div>
                    </div>
                )
            default:
                return null;
        }
    }

    const checkSelectedPackage = () => {
        if(packageType === ''){
            return custom
        }
        else{
            return packageType
        }
    }

    const editPage = (id) => {
        setFinal(true)
        setPageNumber(id)
    }

  return (
    <div className='booknow-wrapper'>
        <div className="booknow-container">
            <div className="booknow-container-sub">
                {selection ? null : <div className="booknow-container-sub-item-title">What would you like to book today?</div>}
                <div className="booknow-container-sub-item-info">
                    {displayData()}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booknow
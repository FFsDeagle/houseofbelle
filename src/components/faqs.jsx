import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

const linkBooking = <Link className='link-booking' to='/booking'>formal inquiry</Link>

const listItems = [
  {
    id: 1,
    title: "How do I book a picnic?",
    description: `Please submit a ${linkBooking}. Once we verify that your requested time, date, and location is available, we will require a 50% non-refundable retainer deposit  to confirm your booking. The remaining 50% balance and a $100 refundable security damage deposit is then payable 7 days prior to your event.`,
    value: true,
  },
  {
    id: 2,
    title: "What's included in the package?",
    description: "All packages include the following items:",
    value: true,
  },
  {
    id: 3,
    title: "Do you offer food and/or beverages?",
    description: "We do NOT provide food/beverages with our packages, but we can happily recommend food vendors.For set-ups in public locations, ALL guests must adhere to local park rules and regulations (no alcohol, no smoking, no glass containers, etc.) Lilac & Linen assumes no responsibility for guests who receive a citation for these offenses.",
    value: true,
  },
  {
    id: 4,
    title: "Can I leave early?",
    description: "We do NOT provide food/beverages with our packages, but we can happily recommend food vendors.For set-ups in public locations, ALL guests must adhere to local park rules and regulations (no alcohol, no smoking, no glass containers, etc.) Lilac & Linen assumes no responsibility for guests who receive a citation for these offenses.",
    value: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "VALUE":
      return state.map((listItem) => {
        if (listItem.id === action.id) {
          return { ...listItem, value: !listItem.value };
        } else {
          return listItem;
        }
      });
      default:
        return state;
  }
}


function Faqs() {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  const hideElement = "-show"
 
  const [listItem, dispatch] = useReducer(reducer, listItems);

  return (
    <div className='faq-wrapper'>
        <div className="faq">
            <div className="faq-card-01">
              <div className="faq-card-01-title">
                Frequently Asked Questions
              </div>
            </div>
            <div className="faq-card-02">
              {listItem.map((item) => (
                <ul className='faq-list'>
                  <li key={item.id} className='faq-item-header' onClick={() => dispatch({type: 'VALUE', id: item.id})}>{item.title}</li>
                  <li className={`faq-item${item.value ? "" : hideElement}`}>{item.value ? null : item.description}</li>
                </ul>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Faqs
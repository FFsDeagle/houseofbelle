import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

const linkBooking = <Link className='link-booking' to='/booking'>formal inquiry</Link>

const listItems = [
  {
    id: 1,
    title: "How do I book a picnic?",
    description: `Please go to our bookings page to make a booking. Once we verify that your requested time, date, and location is available, we will require a 50% non-refundable retainer deposit  to confirm your booking. The remaining 50% balance and a $100 refundable security damage deposit is then payable 7 days prior to your event.`,
    value: true,
  },
  {
    id: 2,
    title: "What's included in the package?",
    description: "Please go to our packages page and you will find relevant information there.",
    value: true,
  },
  {
    id: 3,
    title: "Do you offer food and/or beverages?",
    description: "Food and drinks are NOT INCLUDED, but we’re more than happy to cater from registered catering with extra cost.",
    value: true,
  },
  {
    id: 4,
    title: "Can I leave early?",
    description: "Please notify us by text/call at least 30-minute before if you’d like to leave earlier than your scheduled end time. The client is responsible for ALL equipment rentals for the duration of their reservation period or until we return. Please do not leave our equipment unattended. Any damages or loss to any of the equipment rentals will be assumed by the client and will incur additional charges.",
    value: true,
  },
  {
    id: 5,
    title: "Do you stay during the duration of the Picnic?",
    description: "No, we will deliver and set-up your picnic and leave once you’re settled. We’ll return once your reservation ends to pack up and clean up.",
    value: true,
  },
  {
    id: 6,
    title: "Any other questions?",
    description: "Drop us an email at: info@houseofbelleau.com with your inquiry and we will get back to you as soon as we can",
    value: true,
  }
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
  
  document.title = 'House of Belle - FAQs';
  
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
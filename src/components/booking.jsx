import { useState } from 'react'
import Calandly from './Calandely'
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker';
import { useEffect } from 'react';

function Booking() {

  const [packageType, setPackageType] = useState('');
  const [packageNo, setPackageNo] = useState(-1);
  const [event, setEvent] = useState('');
  const [purpose, setPurpose] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date())
  const [final, setFinal] = useState(false);
  const [custom, setCustom] = useState('');
  const [chalkboard, setChalkBoard] = useState('');
  const [preferred01, setPreferred01] = useState('');
  const [preferred02, setPreferred02] = useState('');
  const [preferred03, setPreferred03] = useState('');
  const [preferred04, setPreferred04] = useState('');
  const [preferred05, setPreferred05] = useState('');
  const [prefCustom, setPrefCustom] = useState('');
  const [guestAmount, setGuestAmount] = useState('');

  const [data, setData] = useState({
    id: "-1",
    selected: false,
})

  const packages = [
    {id: 0, name: "2 - 4 People $240 inc. GST"},
    {id: 1, name: "4 - 8 People $240 inc. GST"},
    {id: 2, name: "8 - 16 $240 inc. GST"},
    {id: 3, name: "16 - 24 $240 inc. GST"}
  ]

  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 14);

  const checkPackage = (check) => {
    setPackages(check)
    setPackageType(packages[check].name)
    console.log(packageType)
  }

  const setPackages = (check) => {
    if(check !== "-1"){
        setPrefCustom('');
        setData({...data, id: String(check), selected: false});
    }else{
        setData({...data, id: check, selected: true});
    }
  }

  const disableCheck = (e) => {
    setPrefCustom(e)
    setData({...data, id: "-1", selected: false})
    console.log(prefCustom)
  }

  return (
    <div className='booking-wrapper'>
        <div className="booking">
            <div className="booking-card-01">
              <div className="booking-card-01-item-01">
                Please read carefully before booking
              </div>
              <div className="booking-card-01-container">
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    Hours of Operation
                  </div>
                  <div className="booking-card-01-item-02-info">
                    We operate 7 days a week from 10:00am - sunset. All picnic set-ups must be packed up before the sun sets unless the event is held at a private well-lit venue.
                  </div>
                </div>
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    COVID-19 Protocols
                  </div>
                  <div className="booking-card-01-item-02-info">
                    Our entire team is fully vaccinated and boosted. All items will be washed and disinfected after every use. Social distancing protocols will also be followed when greeting you and your guests. Lastly, we will work with you to select a location that ensures social distancing and allows privacy.
                  </div>
                </div>
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    Location Restrictions
                  </div>
                  <div className="booking-card-01-item-02-info">
                    All picnic set-up must be within 40 yards of vehicle access. We operate within 25 miles of zip code 91316 [Encino, CA]. Additional travel fee of $1.50/mile roundtrip will apply for locations after the 25-mile radius.
                  </div>
                </div>
              </div>
              <div className="booking-card-01-item-01">
                Booking & Deposits
              </div>
              <div className="booking-card-01-container">
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    Picnics
                  </div>
                  <div className="booking-card-01-item-02-info">
                    We require a minimum of 14 days’ notice for small group picnics 2-16 guests’ bookings between 2-16 guests and 21 days’ notice for 17 or more. Any booking with less than a week’s notice must be paid in full upfront. We require a 50% non-refundable retainer fee to confirm your booking.  The remaining balance and a $100 security damage deposit (refundable) must be paid no later than 7 days prior to the event.
                  </div>
                </div>
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    Marriage Proposals
                  </div>
                  <div className="booking-card-01-item-02-info">
                    We require a minimum of 30 days’ notice so that we can work with you to create the perfect proposal, customised just for your loved one. We’ll make sure you have an unforgettable proposal. Any less than 14 days that you can always contact us we might be able to help you!
                  </div>
                </div>
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    Décor Hire
                  </div>
                  <div className="booking-card-01-item-02-info">
                    We require 3 months in prior for booking, 25% refundable bond fees from the total hire, if less than 30 days, feel free to contact us as we might be available on your date.
                  </div>
                </div>
              </div>
              <div className="booking-card-01-item-01">
                Location restrictions
              </div>
              <div className="booking-card-01-container">
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-03-info">
                    <li className='booking-card-01-item-03-desc'>All picnics set-ups must be within 40 yards of vehicle access</li>
                    <li className='booking-card-01-item-03-desc'>We operate within 25 kms of zip code 6107</li>
                    <li className='booking-card-01-item-03-desc'>Full setup & pack down bookings that are in locations that are not easily accessible for setting up will incur a $50 set up fee, e.g., stairs, steep hill, no parking or set down bays close to event or picnic location</li>
                    <li className='booking-card-01-item-03-desc'>Additional travel fee of $2/mile roundtrip will apply for locations after the 25-mile radius</li>
                    <li className='booking-card-01-item-03-desc'>Picnics set up & pack down bookings at beach or bush locations will incur a cleaning fee of $50 per set up</li>
                    <li className='booking-card-01-item-03-desc'>Please note that various councils have different rules and regulations, please make yourself familiar with these rules and regulations prior to making a booking.  Also note that some park authorities charge booking fees.  These fees will be additional to the above charges</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-card-02">
              <div className="booking-card-02-title">
                PRICES AND PACKAGES 
              </div>
                {/* <Link className='link-packages' to='/booknow'>
                  <div className="book-now-btn">
                    Book Now
                  </div>
                </Link> */}
              <div className="booking-card-02-container">
                <div className="booking-card-02-form">
                  {/* <div className="booking-card-02-item-info">
                    We believe that ideas and inspiration come to us with one purpose: to be manifested. So whatever your vision may be, let Lilac & Linen help you bring it to fruition!
                  </div> */}
                  {/* <Calandly /> */}
                  <div className="booking-card-02-form-data">
                    <div className="booking-card-02-form-data-name">
                      Name *
                      <input placeholder='Your Name' className='booking-card-02-form-data-input' type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Email *
                      <input placeholder='example@mail.com' className='booking-card-02-form-data-input' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Phone Number *
                      <input placeholder='04XX XXX XXX' className='booking-card-02-form-data-input' type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="booking-card-02-form-data-name">
                      What will you be celebrating? *
                      <input placeholder='Birthday/Picnic etc.' className='booking-card-02-form-data-input' type="text" value={purpose} onChange={e => setPurpose(e.target.value)} />
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Event Date *
                      <DatePicker className='booking-card-02-form-data-input' format="dd MMMM, yyyy" minDate={new Date(futureDate)} onChange={(date) => setDate(date)} value={date} />     
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Event Start Time *
                      <input placeholder='10am - sunset' className='booking-card-02-form-data-input' type="text" value={time} onChange={e => setTime(e.target.value)} />
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Preffered Setting *
                      <label className="booking-card-02-form-data-hover" for="item01">
                        <input className='booking-card-02-form-data-check' id='item01' onChange={e => setPreferred01(e.target.value)} value={preferred01} type="checkbox" />
                        Park
                      </label>
                      <label className="booking-card-02-form-data-hover" for="item02">
                        <input className='booking-card-02-form-data-check' id='item02' onChange={e => setPreferred02(e.target.value)} value={preferred02} type="checkbox" />
                        Beach
                      </label>
                      <label className="booking-card-02-form-data-hover" for="item03">
                        <input className='booking-card-02-form-data-check' id='item03' onChange={e => setPreferred03(e.target.value)} value={preferred03} type="checkbox" />
                        Private home/backyard/patio
                      </label>
                      <label className="booking-card-02-form-data-hover" for="item04">
                        <input className='booking-card-02-form-data-check' id='item04' onChange={e => setPreferred04(e.target.value)} value={preferred04} type="checkbox" />
                        Private venue
                      </label>
                      <label className="booking-card-02-form-data-hover" for="item05">
                        <input className='booking-card-02-form-data-check' id='item05' onChange={e => setPreferred05(e.target.value)} value={preferred05} type="checkbox" />
                        Other
                      </label>
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Package Type *
                      <label className="booking-card-02-form-data-hover" for="item06">
                        <input checked={data.id === String(0)} key={0} className='booking-card-02-form-data-check' id='item06' onChange={() => checkPackage("0")} value={preferred01} type="checkbox" />
                        {packages[0].name}
                      </label>
                      <label key={1} className="booking-card-02-form-data-hover" for="item07">
                        <input checked={data.id === String(1)} key={1} className='booking-card-02-form-data-check' id='item07' onChange={() => checkPackage("1")} value={preferred02} type="checkbox" />
                        {packages[1].name}
                      </label>
                      <label key={2} className="booking-card-02-form-data-hover" for="item08">
                        <input checked={data.id === String(2)} key={2} className='booking-card-02-form-data-check' id='item08' onChange={() => checkPackage("2")} value={preferred03} type="checkbox" />
                        {packages[2].name}
                      </label>
                      <label key={3} className="booking-card-02-form-data-hover" for="item09">
                        <input checked={data.id === String(3)} key={3} className='booking-card-02-form-data-check' id='item09' onChange={() => checkPackage("3")} value={preferred04} type="checkbox" />
                        {packages[3].name}
                      </label>
                        Custom package requests
                        <input value={prefCustom} onChange={e => disableCheck(e.target.value)} placeholder='e.g. Large Group Reservation' className='booking-card-02-form-data-input' type="text" />
                        <div className="booking-card-02-form-data-desc">
                          <div className="booking-card-02-form-data-name">
                            Note
                          </div>
                          <li className='booking-list-item'>Enter "Large Group Reservation" for group more than 24pax. We cater Picnics up till 50 pax</li> 
                          <li className='booking-list-item'>Enter “Romantic / I Do” for romantic picnics or Proposal Package</li> 
                          <li className='booking-list-item'>We will be sending you a form to fill up and we need a little bit details so that we can work together to create a perfect romantic picnic / proposal set up!</li>
                        </div>
                    </div>
                    <div className="booking-card-02-form-data-name">
                      <div className="booking-card-02-form-data-desc">
                        <div className="booking-card-02-form-data-name">
                          What's Included?
                        </div>
                        <li className='booking-list-item'>3 hours of use </li> 
                        <div className="booking-card-02-form-data-name">
                          Our packages are priced based on guest count, which include :
                        </div>
                        <li className='booking-list-item'>Enter “Romantic / I Do” for romantic picnics or Proposal Package</li> 
                        <li className='booking-list-item'>We will be sending you a form to fill up and we need a little bit details so that we can work together to create a perfect romantic picnic / proposal set up!</li>
                      </div>
                    </div>
                    <div className="booking-card-02-form-data-name">
                      Customized message for chalkboard sign *
                      <input value={chalkboard} onChange={e => setChalkBoard(e.target.value)} placeholder='e.g. Large Group Reservation' className='booking-card-02-form-data-input' type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Booking
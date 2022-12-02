import React from 'react'
import { Link } from 'react-router-dom'
import Calandly from './Calandely'

function booking() {
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
                    Booking & Deposits
                  </div>
                  <div className="booking-card-01-item-02-info">
                  We require a 50% non-refundable retainer fee to confirm your booking.  The remaining balance and a $100 security damage deposit (refundable) must be paid no later than 7 days prior to the event.

                  e require a minimum of 5 days’ notice for all bookings between 2-16 guests and 21 days’ notice for 17 or more. Any booking with less than a week’s notice must be paid in full upfront.
                  </div>
                </div>
                <div className="booking-card-01-item-02">
                  <div className="booking-card-01-item-02-title">
                    COVID-19 Protocols
                  </div>
                  <div className="booking-card-01-item-02-info">
                    Our entire team is fully vaccinated and boostered. All items will be washed and disinfected after every use. While setting up your picnic, we will use gloves and wear a mask at all times. Social distancing protocols will also be followed when greeting you and your guests. Lastly, we will work with you to select a location that ensures social distancing and allows privacy.
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
            </div>
            <div className="booking-card-02">
              <div className="booking-card-02-title">
                Celebrate with us!
              </div>
              <div className="booking-card-02-container">
                <div className="booking-card-02-form">
                  <div className="booking-card-02-item-info">
                    We believe that ideas and inspiration come to us with one purpose: to be manifested. So whatever your vision may be, let Lilac & Linen help you bring it to fruition!
                  </div>
                  {/* <form>
                    <div id="booking-form-container" class="form-group">
                      <label className='booking-form-input' for="exampleFormControlInput0">Full name *</label>
                      <input type="name" class="form-control" id="exampleFormControlInput0" placeholder="Your name here" />
                      <label className='booking-form-input' for="exampleFormControlInput1">Email address *</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      <label className='booking-form-input' for="exampleFormControlInput2">Phone Number *</label>
                      <input type="phone" class="form-control" id="exampleFormControlInput3" placeholder="E.g. 0412 1234 5678" />
                      <div class="form-group">
                        <label className='booking-form-input' for="exampleFormControlSelect1">What will you be celebrating? *</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>Birthday</option>
                          <option>Anniversary</option>
                          <option>Proposal</option>
                          <option>Engagement</option>
                          <option>Just because!</option>
                          <option>Date night</option>
                          <option>Baby shower</option>
                          <option>Bridal party</option>
                          <option>Graduation</option>
                          <option>Corporate event</option>
                          <option>Other</option>
                        </select>
                    </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Tell us more about your gathering</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <label type="text" class="form-control" aria-label="Text input with checkbox">Park</label>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <label type="text" class="form-control" aria-label="Text input with checkbox">Beack (additional location fee)</label>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <label type="text" class="form-control" aria-label="Text input with checkbox">Private home/backyard/patio</label>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <label type="text" class="form-control" aria-label="Text input with checkbox">Private venue</label>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <label type="text" class="form-control" aria-label="Text input with checkbox">Other</label>
                    </div>
                    <div id="booking-form-container" class="form-group">
                      <label className='booking-form-input' for="exampleFormControlInput4">Customized message for chalkboard sign (optional)</label>
                      <input type="chalk-writing" class="form-control" id="exampleFormControlInput4" placeholder="Your message" />
                    </div>
                  </form> */}
                  <Calandly />
                  <div className="booking-card-02-form-button">
                    <Link className='link-booking' to='/booking-complete'>
                      SUBMIT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default booking
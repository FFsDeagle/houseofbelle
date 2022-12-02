import React, { useEffect } from 'react'

function Faqs() {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <div className='faq-wrapper'>
        <div className="faq">
            <div className="faq-card-01">
              <div className="faq-card-01-title">
                Frequently Asked Questions
              </div>
            </div>
            <div className="faq-card-02">
              <div id="faq-dropdowncollapse">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div className='package-title'>How do I book a picnic?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for small groups</li>
                      <li>Two (2) hours of use</li>
                      <li>Table for 2 guests: $250</li>
                      <li>Additional Guests up to 8: $40 per guest</li>
                      <li>10% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className='package-title'>What's included in the package?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for midsize groups</li>
                      <li>Three (3) hours of use</li>
                      <li>Table for 9-10 guests: $545</li>
                      <li>Table for 11-12 guests: $645</li>
                      <li>Table for 13-16 guests: $55/person</li>
                      <li>12-15% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className='package-title'>Do you offer food and/or beverages?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <div className='package-title'>How far in advance can I book?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <div className='package-title'>What happens if there is inclement weather(rain, wind, etc.)?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <div className='package-title'>What is your cancellation policy?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingEight">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        <div className='package-title'>What is your rescheduling policy</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingNine">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        <div className='package-title'>Do you stay during the duration of the picnic?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTen">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        <div className='package-title'>What if we want to leave early?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingEleven">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        <div className='package-title'>What if an item were to get damaged/lost?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwelve">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        <div className='package-title'>Can you set up anywhere?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThirteen">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        <div className='package-title'>What payment methods do you accept?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingSeven">
                    <h5 class="mb-0">
                      <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <div className='package-title'>Still have questions or want to say hello?</div>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                    <div class="card-body">
                      <li>Ideal for large groups</li>
                      <li>Four (4) hours of use</li>
                      <li>Table for 17-30 guests - $65/person</li>
                      <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                      <li>*Requires 21 days’ minimum notice</li>
                      <li>20% Service Fee will be added</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs
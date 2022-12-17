import React, { useEffect} from 'react'
import img01 from '../images/hero-img-02.jpg'
import img02 from '../images/IMG_2345.jpg'

function Packages() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <div className='packages-wrapper'>
        <div className="packages">
            <div className="packages-card-01">
                <div className="packages-card-01-title">
                    Packages & Pricing
                </div>
                <div className="packages-card-01-container">
                    <div className="packages-card-01-item">
                        <img className='packages-card-01-item-img' src={img01} alt="" />
                        <div className="packages-card-01-item-title">
                            Pearl Package
                        </div>
                        <div className="packages-card-01-item-info">
                            <li>Two (2) hours of use</li>
                            <li>Ideal for small groups</li>
                            <ol type = "."  id="bullet">
                                <li>Table for 2 guests: $250</li>
                                <li>Additional guests up to 8: $40 per guest</li>
                                <li>10% Service Fee will be added</li>
                            </ol>
                        </div>
                    </div>
                    <div className="packages-card-01-item">  
                        <img className='packages-card-01-item-img' src={img01} alt="" />
                        <div className="packages-card-01-item-title">
                            Ruby Package
                        </div>
                        <div className="packages-card-01-item-info">
                            <li>Two (2) hours of use</li>
                            <li>Ideal for small groups</li>
                            <ol type = "."  id="bullet">
                                <li>Table for 9-10 guests: $545</li>
                                <li>Table for 11-12 guests: $645</li>
                                <li>Table for 13-16 guests: $55/person</li>
                                <li>12-15% Service Fee will be added</li>
                            </ol>
                        </div>
                    </div>
                    <div className="packages-card-01-item">
                        <img className='packages-card-01-item-img' src={img01} alt="" />
                        <div className="packages-card-01-item-title">
                            Diamond Package
                        </div>
                        <div className="packages-card-01-item-info">
                            <li>Two (2) hours of use</li>
                            <li>Ideal for small groups</li>
                            <ol type = "."  id="bullet">
                                <li>Table for 17-30 guests - $65/person</li>
                                <li>For picnics 30+ guests, please submit a formal inquiry for a custom quote.</li>
                                <li>20% Service Fee will be added</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packages-card-02">
                <div className="packages-card-02-container">
                    <div className="packages-card-02-info">
                        <div className="pacakges-card-02-info-title">
                            Whats included?
                        </div>
                        <div className="packages-card-02-info-details-title">
                            Our packages are priced based on guest count, which include:
                        </div>
                        <div className="packages-card-02-info-details-bullets">
                            <li>Curated Lilac & Linen styling </li>
                            <li>Client’s color preferences</li>
                            <li>Delivery, set-up, pick up, and clean-up</li>
                            <li>Styled picnic setting with blankets</li>
                            <li>Assortment of stylish throw pillows for each guest</li>
                            <li>Custom-made low picnic table(s) </li>
                            <li>Gauze-style table runner(s)</li>
                            <li>Ceramic dinner plates</li>
                            <li>Set of gold-brass flatware for each guest: dinner fork and dinner knife</li>
                            <li>Glass goblets</li>
                            <li>Cloth napkins</li>
                            <li>Tabletop candles</li>
                            <li>White fringe umbrella(s)</li>
                            <li>Pampas grass</li>
                            <li>Simple fresh flowers in bud vases</li>
                            <li>Chalkboard sign with customized message</li>
                            <li>Hand sanitizer</li>
                            <li>Food and drinks are NOT included, but we’re more than happy to recommend vendors and eateries based on your selected picnic area.</li>
                        </div>
                    </div>
                    <div className="packages-card-02-img">  
                        <img className='packages-card-02-item-img' src={img02} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages
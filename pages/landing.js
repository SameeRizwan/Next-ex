import Contactform from '../components/Form/Contactform'

const Landing = () => {

  const mystyle = {
    fontSize: "38px",
    color: "#29a19c"
  };


  return (
    <div className="App">
     
      <section id="intro">

        <div className="intro-container wow fadeIn">
          <h1 className="mb-4 pb-0">Let Us Plan your <br /><span>3-DAYS</span> Getaway!</h1>
          <p className="mb-4 pb-0">The Catch? Your Destination will be according to your personality</p>
          <a href="https://youtu.be/7Nzi1TQwDMQ" className="venobox play-btn mb-4" data-vbtype="video"
            data-autoplay="true"></a> 
          <a href="#" className="about-btn scrollto">How It Works</a>
        </div>
      </section>

      <main id="main">





        <section id="schedule" className="section-with-bg">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Most Popular</h2>
              <p>Ours all time favourite trip</p>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
              </li>
            </ul>

            <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
            necessitatibus voluptatem quis labore perspiciatis quia.</h3>

            <div className="tab-content row justify-content-center">


              <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>09:30 AM</time></div>
                  <div className="col-md-10">
                    <h4>Registration</h4>
                    <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Keynote <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>

              <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>



              <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="/assets/landingpage/img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>


            </div>

          </div>

        </section>


        <section id="venue" className="wow fadeInUp">

          <div className="container-fluid">

            <div className="section-header">
              <h2>Event Venue</h2>
              <p>Event venue location info and gallery</p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 venue-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
              </div>

              <div className="col-lg-6 venue-info">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-8">
                    <h3>Downtown Conference Center, New York</h3>
                    <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="container-fluid venue-gallery-container">
            <div className="row no-gutters">

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/1.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/1.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/2.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/2.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/3.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/3.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/4.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/4.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/5.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/5.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/6.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/6.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/7.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/7.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="/assets/landingpage/img/venue-gallery/8.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="/assets/landingpage/img/venue-gallery/8.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </section>


        <section id="hotels" className="section-with-bg wow fadeInUp">

          <div className="container">
            <div className="section-header">
              <h2>Hotels</h2>
              <p>Her are some nearby hotels</p>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="/assets/landingpage/img/hotels/1.jpg" alt="Hotel 1" className="img-fluid" />
                  </div>
                  <h3><a href="#">Hotel 1</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>0.4 Mile from the Venue</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="/assets/landingpage/img/hotels/2.jpg" alt="Hotel 2" className="img-fluid" />
                  </div>
                  <h3><a href="#">Hotel 2</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-full"></i>
                  </div>
                  <p>0.5 Mile from the Venue</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="/assets/landingpage/img/hotels/3.jpg" alt="Hotel 3" className="img-fluid" />
                  </div>
                  <h3><a href="#">Hotel 3</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>0.6 Mile from the Venue</p>
                </div>
              </div>

            </div>
          </div>

        </section>

       
        <section id="supporters" className="section-with-bg wow fadeInUp">

          <div className="container">
            <div className="section-header">
              <h2>Sponsors</h2>
            </div>

            <div className="row no-gutters supporters-wrap clearfix">

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="/assets/landingpage/img/part1.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="/assets/landingpage/img/part2.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="/assets/landingpage/img/part3.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="/assets/landingpage/img/part4.png" className="img-fluid" alt="" />
                </div>
              </div>

           

            </div>

          </div>

        </section>


        <section id="faq" className="wow fadeInUp">

          <div className="container">

            <div className="section-header">
              <h2>F.A.Q </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <ul id="faq-list">

                  <li>
                    <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq1" className="collapse" data-parent="#faq-list">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq2" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq3" className="collapse" data-parent="#faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq4" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq5" className="collapse" data-parent="#faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq6" className="collapse" data-parent="#faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                      </p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

          </div>

        </section>

        <section id="subscribe">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Newsletter</h2>
              <p>We hate to send mails, but how can we forget you without mentioning our amazing offers!</p>
            </div>

            <form method="POST" action="#">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your Email" />
                </div>
                <div className="col-auto">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>

          </div>
        </section>


        

        <section id="speakers" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>Faces Behind The PACKPACK</p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="speaker">
                  <img src="/assets/landingpage/img/bilal.jpg" alt="Speaker 1" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Bilal Fayyaz</a></h3>
                    <p>Quas alias incidunt</p>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="speaker">
                  <img src="/assets/landingpage/img/ghous.jpg" alt="Speaker 2" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Ghous Ali</a></h3>
                    <p>Consequuntur odio aut</p>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="speaker">
                  <img src="/assets/landingpage/img/affan.jpg" alt="Speaker 3" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Affan Rasheed</a></h3>
                    <p>Fugiat laborum et</p>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="speaker">
                  <img src="/assets/landingpage/img/samee.jpg" alt="Speaker 4" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Samee Rizwan</a></h3>
                    <p>Debitis iure vero</p>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </section>

        <section id="contact" className="section-bg wow fadeInUp">

          <div className="container">

            <div className="section-header">
              <h2>Contact Us</h2>
              <p>We are just a ping away!</p>
            </div>

            <div className="row contact-info">

              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>SOFTWARE DEPT. UET TAXILA</address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p><a href="tel:+155895548855">+92 300 8039271</a></p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
              </div>

            </div>

          <Contactform />

          </div>
        </section>

      </main>

      <a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>

    </div>
  );

}

export default Landing;
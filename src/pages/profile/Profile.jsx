import Button from '/src/_components/button'
import Field from '/src/_components/field'
import Icon from '/src/_components/Icon'
import './profile.css'
import portrait from '/src/_assets/img/portrait.png'
import cover from '/src/_assets/img/cover.png'
import portrait_badge from '/src/_assets/img/portrait_badge.png'
import talent_insider from '/src/_assets/img/talent_insider.png'
// import gojek from '../../img/gojek.png'
// import jco from '../../img/jco.png'
// import jco2 from '../../img/jco2.png'
// import fiverr from '../../img/fiverr.png'
// import fiverr2 from '../../img/fiverr2.png'

export default function Profile() {
  return (
    <div id="profile">
      <header>
        <div>
          <a href="/">LOGO</a>
          <div>
            <Field type="select" selectOption={['Menu']} onChange={() => {}}>
              <Icon icon="language"></Icon>
            </Field>
            <Field placeholder="Search..." onChange={() => {}}>
              <Button onClick={() => {}}>
                <Icon icon="search" color="#fff"></Icon>
              </Button>
            </Field>
          </div>
        </div>
        <div>
          <Button onClick={() => {}}>
            <Icon icon="email"></Icon>
          </Button>
          <Button onClick={() => {}}>
            <Icon icon="notifications"></Icon>
          </Button>
          <div>
            <Button onClick={() => {}}>
              <img src={portrait} alt="img" />
              <Icon icon="arrow_drop_down"></Icon>
            </Button>
            <ul>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div>
          <img src={cover} alt="img" />
          <img src={portrait_badge} alt="img" />
          <Button onClick={() => {}}>
            <Icon icon="edit" />
          </Button>
        </div>
        <div>
          <div>
            <div>
              <ul>
                <li>
                  <p>
                    <span>482</span>
                    <br />
                    Views
                  </p>
                </li>
                <li>
                  <p>
                    <span>542</span>
                    <br />
                    Connects
                  </p>
                </li>
                <li>
                  <p>
                    <span>1,245</span>
                    <br />
                    Followers
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <p>Amanda Christine</p>
                <Icon icon="enfj" />
                <Button onClick={() => {}}>
                  <Icon icon="edit" />
                </Button>
              </div>
              <div>
                <p>UI/UX Designer at Talent Insider</p>
                <p>South Jakarta, DKI Jakarta, Indonesia</p>
              </div>
              <Button onClick={() => {}}>Button</Button>
            </div>
            <div>
              <ul>
                <li>
                  <Button onClick={() => {}}>Button</Button>
                </li>
                <li>
                  <Button onClick={() => {}}>Button</Button>
                </li>
                <li>
                  <Button onClick={() => {}}>Button</Button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <p>Profile Status</p>
                  <Button onClick={() => {}}>
                    <Icon icon="more_horiz" />
                  </Button>
                </div>
                <div>
                  <div>
                    <p>Intermediate</p>
                    <p>Complete 2 steps to achieve Expert!</p>
                    <div>
                      <div>
                        <p>70%</p>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <p>Which industry do you work in?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                    <li>
                      <p>Which University do you go to?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                    <li>
                      <p>Which industry do you work in?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                    <li>
                      <p>Which University do you go to?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                    <li>
                      <p>Which industry do you work in?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                    <li>
                      <p>Which University do you go to?</p>
                      <p>Members who add an industry receive up to 2.5 times as many profile views</p>
                      <Button onClick={() => {}}>Button</Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <p>About</p>
                  <Button onClick={() => {}}>
                    <Icon icon="edit" />
                  </Button>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet fu
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Experience<span>(8)</span>
                </p>
                <Button onClick={() => {}}>
                  <Icon icon="add" />
                </Button>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={talent_insider} alt="img" />
                    <div>
                      <p>UI/UX Designer</p>
                      <p>
                        <span>Talent Insider</span>
                        &nbsp;-&nbsp;
                        <span>Full-time</span>
                      </p>
                      <p>
                        <span>Aug 2022</span>
                        &nbsp;-&nbsp;
                        <span>Present</span>
                      </p>
                      <p>Rukan Artha Gading, North Jakarta</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit risus sem sollicit udin dolor sit amet, con
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={talent_insider} alt="img" />
                    <div>
                      <p>UI/UX Designer</p>
                      <p>
                        <span>Talent Insider</span>
                        &nbsp;-&nbsp;
                        <span>Full-time</span>
                      </p>
                      <p>
                        <span>Aug 2022</span>
                        &nbsp;-&nbsp;
                        <span>Present</span>
                      </p>
                      <p>Rukan Artha Gading, North Jakarta</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit risus sem sollicit udin dolor sit amet, con
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={talent_insider} alt="img" />
                    <div>
                      <p>UI/UX Designer</p>
                      <p>
                        <span>Talent Insider</span>
                        &nbsp;-&nbsp;
                        <span>Full-time</span>
                      </p>
                      <p>
                        <span>Aug 2022</span>
                        &nbsp;-&nbsp;
                        <span>Present</span>
                      </p>
                      <p>Rukan Artha Gading, North Jakarta</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit risus sem sollicit udin dolor sit amet, con
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={talent_insider} alt="img" />
                    <div>
                      <p>UI/UX Designer</p>
                      <p>
                        <span>Talent Insider</span>
                        &nbsp;-&nbsp;
                        <span>Full-time</span>
                      </p>
                      <p>
                        <span>Aug 2022</span>
                        &nbsp;-&nbsp;
                        <span>Present</span>
                      </p>
                      <p>Rukan Artha Gading, North Jakarta</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit risus sem sollicit udin dolor sit amet, con
                      </p>
                    </div>
                  </li>
                </ul>
                <Button onClick={() => {}}>
                  <p>See More</p>
                  <Icon icon="keyboard_double_arrow_down" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <div>
            <a href="#">LOGO</a>
            <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
          </div>
          <div>
            <p>JOB SEEKERS</p>
            <ul>
              <li>Jobs Category</li>
              <li>Jobs by Companies</li>
              <li>Career Support</li>
              <li>Testimony</li>
              <li>Download App</li>
            </ul>
          </div>
          <div>
            <p>RECRUITERS</p>
            <ul>
              <li>Post A Job Ads</li>
              <li>Search For Resumes</li>
              <li>Advertise with us</li>
              <li>Company Profiles</li>
            </ul>
          </div>
          <div>
            <p>ABOUT</p>
            <ul>
              <li>About Us</li>
              <li>News and Events</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <p>Contacts</p>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Send Feedback</li>
              <li>
                <p>Socials</p>
                <ul>
                  <li>
                    <a href="#">
                      <Icon icon="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon icon="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon icon="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Icon icon="instagram" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>© LOGO 2022</div>
      </footer>
    </div>
  )
}

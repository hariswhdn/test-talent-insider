import {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '/src/_stores/authSlice'
import {getExperience, addExperience} from '/src/_stores/experienceSlice'

import Button from '/src/_components/Button'
import Field from '/src/_components/Field'
import Icon from '/src/_components/Icon'
import Modal from '/src/_components/Modal'
import './profile.css'
import portrait from '/src/_assets/img/portrait.png'
import cover from '/src/_assets/img/cover.png'
import portrait_badge from '/src/_assets/img/portrait_badge.png'
import talent_insider from '/src/_assets/img/talent_insider.png'

export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {auth} = useSelector((state) => state.auth)
  const {experience} = useSelector((state) => state.experience)

  const [init, setInit] = useState(false)
  const [modalExperience, setModalExperience] = useState(false)
  const [sortedExperience, setSortedExperience] = useState([])
  const [navSub, setNavSub] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [])

  useEffect(() => {
    if (init && Object.keys(auth).length > 0 && auth?.user?._id) {
      dispatch(getExperience(auth.user._id))
    }
  }, [auth, init])

  useEffect(() => {
    if (Object.keys(experience).length > 0) {
      const willSortedExperience = [...experience].sort(function (a, b) {
        return new Date(b.start) - new Date(a.start)
      })
      setSortedExperience(willSortedExperience)
    }
  }, [experience])

  return (
    <div
      id="profile"
      onClick={() => {
        if (navSub) {
          setNavSub(false)
        }
      }}>
      <header>
        <div>
          <Link to="/">LOGO</Link>
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
            <Button
              onClick={() => {
                setNavSub(!navSub)
              }}>
              <img src={portrait} alt="img" />
              <Icon icon="arrow_drop_down"></Icon>
            </Button>
            <ul className={'nav_sub' + (navSub ? ' show' : '')}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Button
                  onClick={() => {
                    if (dispatch(logout())) {
                      navigate('/login')
                    }
                  }}>
                  Sign out
                </Button>
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
                <Button onClick={() => setModalExperience(true)}>
                  <Icon icon="add" />
                </Button>
              </div>
              <div>
                <ul>
                  {sortedExperience.map(function (item) {
                    const dateStart = new Date(item.start)
                    const dayStart = dateStart.toLocaleString('id-ID', {day: 'numeric'})
                    const monthStart = dateStart.toLocaleString('id-ID', {month: 'short'})
                    const yearStart = dateStart.toLocaleString('id-ID', {year: '2-digit'})
                    const dateEnd = new Date(item.end)
                    const dayEnd = dateEnd.toLocaleString('id-ID', {day: 'numeric'})
                    const monthEnd = dateEnd.toLocaleString('id-ID', {month: 'short'})
                    const yearEnd = dateStart.toLocaleString('id-ID', {year: '2-digit'})
                    return (
                      <li key={item._id}>
                        <img src={talent_insider} alt="img" />
                        <div>
                          <p>{item.jobTitle}</p>
                          <p>
                            <span>{item.company}</span>
                            &nbsp;-&nbsp;
                            <span>Full-time</span>
                          </p>
                          <p>
                            <span>{dayStart + ' ' + monthStart + ' ' + yearStart}</span>
                            &nbsp;-&nbsp;
                            <span>{dayEnd + ' ' + monthEnd + ' ' + yearEnd}</span>
                          </p>
                          <p>{item.country}</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis accumsan, risus sem
                            sollicitudin lacus, ut interdum tellus elit risus sem sollicit udin dolor sit amet, con
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <Button onClick={() => {}}>
                  <p>See More</p>
                  <Icon icon="keyboard_double_arrow_down" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {modalExperience && <ModalExperience setState={setModalExperience} />}
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

function ModalExperience({setState}) {
  const dispatch = useDispatch()

  const {auth} = useSelector((state) => state.auth)
  const {loading, experience, error} = useSelector((state) => state.experience)

  const [country, setCountry] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [currentlyWorking, setCurrentlyWorking] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(auth).length > 0 && auth?.user?._id && auth?.token) {
      if (
        dispatch(
          addExperience(
            {
              createdBy: auth.user._id,
              country: country,
              jobTitle: jobTitle,
              company: companyName,
              currentJob: currentlyWorking,
              start: startDate,
              end: endDate,
            },
            auth.token
          )
        )
      ) {
        setState(false)
      }
    }
  }

  useEffect(() => {
    if (Object.keys(experience).length > 0) {
    }
  }, [experience])

  return (
    <Modal title="Add Experience" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." setState={setState}>
      <form onSubmit={(e) => onSubmit(e)}>
        <Field
          label="Country"
          placeholder="Enter a country"
          required={true}
          disabled={loading}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Field
          label="Job Title"
          placeholder="Enter a position or title"
          required={true}
          disabled={loading}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <Field
          label="Company Name"
          placeholder="Ex. Microsoft"
          required={true}
          disabled={loading}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <Field
          label="I'm currently working in this role"
          type="checkbox"
          disabled={loading}
          checked={currentlyWorking}
          onChange={(e) => setCurrentlyWorking(e.target.checked)}
        />
        <Field
          label="Start Date"
          type="date"
          required={true}
          disabled={loading}
          value={startDate}
          onChange={(e) => {
            setStartDate(new Date(e.target.value).toISOString().split('T')[0])
          }}
        />
        <Field
          label="End Date"
          type="date"
          required={!currentlyWorking}
          disabled={currentlyWorking}
          value={endDate}
          onChange={(e) => {
            setEndDate(new Date(e.target.value).toISOString().split('T')[0])
          }}
        />
        <p>{error}</p>
        <Button type="submit" disabled={loading}>
          Save
        </Button>
      </form>
    </Modal>
  )
}

import {useState} from 'react'
import Icon from '/src/_components/Icon'
import Field from '/src/_components/field'
import Button from '/src/_components/button'
import MultiRange from '/src/_components/multiRange'
import './home.css'
import portrait from '/src/_assets/img/portrait.png'
import talent_insider from '/src/_assets/img/talent_insider.png'

export default function Home() {
  const salaryMin = 1960000
  const salaryMax = 9960000
  const [salaryRangeMin, setSalaryRangeMin] = useState(salaryMin)
  const [salaryRangeMax, setSalaryRangeMax] = useState(salaryMax)

  const [employmentTypeFulltime, setEmploymentTypeFulltime] = useState(false)
  const [employmentTypeParttime, setEmploymentTypeParttime] = useState(false)
  const [employmentTypeContract, setEmploymentTypeContract] = useState(false)
  const [employmentTypeInternship, setEmploymentTypeInternship] = useState(false)

  const [locationSingapore, setLocationSingapore] = useState(false)
  const [locationPhilippines, setLocationPhilippines] = useState(false)
  const [locationMalaysia, setLocationMalaysia] = useState(false)
  const [locationIndonesia, setLocationIndonesia] = useState(false)

  const [experienceLevel1, setExperienceLevel1] = useState(false)
  const [experienceLevel2, setExperienceLevel2] = useState(false)
  const [experienceLevel3, setExperienceLevel3] = useState(false)
  const [experienceLevel4, setExperienceLevel4] = useState(false)

  const [workTypeOnsite, setworkTypeOnsite] = useState(false)
  const [workTypeRemote, setworkTypeRemote] = useState(false)
  const [workTypeHybrid, setworkTypeHybrid] = useState(false)

  const [employmentTypeCollapse, setEmploymentTypeCollapse] = useState(false)
  const [locationCollapse, setLocationCollapse] = useState(false)
  const [experienceLevelCollapse, setExperienceLevelCollapse] = useState(false)
  const [workTypeCollapse, setWorkTypeCollapse] = useState(false)

  const [salaryRangeCollapse, setSalaryRangeCollapse] = useState(false)

  return (
    <div id="home">
      <header>
        <div>
          <a href="/">LOGO</a>
          <Field placeholder="Search jobs..." onChange={() => {}}>
            <Button onClick={() => {}}>
              <Icon icon="search" size={20} color="#fff" />
            </Button>
          </Field>
        </div>
        <div>
          <nav>
            <ul>
              <li className="active">
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
          <Button onClick={() => {}}>
            <Icon icon="notifications" color="#fff" />
          </Button>
          <div>
            <Button onClick={() => {}}>
              <img src={portrait} alt="img" />
              <Icon icon="arrow_drop_down" size={16} color="#fff" />
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
        <aside>
          <div>
            <p>FILTER BY</p>
          </div>
          <div>
            <div>
              <div onClick={() => setEmploymentTypeCollapse(!employmentTypeCollapse)}>
                <p>Employment Type</p>
                <Icon icon={employmentTypeCollapse ? 'expand_more' : 'expand_less'} size={20} />
              </div>
              <div className={employmentTypeCollapse ? 'collapse' : ''}>
                <Field
                  label="Full-time"
                  type="checkbox"
                  name="employment_type"
                  checked={employmentTypeFulltime}
                  onChange={(e) => setEmploymentTypeFulltime(e.target.checked)}
                />
                <Field
                  label="Part-time"
                  type="checkbox"
                  name="employment_type"
                  checked={employmentTypeParttime}
                  onChange={(e) => setEmploymentTypeParttime(e.target.checked)}
                />
                <Field
                  label="Contract"
                  type="checkbox"
                  name="employment_type"
                  checked={employmentTypeContract}
                  onChange={(e) => setEmploymentTypeContract(e.target.checked)}
                />
                <Field
                  label="Internship"
                  type="checkbox"
                  name="employment_type"
                  checked={employmentTypeInternship}
                  onChange={(e) => setEmploymentTypeInternship(e.target.checked)}
                />
              </div>
            </div>
            <div>
              <div onClick={() => setLocationCollapse(!locationCollapse)}>
                <p>Location</p>
                <Icon icon={locationCollapse ? 'expand_more' : 'expand_less'} size={20} />
              </div>
              <div className={locationCollapse ? 'collapse' : ''}>
                <Field
                  label="Singapore"
                  type="checkbox"
                  name="location"
                  checked={locationSingapore}
                  onChange={(e) => {
                    setLocationSingapore(e.target.checked)
                  }}
                />
                <Field
                  label="Philippines"
                  type="checkbox"
                  name="location"
                  checked={locationPhilippines}
                  onChange={(e) => {
                    setLocationPhilippines(e.target.checked)
                  }}
                />
                <Field
                  label="Malaysia"
                  type="checkbox"
                  name="location"
                  checked={locationMalaysia}
                  onChange={(e) => {
                    setLocationMalaysia(e.target.checked)
                  }}
                />
                <Field
                  label="Internship"
                  type="checkbox"
                  name="location"
                  checked={locationIndonesia}
                  onChange={(e) => {
                    setLocationIndonesia(e.target.checked)
                  }}
                />
              </div>
            </div>
            <div>
              <div onClick={() => setExperienceLevelCollapse(!experienceLevelCollapse)}>
                <p>Experience Level</p>
                <Icon icon={experienceLevelCollapse ? 'expand_more' : 'expand_less'} size={20} />
              </div>
              <div className={experienceLevelCollapse ? 'collapse' : ''}>
                <Field
                  label="0-1 year"
                  type="checkbox"
                  name="experience_level"
                  checked={experienceLevel1}
                  onChange={(e) => {
                    setExperienceLevel1(e.target.checked)
                  }}
                />
                <Field
                  label="1-3 years"
                  type="checkbox"
                  name="experience_level"
                  checked={experienceLevel2}
                  onChange={(e) => {
                    setExperienceLevel2(e.target.checked)
                  }}
                />
                <Field
                  label="3-5 years"
                  type="checkbox"
                  name="experience_level"
                  checked={experienceLevel3}
                  onChange={(e) => {
                    setExperienceLevel3(e.target.checked)
                  }}
                />
                <Field
                  label=">5 years"
                  type="checkbox"
                  name="experience_level"
                  checked={experienceLevel4}
                  onChange={(e) => {
                    setExperienceLevel4(e.target.checked)
                  }}
                />
              </div>
            </div>
            <div>
              <div onClick={() => setWorkTypeCollapse(!workTypeCollapse)}>
                <p>Work Type</p>
                <Icon icon={workTypeCollapse ? 'expand_more' : 'expand_less'} size={20} />
              </div>
              <div className={workTypeCollapse ? 'collapse' : ''}>
                <Field
                  label="On-site"
                  type="checkbox"
                  name="work_type"
                  checked={workTypeOnsite}
                  onChange={(e) => {
                    setworkTypeOnsite(e.target.checked)
                  }}
                />
                <Field
                  label="Remote"
                  type="checkbox"
                  name="work_type"
                  checked={workTypeRemote}
                  onChange={(e) => {
                    setworkTypeRemote(e.target.checked)
                  }}
                />
                <Field
                  label="Hybrid"
                  type="checkbox"
                  name="work_type"
                  checked={workTypeHybrid}
                  onChange={(e) => {
                    setworkTypeHybrid(e.target.checked)
                  }}
                />
              </div>
            </div>
            <div>
              <div onClick={() => setSalaryRangeCollapse(!salaryRangeCollapse)}>
                <p>Salary Range</p>
                <Icon icon={salaryRangeCollapse ? 'expand_more' : 'expand_less'} size={20} />
              </div>
              <div className={salaryRangeCollapse ? 'collapse' : ''}>
                <p>
                  {salaryRangeMin.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumSignificantDigits: 3,
                  })}
                  &nbsp;-&nbsp;
                  {salaryRangeMax.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumSignificantDigits: 3,
                  })}
                </p>
                <MultiRange
                  min={salaryMin}
                  max={salaryMax}
                  onChange={({min, max}) => {
                    setSalaryRangeMin(min)
                    setSalaryRangeMax(max)
                  }}
                />
              </div>
            </div>
            <Button onClick={() => {}}>Apply</Button>
          </div>
        </aside>
        <div>
          <div>
            <Field label="Sort by" type="select" selectOption={['Most relevant']} onChange={() => {}} />
          </div>
          <div>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
            <article>
              <div>
                <div>
                  <img src={talent_insider} alt="img" />
                  <div>
                    <p>Full Stack Developer</p>
                    <div>
                      <p>Talent Insider</p>
                      <Icon icon="verified_user" size={16} color="#296ce6" />
                    </div>
                  </div>
                </div>
                <Button onClick={() => {}}>
                  <Icon icon="bookmark_border" color="#010e80" />
                </Button>
              </div>
              <ul>
                <li>Full time</li>
                <li>1-2 years</li>
                <li>IDR 5M-7M</li>
              </ul>
              <div>
                <div>
                  <Icon icon="place" size={16} color="#e30607" />
                  <p>Indonesia</p>
                </div>
                <div>
                  <p>On-site</p>
                  <div>
                    <Icon icon="schedule" size={16} color="rgba(0,0,0,.625)" />
                    <p>3d</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => {}}>Easy Apply</Button>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}

import React, { useState } from 'react';
import styles from '../styles/pages/Forms.module.css';

const Signup = () => {
  const technologies = [
    'C',
    'CPP',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'DevOps',
    'Django',
    'Wordpress',
    'Cloud',
    'AWS',
    'Azure',
  ];

  const [activeWizard, setActiveWizard] = useState('1');

  const [openDropdown, setOpenDropdown] = useState(false);
  const [technology, setTechnology] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [accountType, setAccounType] = useState('Developer');

  const [skills, setSkills] = useState([]);

  const handleAccountTypeChange = (e) => {
    setAccounType(e.target.value);
  };

  const handleChangeWizard = (wizardNumber) => {
    setActiveWizard(wizardNumber);
  };

  return (
    <div id={styles.formContainer}>
      <div className={styles.heroSection}>
        <h3>Create your account.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          modi! Dolorem sequi quia fuga nulla.
        </p>
        <img src="/images/create_profile.svg" alt="create_profile" />
      </div>

      <div className={styles.profileForm}>
        <div className={styles.wizard}>
          <div
            className={
              activeWizard === '1'
                ? `${styles.wizardItem} ${styles.activeWizard}`
                : `${styles.wizardItem}`
            }
            onClick={() => handleChangeWizard('1')}
          >
            <i
              className={`fa-solid fa-user ${
                activeWizard === '1' && styles.activeWizardItem
              }`}
            ></i>
          </div>
          <div className={styles.line}></div>
          <div
            className={
              activeWizard === '2'
                ? `${styles.wizardItem} ${styles.activeWizard}`
                : `${styles.wizardItem}`
            }
            onClick={() => handleChangeWizard('2')}
          >
            <i
              className={`fa-solid fa-wrench ${
                activeWizard === '2' && styles.activeWizardItem
              }`}
            ></i>
          </div>
          <div className={styles.line}></div>
          <div
            className={
              activeWizard === '3'
                ? `${styles.wizardItem} ${styles.activeWizard}`
                : `${styles.wizardItem}`
            }
            onClick={() => handleChangeWizard('3')}
          >
            <i
              className={`fa-solid fa-share-nodes ${
                activeWizard === '3' && styles.activeWizardItem
              }`}
            ></i>
          </div>
        </div>

        <div className={styles.form}>
          {/* Section 1 */}
          <div
            className={styles.profilePicker}
            style={
              activeWizard === '1' ? { display: 'flex' } : { display: 'none' }
            }
          >
            <img src="/images/profile_picker.svg" alt="profile_picker" />

            <input
              type="file"
              name="image-picker"
              id="picker"
              accept="image/*"
            />
            <label htmlFor="picker">Upload Profile Picture</label>
          </div>

          <div
            className={styles.section}
            style={
              activeWizard === '1' ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className={styles.divider}>
              <div></div>
              <h4>Personal Details</h4>
              <div></div>
            </div>

            <div className={styles.field}>
              <p>Name *</p>
              <input type="text" placeholder="Name" />
            </div>

            <div className={styles.row1}>
              <div className={styles.field}>
                <p>Gender *</p>
                <span>
                  Male
                  <input type="radio" value="Male" name="gender" />
                </span>
                <span>
                  Female
                  <input type="radio" value="Female" name="gender" />
                </span>
              </div>

              <div className={styles.field}>
                <p>Select account type *</p>
                <select onChange={(e) => handleAccountTypeChange(e)}>
                  <option value="Developer">Developer</option>
                  <option value="Recruiter">Recruiter</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <p>Personal email *</p>
              <input type="email" placeholder="Personal email" />
            </div>

            <div className={styles.field}>
              <p>Contact number *</p>
              <input type="text" placeholder="Contact number" />
            </div>
            <button>Next</button>
          </div>

          {/* Section 2 */}
          <div
            className={styles.section}
            style={
              activeWizard === '2' ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className={styles.divider}>
              <div></div>
              <h4>Skills and Experience</h4>
              <div></div>
            </div>
            <div className={styles.field}>
              <p>Write something about you</p>
              <textarea type="text" rows={4} placeholder="About yourself" />
            </div>
            <div className={styles.field}>
              <p>Select Skills *</p>
              <div className={styles.skills}>
                {skills.length > 0
                  ? skills.map((skill) => (
                      <span key={skill} id={skill}>
                        {skill}
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => {
                            skills.splice(skills.indexOf(skill), 1);
                            document.getElementById(skill).remove();
                            console.log(skills);
                          }}
                        ></i>
                      </span>
                    ))
                  : (document.getElementsByClassName('skills').textContent =
                      'Ex. C, Java, AWS (Max 10)')}
                <i
                  className="fa-solid fa-chevron-down"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  style={{
                    position: 'absolute',
                    right: 6,
                    cursor: 'pointer',
                  }}
                ></i>
              </div>
            </div>

            <div
              className={
                openDropdown
                  ? `${styles.dropdownScrollView} ${styles.show}`
                  : `${styles.dropdownScrollView}`
              }
            >
              <div className={styles.dropdownContent}>
                <input
                  type="text"
                  placeholder="Type to search"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
                {technologies
                  .filter((tech) =>
                    tech.toLowerCase().includes(technology?.toLowerCase())
                  )
                  .map((technology) => (
                    <span
                      key={technology}
                      onClick={() => {
                        if (!skills.includes(technology)) {
                          setSkills((skills) => [...skills, technology]);
                        }
                      }}
                    >
                      {technology}
                    </span>
                  ))}
              </div>
            </div>
            <button>Back</button>
            <button style={{ marginTop: '15px' }}>Next</button>
          </div>

          {/* Section 3 */}
          <div
            className={styles.section}
            style={
              activeWizard === '3' ? { display: 'block' } : { display: 'none' }
            }
          >
            <div className={styles.divider}>
              <div></div>
              <h4>Social Links</h4>
              <div></div>
            </div>

            <div className={styles.socialLinks}>
              <div className={styles.linkRow1}>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-github"></i>
                    <p>Github</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
              </div>
              <div className={styles.linkRow2}>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-twitter"></i>
                    <p>Twitter</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-solid fa-link"></i>
                    <p>Portfolio</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
              </div>
              <div className={styles.field}>
                <p>Password *</p>
                <div className={styles.password}>
                  <input
                    type={showPassword ? `text` : `password`}
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <i
                      class="fa-solid fa-eye-slash"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-eye"
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  )}
                </div>
              </div>
              <button>Back</button>
              <button style={{ marginTop: '15px' }}>Signup</button>
            </div>
          </div>
        </div>
        <div
          className={styles.bottom}
          style={
            activeWizard === '1' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <span>
            Already have an account! <a href="/login">Click here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

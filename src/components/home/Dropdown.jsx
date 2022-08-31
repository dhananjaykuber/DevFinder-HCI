import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/pages/Home.module.css';

const Dropdown = () => {
  const inputRef = useRef();

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

  const [openDropdown, setOpenDropdown] = useState(false);

  const [technology, setTechnology] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const setEmpty = () => {
    setTechnology('');
  };

  const handleOpenDropdown = () => {
    setEmpty();
    setOpenDropdown(!openDropdown);
    inputRef.current.focus();
  };

  return (
    <div className={styles.dropdownContainer}>
      <h2>
        Search Developers <br /> By Their <span>Skills</span>
      </h2>
      <div className={styles.dropdown}>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownHeading} onClick={handleOpenDropdown}>
            <div>
              <h4>Skill</h4>
              <p>Which skill you are looking for?</p>
            </div>
            {openDropdown ? (
              <i
                className="fa-solid fa-angle-up"
                style={{ fontSize: '12px' }}
                onClick={() => setOpenDropdown(!openDropdown)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: '12px' }}
                onClick={handleOpenDropdown}
              ></i>
            )}
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
                ref={inputRef}
                placeholder="Type skill to search"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
              />
              {technologies
                .filter((tech) =>
                  tech.toLowerCase().includes(technology.toLowerCase())
                )
                .map((tech) => (
                  <span key={tech} onClick={() => setTechnology(tech)}>
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <button className={styles.search}>
          Search
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ marginLeft: '10px', fontSize: '12px' }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;

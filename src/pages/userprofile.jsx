// @ /profile

import React from 'react';
import Project from '../components/profile/Project';
import styles from '../styles/pages/Profile.module.css';

const userprofile = () => {
  const data = {
    image:
      'https://www.teahub.io/photos/full/46-464490_rohit-sharma-hd-wallpaper-rohit-sharma-digital-painting.jpg',
    name: 'Dhananjay Kuber',
    bio: 'Web Developer | React Native Developer | Cloud Engineer',
    branch: 'Information Technology',
    email: 'dnkuber2002@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/in/dhananjay-kuber-778a2b200/',
      github: 'https://www.github.com/dhananjaykuber',
      twitter: 'https://twitter.com/dhananjaykuber_',
      portfolio: 'https://dhananjaykuber.netlify.app/',
    },
    skills: [
      {
        skill_id: '1',
        skill_title: 'Python',
      },
      {
        skill_id: '2',
        skill_title: 'JS',
      },
      {
        skill_id: '3',
        skill_title: 'Databases',
      },
    ],
    student: false,
    projects: [
      {
        title: 'Wordle Clone',
        githubRepo: 'https://github.com/dhananjaykuber/wordle-clone',
        deployedLink: 'https://wordle-clone-app.vercel.app/',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo consequuntur molestiae molestias aperiam enim? Laboriosam blanditiis eaque temporibus, saepe libero itaque perspiciatis! Recusandae repellendus reiciendis deleniti labore officiis repellat tempora!',
        technologies: ['Javascript', 'HTML', 'Django'],
      },
      {
        title: 'ChatBae',
        githubRepo: 'https://github.com/dhananjaykuber/ChatBae',
        deployedLink: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo consequuntur molestiae molestias aperiam enim? Laboriosam blanditiis eaque temporibus, saepe libero itaque perspiciatis! Recusandae repellendus reiciendis deleniti labore officiis repellat tempora!',
        technologies: ['React Native', 'Firebase', 'Javascript'],
      },
    ],
    companyName: 'Accenture',
    position: 'Junior Cloud Engineer',
    city: 'Pune',
    experience: '3 years',
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.personalInformationEdit}>
          <i class="fa-solid fa-pencil"></i>
        </div>

        <div className={styles.personalInformation}>
          <img src={data.image} alt={`${data.name}_profile`} />
          <div className={styles.informationContainer}>
            <div className={styles.information}>
              <h1>{data.name}</h1>
              <h4>
                {data.branch} | {data.student ? 'Student' : 'Alumni'}
              </h4>
              <p>{data.bio}</p>

              <div className={styles.socials}>
                {data.socials?.linkedin && (
                  <a
                    href={data.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                )}

                {data.socials?.github && (
                  <a
                    href={data.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}

                {data.socials?.twitter && (
                  <a
                    href={data.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                )}

                {data.socials?.portfolio && (
                  <a
                    href={data.socials.portfolio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-link"></i>
                  </a>
                )}
              </div>
              <button>
                <a href={`mailto:${data.email}`}>
                  Email &nbsp;
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <div></div>
          <h6>Skills and Projects</h6>
          <div></div>
        </div>
        <div className={styles.skillProject}>
          <div className={styles.skillEdit}>
            <i class="fa-solid fa-pencil"></i>
          </div>
          <h2>My Skills</h2>
          <div className={styles.skills}>
            {data.skills.map((skill) => (
              <strong key={skill.skill_id}>{skill.skill_title}</strong>
            ))}
          </div>

          <div className={styles.primeProjects}>
            <h2>Prime Projects</h2>
            <div className={styles.projectEdit}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>

          <div className={styles.projects}>
            {data.projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </div>

        {!data.student && (
          <>
            <div className={styles.header}>
              <div></div>
              <h6>Industrial Experience</h6>
              <div></div>
            </div>
            <div className={styles.workExperience}>
              <i class="fa-solid fa-building"></i>
              <div className={styles.workInformation}>
                <h3>{data.position}</h3>
                <h4>
                  <strong>at</strong> {data.companyName}
                </h4>
                <h5>{data.city}</h5>
                <h6>{data.experience} of experience</h6>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default userprofile;

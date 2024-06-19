import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
import news from '../../assets/news.png';
import currencyconvertor from '../../assets/currency.jpeg';
import age from '../../assets/age.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/akarshtech88/weather-app"
          h3="weather"
          p="Weather App"
        />
        <ProjectCard
          src={news}
          link="https://github.com/akarshtech88/News-app"
          h3="News"
          p="News App"
        />
        <ProjectCard
          src={currencyconvertor}
          link="https://github.com/akarshtech88/frontend-javascript-project/tree/main/currencyconvertor"
          h3="currency"
          p="Currency Convertor App"
        />
        <ProjectCard
          src={age}
          link="https://github.com/akarshtech88/frontend-javascript-project/tree/main/Age%20calculator"
          h3="Age"
          p="Age Calculator"
        />
      </div>
    </section>
  );
}

export default Projects;


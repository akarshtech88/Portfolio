import React from 'react'
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';

import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
   <div className={styles.skillList}>
     <SkillList src={checkMarkIcon} skill="HTML"/>
     <SkillList src={checkMarkIcon} skill="CSS"/>
     <SkillList src={checkMarkIcon} skill="JavaScript"/>
     <SkillList src={checkMarkIcon} skill="jquery"/>
     <SkillList src={checkMarkIcon} skill="React"/>
      
   </div>
   <hr/>
   <div className={styles.skillList}>
     <SkillList src={checkMarkIcon} skill="Redux"/>
     <SkillList src={checkMarkIcon} skill="Bootstrap"/>
     <SkillList src={checkMarkIcon} skill="Git"/>
     <SkillList src={checkMarkIcon} skill="Api"/>
     <SkillList src={checkMarkIcon} skill="Webpacks"/>
     </div>
    </section>


    
  )
}

export default Skills
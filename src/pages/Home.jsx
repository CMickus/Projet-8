import React from 'react';
import '../index.css';
import contentlist from '../content.json';
import Skill from '../components/Skill';
import SimpleContent from '../components/Simplecontent';
import style from './Home.module.css'

export function Home(){
    console.log(contentlist.fr.skills)
    return(
        <>
        <div className={style.explanation}>
            <h1 className={style.explatitle}>{contentlist.fr.content.title}</h1>
            <p>{contentlist.fr.content.text}</p>
            <p>{contentlist.fr.content.bonus}</p>
        </div>
        <div className={style.bloclists}>
            <div>
                <h2>Skill techniques</h2>
            {contentlist.fr.skills.map((elem) =>
            <Skill props={elem}/>)}
            </div>
            <div>
                <h2>Skill linguistique</h2>
            {contentlist.fr.langskills.map((elem) =>
            <Skill props={elem}/>)}
            </div>
        </div>
        <div>
            {contentlist.fr.diplomes.map((elem) =>
            <SimpleContent props={elem}/>)}
        </div>
        <div>
            {contentlist.fr.experiance.map((elem) =>
            <SimpleContent props={elem}/>)}
        </div>
        </>
    )
}

export default Home
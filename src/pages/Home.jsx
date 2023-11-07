import React from 'react';
import '../index.css';
import contentlist from '../content.json';
import Skill from '../components/Skill';
import SimpleContent from '../components/Simplecontent';
import style from './Home.module.css'

export function Home(){
    console.log(contentlist.fr.skills)
    const langParam = fr
    if (URLSearchParams.has(en)){
        langParam = en
    }
    return(
        <>
        <Slideshow prop={contentlist.screenshots}/>
        <div className={style.explanation}>
            <h1 className={style.explatitle}>{contentlist.${langParam}.content.title}</h1>
            <p>{contentlist.${langParam}.content.text}</p>
            <p>{contentlist.${langParam}.content.bonus}</p>
        </div>
        <div className={style.bloclists}>
            <div>
                <h2>Skill techniques</h2>
            {contentlist.${langParam}.skills.map((elem) =>
            <Skill props={elem}/>)}
            </div>
            <div>
                <h2>Skill linguistique</h2>
            {contentlist.${langParam}.langskills.map((elem) =>
            <Skill props={elem}/>)}
            </div>
        </div>
        <div>
            {contentlist.${langParam}.diplomes.map((elem) =>
            <SimpleContent props={elem}/>)}
        </div>
        <div>
            {contentlist.${langParam}.experiance.map((elem) =>
            <SimpleContent props={elem}/>)}
        </div>
        <div>
            {contentlist.${langParam}.skills.map((elem) =>
            <HiddenText info={elem.props.infos} fixe={elem.props.skill}/>)}
            {contentlist.langParam.langskillsskills.map((elem) =>
            <HiddenText info={elem.props.infos} fixe={elem.props.skill}/>)}
        </div>
        </>
    )
}

export default Home
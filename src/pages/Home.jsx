import React from 'react';
import '../index.css';
import contentlist from '../content.json';
import Skill from '../components/Skill';
import SimpleContent from '../components/Simplecontent';
import style from './Home.module.css';
import HiddenText from '../components/HiddenText';
import Slideshow from '../components/Slideshow';

export function Home() {
    console.log(contentlist.fr.skills)
    /*const langParam = 'fr'
    if (URLSearchParams.has(en)){
        langParam = 'en'
    }*/
    /*<Slideshow prop={contentlist.screenshots}/>*/
    return (
        <>
            <Slideshow/>
            <div className={style.explanation}>
                <h1 className={style.explatitle}>{contentlist.fr.content.title}</h1>
                <p>{contentlist.fr.content.text}</p>
                <p>{contentlist.fr.content.bonus}</p>
            </div>
            <div className={style.bloclists}>
                <div >
                    <h2>Skill techniques</h2>
                    {contentlist.fr.skills.map((elem) =>
                        <Skill props={elem} />)}
                </div>
                <div>
                    <h2>Skill linguistique</h2>
                    {contentlist.fr.langskills.map((elem) =>
                        <Skill props={elem} />)}
                </div>
            </div>
            <div className={style.simpleBloc}>
                <div className={style.simpleContent}>
                    {contentlist.fr.diplomes.map((elem) =>
                        <SimpleContent props={elem} />)}
                </div>
                <div className={style.simpleContent}>
                    {contentlist.fr.experiance.map((elem) =>
                        <SimpleContent props={elem} />)}
                </div>
            </div>
            <div className={style.hiddenTextSt}>
                {contentlist.fr.skills.map((elem) =>
                    <HiddenText info={elem.infos} fixe={elem.skill} className={style.hiddenTextNd} />)}
                {contentlist.fr.langskills.map((elem) =>
                    <HiddenText info={elem.infos} fixe={elem.skill} className={style.hiddenTextNd} />)}
            </div>
        </>
    )
}

export default Home
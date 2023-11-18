import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import contentlist from '../content.json';
import Skill from '../components/Skill';
import SimpleContent from '../components/Simplecontent';
import style from './Home.module.css';
import HiddenText from '../components/HiddenText';
import Slideshow from '../components/Slideshow';

export function Home() {
    const { lang } = useParams();
    let langParam = lang || 'fr'
    console.log(lang, langParam);
    let contentListLang = contentlist.fr
    if (langParam === 'en') {
        contentListLang = contentlist.en
    }
    return (
        <>
            <div className={style.explanation}>
                <h1 className={style.explatitle}>{contentListLang.content.title}</h1>
                
                    <p className={style.explatext}>{contentListLang.content.text}</p>
                    <p className={style.explatext}>{contentListLang.content.bonus}</p>
                
            </div>
            <div className={style.bloclists}>
                <div >
                    <h2>Skill techniques</h2>
                    {contentListLang.skills.map((elem) =>
                        <Skill props={elem} />)}
                </div>
                <div>
                    <h2>Skill linguistique</h2>
                    {contentListLang.langskills.map((elem) =>
                        <Skill props={elem} />)}
                </div>
            </div>
            <div className={style.simpleBloc}>
                <div className={style.simpleContent}>
                    {contentListLang.diplomes.map((elem) =>
                        <SimpleContent props={elem} />)}
                </div>
                <div className={style.simpleContent}>
                    {contentListLang.experiance.map((elem) =>
                        <SimpleContent props={elem} />)}
                </div>
            </div>
            <div className={style.hiddenTextSt}>
                {contentListLang.skills.map((elem) =>
                    <HiddenText info={elem.infos} fixe={elem.skill} className={style.hiddenTextNd} />)}
                {contentListLang.langskills.map((elem) =>
                    <HiddenText info={elem.infos} fixe={elem.skill} className={style.hiddenTextNd} />)}
            </div>
            <div>
                <h2>Projet précédents</h2>
                <Slideshow />
            </div>
        </>
    )
}

export default Home
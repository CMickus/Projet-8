import React from 'react';
import '../index.css';
import contentlist from '../content.json';
import Skill from '../components/Skill';
import SimpleContent from '../components/Simplecontent';

export function Home(){
    console.log(contentlist.fr.skills)
    return(
        <>
        <div>
            <h1>{contentlist.fr.content.title}</h1>
            <p>{contentlist.fr.content.text}</p>
            <p>{contentlist.fr.content.bonus}</p>
        </div>
        <div>
            {contentlist.fr.skills.map((elem) =>
            <Skill props={elem}/>)}
        </div>
        <div>
            {contentlist.fr.langskills.map((elem) =>
            <Skill props={elem}/>)}
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
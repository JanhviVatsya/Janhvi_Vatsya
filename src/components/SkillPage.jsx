import React from 'react';
import Skill1 from '../assets/FrontEnd.png';
import Skill2 from '../assets/BackEnd.png';
import Skill3 from '../assets/ProblemSolving.png';
import Skill4 from '../assets/VersionControl.png';

const SkillPage = () => {
  const skillsData = [
    { name: 'Front End', icon: Skill1 , description: 'HTML, CSS, Javascript, Reactjs, Tailwind CSS, Bootstrap'},
    { name: 'Back End', icon: Skill2 , description: 'NodeJs, Express, Database, MySQL, MongoDB, Redis'},
    { name: 'Problem Solving', icon: Skill3 , description: 'Data Structures, Algorithms, System Design'},
    { name: 'Version Control', icon: Skill4 , description: 'Git, Github'}
  ];

  return (
    <section className="p-10 bg-slate-800 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white text-center font-playFair">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-blend-overlay">
            <span className="text-6xl mb-4">
              <img src={skill.icon} alt={skill.name} className="w-40 h-40 object-contain" />
            </span>
            <h3 className="text-xl font-lato text-white font-semibold">{skill.name}</h3>
            <p className='font-lato text-gray-400 text-center'>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;

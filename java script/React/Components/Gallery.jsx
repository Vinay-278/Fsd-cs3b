import React from 'react'
import Profile from './Profile'

const student = [
  {
    myname: "Vinay Kumar",
    branch: "CSE",
    section: "B",
    college: "ABES",
  },
  { myname: "Vinay Kumar",
    branch: "CS",
    section: "B",
    college: "ABES"
  },
  { myname: "Vinay Kumar",
    branch: "EN",
    section: "B",
    college: "ABES"
  },
];

const Gallery = () => {
  return (
    <div className='box'>
      {
        student.map((ele,index)=>{
          return <Profile data={ele} key={index} />;
        })
      }
    </div>
  );
}

export default Gallery

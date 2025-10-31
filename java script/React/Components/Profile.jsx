import React from 'react'

const Profile = ({data}) => {
  return (
    <div className="Parent">
      <h1>Profile Page</h1>
      <h3>Name: {data.myname}</h3>
      <h3>Branch: {data.branch}</h3>
      <h3>Section: {data.section}</h3>
      <h3>College: {data.college}</h3>
    </div>
  );
}

export default Profile

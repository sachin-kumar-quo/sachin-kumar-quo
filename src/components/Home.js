import React from 'react'
import UserList from './UserList';
import Heading from './Heading';

const Home = () => {
  return (
    <div>
      <h1>{process.env.REACT_APP_NOT_A_SECRET}</h1>
      <Heading />
      <UserList />
    </div>
  )
}

export default Home

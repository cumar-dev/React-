import React from 'react'

const UserCard = ({ name, age, country }) => {
  return (
    <>
      <p>Hello my name is {name}</p>
      <p>My age is {age}</p>
      <p>my country is {country}</p>
    </>
  )
}
export default UserCard;
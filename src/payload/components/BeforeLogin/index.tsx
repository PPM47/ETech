import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
       
        <a href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>
        <br/>log in to the site instead</a>
       
      </p>
    </div>
  )
}

export default BeforeLogin

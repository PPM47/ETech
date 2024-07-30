import React from 'react'
import './index.scss'

const BeforeLogin: React.FC = () => {
  return (
    <div className="logincon">
    
        <p className="welcometext">Welcome to your dashboard!</p>
        <div className="clientsitediv">
        <a className="clientsitelink" href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>
          log in to the site instead
        </a>
        </div>
        
    
    </div>
  )
}

export default BeforeLogin

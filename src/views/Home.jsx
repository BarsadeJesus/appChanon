import React from 'react'
import Menu from '../components/Menu';
import Chat from '../components/Chat'
import '../css/Home.css'

const Home = () =>{
  return (
      <div className="home-view">
        <div className="home-view__side-left" >
          <div className="home-view-menu">
            <Menu />
          </div>
        </div>
        <div className="home-view__side-right">
          <Chat />
        </div>
      </div>
  )
}
export default Home
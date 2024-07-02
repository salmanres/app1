import React, { Fragment } from 'react'
import HomePage from './HomePage';
import NavbarH from '../auth/NavbarH';
import { Link, Outlet } from 'react-router-dom'
import { GrYoga } from "react-icons/gr";
import { IoFitnessOutline } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { MdSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";
import { IoGitNetworkOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { RiGuideLine } from "react-icons/ri";



function MainPage() {
  return (
    <Fragment>
      <div className='container-fluid maincontainer'>
        <div className='row'>
          <div className='col-sm-12 col-12'>
            <NavbarH/>
          </div>
        </div>
      </div>
      <div className='container-fluid contentarea'>
        <div className='row mainsidebar'>
          <div className='col-sm-2 col-2 bg-light border'>
            <ul className='sidebarmenu mt-3'>
              <li><Link to={"HomePage"}><IoMdFitness /> HOMEPAGE</Link></li>
              <li><Link to={"HomePage2"}><IoMdFitness /> HOMEPAGE 2</Link></li>
              <li><Link to={"Axios"}><IoFitnessOutline /> AXIOS</Link></li>
              <li><Link to={"NewsApi"}><GrYoga /> NewsAPI</Link></li>
              <li><Link to={"Charts"}><MdSportsGymnastics /> CHARTS</Link></li>
              <li><Link to={"Validation"}><CiMedicalCross /> VALIDATION</Link></li>
              <li><Link to={"/"}><IoGitNetworkOutline /> THEME CHANGE</Link></li>
              <li><Link to={"/"}>FILTER & SEARCH </Link></li>
              <li><Link to={"/"}><RiGuideLine /> COMMUNITY</Link></li>
            </ul>
          </div>
          <div className='col-sm-10 col-10 bg-light '>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MainPage
import React, { Fragment } from 'react'
import HomePage from './HomePage';
import NavbarH from '../auth/NavbarH';
import { Link, Outlet } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdOutlineDownloading } from "react-icons/md";
import { VscListFilter } from "react-icons/vsc";
import { RiGuideLine } from "react-icons/ri";
import { MdMovieEdit } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { CiViewTable } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { RiPassValidLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";


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
              <li><Link to={"HomePage"}><MdMovieEdit className='iconclass' /> MOVIE API</Link></li>
              <li><Link to={"HomePage2"}><GoHome className='iconclass' /> HOMEPAGE 2</Link></li>
              <li><Link to={"Axios"}><CiViewTable className='iconclass' /> AXIOS</Link></li>
              <li><Link to={"NewsApi"}><IoNewspaperOutline className='iconclass' /> NEWS API</Link></li>
              <li><Link to={"Charts"}><FaRegChartBar className='iconclass' /> CHARTS</Link></li>
              <li><Link to={"Validation"}><RiPassValidLine className='iconclass' /> VALIDATION</Link></li>
              <li><Link to={"LazyLoading"}><MdOutlineDownloading className='iconclass'/> LAZY LOADING</Link></li>
              <li><Link to={"ReduxPage"}><TbBrandRedux className='iconclass'/> REDUX PAGE</Link></li>
              <li><Link to={"FoodCart"}><PiShoppingCartSimpleBold className='iconclass'/> FOOD CART</Link></li>
              <li><Link to={"Filter"}><VscListFilter className='iconclass'/> FILTER & SEARCH </Link></li>
              <li><Link to={"VinayakAssociates"}><RiGuideLine  className='iconclass'/> RTO DATA</Link></li>
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
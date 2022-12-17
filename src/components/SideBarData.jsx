// this file have the data to create items on the menu bar using a map()

import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as GrIcons from 'react-icons/gr'
import './css/menu-down.css'
export const SideBarData=[
  {
    address:'#hero',
    icon:<FaIcons.FaHome/>,
    name:'Home',
    cName:'nav-text',
  },
  {
    address:'#about-anchor',
    icon:<BsIcons.BsPersonSquare/>,
    name:'About',
    cName:'nav-text',
  },
  {
    address:'#projects',
    icon:<GrIcons.GrProjects  />,
    name:'Projects',
    cName:'nav-text',
  },
  {
    address:'#contact',
    icon:<GrIcons.GrContact/>,
    name:'Contact',
    cName:'nav-text',
  },

]


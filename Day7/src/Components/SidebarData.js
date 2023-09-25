import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reserved list',
    path: '/revlist',
    icon: <BiIcons.BiListCheck />,
    cName: 'nav-text'
  },
 
];
import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reserved list',
    path: '/reservelist',
    icon: <BiIcons.BiListCheck />,
    cName: 'nav-text'
  },
  {
    title: 'Maintainance',
    path: '/servicelist',
    icon: <MdIcons.MdCleaningServices />,
    cName: 'nav-text'
  },
  {
    title: 'Payment Status',
    path: '/payment',
    icon: <TbIcons.TbReportMoney />,
    cName: 'nav-text'
  }
];
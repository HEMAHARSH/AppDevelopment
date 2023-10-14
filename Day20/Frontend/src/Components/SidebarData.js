import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as Fa6Icons from "react-icons/fa6";
import * as TbIcons from "react-icons/tb";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Billing Status',
    path: '/billstatus',
    icon: <BiIcons.BiListCheck />,
    cName: 'nav-text'
  },
  {
    title:'Payment Status',
    path: '/paymentstatus',
    icon: <Fa6Icons.FaMoneyBillTrendUp/>,
    cName:'nav-text'
  },
 
];
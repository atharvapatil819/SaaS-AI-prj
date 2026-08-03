import { useClerk, useUser } from '@clerk/react'
import { Eraser, FileText, Hash, House, Scissors, SquarePen,Image, User } from 'lucide-react';
import React from 'react' 
import { NavLink } from 'react-router-dom';

const navitems = [
    {to: '/ai',label: 'Dashboard',Icon: House},
    {to: '/ai/WriteArticles',label: 'Write Articles',Icon: SquarePen},
    {to: '/ai/BlogTitles',label: 'Blog Titles',Icon: Hash},
    {to: '/ai/genrateimages',label: 'GenrateImages',Icon:Image },
    {to: '/ai/removebackground',label: 'RemoveBackground',Icon: Eraser},
    {to: '/ai/removeobjects',label: 'RemoveObjects',Icon: Scissors},
    {to: '/ai/reviewresume',label: 'ReviewResume',Icon: FileText},
    {to: '/ai/community',label: 'Community',Icon: User},
]

const Sidebar = ({sidebar,setSidebar}) => { 
    const{user} =useUser();
    const{signOut,openUserProfile} = useClerk();
  return ( 
    
    <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' :'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
        <div className='my-7 w-full'>
            <img src={user.imageUrl} alt='' className='w-14 rounded-full mx-auto' /> 
            <h1 className='mt-1 text-center'>{user.fullName}</h1> 
            <div>
                {navitems.map(({to,label,Icon})=>(
                     <NavLink key={to} to={to} end={to ==='/ai'} onClick={()=> setSidebar(false)} className={({isActive}) =>`px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ?'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' :""}`}>
                        {({isActive})=>(
                            <>
                            <Icon className={`w-4 ${isActive ? 'text-white' :''}`} />
                            {label}
                            </>
                        )}
                     </NavLink>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
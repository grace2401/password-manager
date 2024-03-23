import React from 'react'

const NavBar = () => {
  return (
    <nav className='text-white bg-slate-800'>
      <div className="flex items-center justify-between px-4 py-5 h-14 mycontainer">

        <div className="text-2xl font-bold logo">
         
          <span className='text-green-500'> &lt;</span>
          
          Forti<span className='text-green-500 '>Key/&gt;</span>
          
          </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a href="/" className='hover:font-bold'>Home</a>
            <a href="#" className='hover:font-bold'>About</a>
            <a href="#" className='hover:font-bold'>Contact</a>
            
          </li>
        </ul>
         */}
      </div>
      
    </nav>
  )
}

export default NavBar

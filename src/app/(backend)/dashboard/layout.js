import React from 'react'
import Nav from '@/app/components/backend/Nav';
import Sidebar from '@/app/components/backend/Sidebar';
export default function Layout({childern}) {
    return (
      <div className='flex justify-between space-x-1'>
              <Sidebar />      
            <div className='w-full text-xl-3'>
              <Nav />
                <main>
                    {childern}
                </main>
            </div>



      </div>
    );
  }
  
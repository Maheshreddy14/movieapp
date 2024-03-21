import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Sidenav = () => {


    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10">
            <h1 className='text-2xl text-white font-bold'>
            < i className="text-[#6556CD] ri-tv-fill text-2xl"></i>
            <span>MovieApp</span>
            </h1>
            <nav className='text-zinc-400 text-xl flex flex-col'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-4'>
                    New feeds
                </h1>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i className="ri-fire-fill"></i>Trending</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-sparkling-2-fill"></i>Popular</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-movie-2-fill"></i>Movies</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-slideshow-4-fill"></i>Tv Shows</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-team-fill"></i>People</Link>
            </nav>
            <hr className='border-none h-[1px] bg-zinc-400'/>
            <nav className='text-zinc-400 text-xl flex flex-col'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    Website Info
                </h1>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-information-2-fill"></i>About</Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                <i className="mr-1 ri-phone-fill"></i>Contact</Link>
                
            </nav>
        </div>
    );
}

export default Sidenav;




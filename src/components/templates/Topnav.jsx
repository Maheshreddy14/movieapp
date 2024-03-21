import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import noimage from "/noimage.jpg";

const Topnav = () => {
    const [query,setquery]=useState("")
    const [searches,setsearches]=useState([]);

    const GetSearches=async()=>{
        try{
            const {data}=await axios.get(`/search/multi?query=${query}`)
            setsearches(data.results)
        }
        catch(error){
            console.log("Error",error)
        }
    }

    useEffect(()=>{
        GetSearches();
    },[query])
    return (
        <div className='w-[80%] h-[10vh] relative flex justify-start items-center m-20'>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input 
        onChange={(e)=>setquery(e.target.value)}
        value={query}
        type="text" 
        placeholder='search for movies' 
        className='w-[50%] text-zinc-300 text-xl outline-none border-none bg-transparent mx-10 p-3' />
        {query.length>0 &&
        (<i onClick={()=>setquery("")}className="text-zinc-400 text-3xl ri-close-fill"></i>)}

        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto border-radius-md'>
            {searches.map((s,i)=>(
                <Link className='hover:text-black text-zinc-600 hover:bg-zinc-300 w-[100%] p-5 flex
                justify-start items-center border-b-2 border-zinc-100 '>
                   <img className='w-[10vh] h-[10vh object-cover rounded mr-5 shadow-lg'
                   src={
                    s.backdrop_path|| s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path|| s.profile_path}`:noimage} 
                   alt="" />
                   <span>
                    {s.title||
                   s.original_title||
                   s.original_name}
                   </span>
               </Link>
            ))}
            
            
        </div>

        </div>
    );
}

export default Topnav;

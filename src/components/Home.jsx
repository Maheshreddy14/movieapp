import { useEffect,useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";

const Home=()=>{
    document.title="Movie app|Home page"

    const [wallpaper, setwallpaper] = useState(null);
    
    const GetHeaderwallpaper=async()=>{
        try{
            const {data}=await axios.get(`/trending/all/day`)
            let randData =data.results[(Math.random()*data.results.length).toFixed()]
            setwallpaper(randData)
        }
        catch(error){
            console.log("Error",error)
        }
    }
    useEffect(()=>{
        !wallpaper && GetHeaderwallpaper()
    },[])
    return wallpaper?(
    <>
        <Sidenav/>
        <div className="w-[80%] h-full">
        <Topnav/>
        <Header data={wallpaper}/>
        </div>
        
    </>):<h1 className="text-zinc-300 text-xl">Loading...</h1>
} 

export default Home;
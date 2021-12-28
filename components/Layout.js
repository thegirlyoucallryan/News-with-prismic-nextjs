import Link from "next/link";
import { GiAstronautHelmet, GiSoundWaves} from "react-icons/gi";
import { FiSearch} from "react-icons/fi";
import {AiOutlineBell, AiOutlineUser} from 'react-icons/ai'
import {TiSocialFacebook, TiSocialYoutube,TiSocialTwitter,TiSocialLinkedin } from 'react-icons/ti'


export default function layout({children}){
    return(
        <div>
        <div className="px-.5 md:px-24 bg-black text-white flex justify-between h-20">
            <Link href="/">
                <a className="text-white uppercase text-2xl flex align-baseline px-1 my-auto tracking-wider font-thin"> 
                    <GiSoundWaves className="text-4xl text text-slate-400"></GiSoundWaves>&nbsp;Station 23</a>
                    
            </Link>

        <div className="flex items-center w-1/3 text-2xl">
            <input type="text" className="bg-transparent border w-full rounded-md border-slate-400 outline-none focus:bg-slate-700 focus:border-none px-3"/>
            <FiSearch className="-ml-9 text-2xl text-slate-400  hover:text-red-600 cursor-pointer my-3"/>
        </div>

        <div className="flex items-center text-white-400">
            <div className="cursor-pointer flex space-x-1 text-2xl">
            <AiOutlineBell className="mr-2 hover:text-red-600" />
            <AiOutlineUser className=" hover:text-red-600" />
            </div>

        

        </div>

       

        </div>
        <div className="px-2 md:px-24 bg-white flex border-b border-black shadow-2xl">
            <Link href="/"><a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent border-t-2 border-t-transparent hover:text-slate-400  hover:border-t-slate-200 focus:text-sky-600">Home</a></Link>
            <Link href="/business"><a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent border-t-2 border-t-transparent hover:text-slate-400  hover:border-t-slate-200 focus:text-sky-600">Business</a></Link>
            <Link href="/politics"><a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent border-t-2 border-t-transparent hover:text-slate-400  hover:border-t-slate-200 focus:text-sky-600">Politics</a></Link>
            <Link href="/sports"><a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent border-t-2 border-t-transparent hover:text-slate-400  hover:border-t-slate-200 focus:text-sky-600">Sports</a></Link>

        </div>
        {children}
        <div className="bg-black text-gray-200 text-xl py-10 px-24 flex flex-col">
            <div>
            <Link href="/">
                <a className="text-white uppercase text-2xl flex align-baseline px-1 my-auto tracking-wider font-thin"> 
                <GiSoundWaves className="text-4xl"></GiSoundWaves>&nbsp; Station 23</a>
            </Link>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-5 ml-80 mt-10 max-w-6xl text-slate-300 font-light justify-items-end">
                <h1>Careers</h1>
                <h1>About Us</h1>
                <h1>API</h1>
                <h1>Media</h1>
                <h1>Contact Us</h1>
                <h1>Privacy Policy</h1>
                <h1>Our Mission</h1>

            </div>
            <div className="grid grid-cols-4  mt-10 justify-items-end w-44">
                <TiSocialFacebook />
                <TiSocialLinkedin />
                <TiSocialTwitter />
                <TiSocialYoutube />
                </div>

            <div className="my-10 ml-3 text-sm max-w-1xl font-light">
                Station 23 is a free press initiative by RMedia Gcorp, US &copy; and is registered as a not for profit organization.  All rights reserved. &copy; &nbsp; {new Date().getFullYear()} 
            </div>


        </div>
        </div>
    )
} 
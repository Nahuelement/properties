import React,{useRef,useContext, useState, useCallback} from 'react'
import Image from 'next/image'
import profilePic from '../public/favicon.ico'
import profilePic2 from '../public/vercel.svg'
import { ScrollContext } from '../utils/scroll-observer';
import VideoSlide from '../utils/video-slider';
import videos from '../public/videos';


export const Masthead:React.FC = () => {

    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)
    const {current: elContainer} = refContainer
//     const [counter, setCounter] = React.useState(2);
//     let video = videos[counter].src

//   // Second Attempts
//   React.useEffect(() => {
//     const timer=setInterval(() => (counter===0)?setCounter(2): setCounter(counter -1), 3000);
//     return () => clearInterval(timer)
//   }, [counter]);
    

    let progress = 0
   
    // console.log({'scrollY':scrollY})
    // console.log({'elContainer':elContainer?.clientHeight})
    
    if(elContainer){
        progress = Math.min(1 , scrollY/elContainer.clientHeight)
    }

  return (
    <div ref = {refContainer}
        className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'
        style={{
            transform:`translateY(-${progress * 40}vh)`
        }}
        >
        

        
                
            <video 
            autoPlay 
            loop
            muted 
            playsInline 
            className='absolute w-full h-full object-cover'>
               <source src=''  type='video/mp4; codecs=hvc1' />
               <source src={videos[2].src} type='video/webm; codecs=vp9' />
            </video> 

        

        
        <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
            <Image 
            src={profilePic} 
            width={128/3} 
            height={114/3} 
            alt='logo' />
        </div>
        <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
            <h1 className='mb-6 text-4xl xl:text-5xl'>AMH Propiedades</h1>
            <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                <span>Gestores </span> <span>inmobiliario</span>
            </h2>
        </div>
        <div className='flex-grow-0 pb-20 mb:pb-10 transition-all duration-1000 '>
        <Image 
            src={profilePic2}
            width={128/3} 
            height={114/3} 
            alt='logo2' />
        </div>

       
    </div>
  )
}

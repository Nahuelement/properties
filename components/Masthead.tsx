import React,{useRef,useContext, useState, useCallback} from 'react'
import Image from 'next/image'
import profilePic from '../public/favicon.ico'
import profilePic2 from '../public/vercel.svg'
import { ScrollContext } from '../utils/scroll-observer';
import VideoSlide from '../utils/video-slider';
import videos from '../public/videos';



import {SearchFilters} from './layout/SearchFilters'






export const Masthead:React.FC = () => {

    const [imageLoaded, setImageLoaded] = useState(false)
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
   
    //  console.log({'scrollY':scrollY})
    //  console.log({'elContainer':elContainer?.clientHeight})
    
    if(elContainer){
        progress = Math.min(1 , scrollY/elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(()=>{
              setImageLoaded(true)
            },[])
  return (
    <>
    <div ref = {refContainer}
        className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'
        
        >     
          <video 
            autoPlay 
            loop
            muted 
            playsInline 
            className='absolute  w-full h-full object-cover z-10'>
               <source src=''  type='video/mp4; codecs=hvc1' />
               <source src={videos[2].src} type='video/webm; codecs=vp9' />
            </video> 


    </div>
    
    </>
    
  )
}

import { Grid, Typography,Box ,FormControl, InputLabel,  MenuItem, Paper} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react'
import { Banner } from './banners/Banner'
import Image from 'next/image';
import videos from '../public/videos';
import {SearchFilters} from './layout/SearchFilters'

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ScrollContext } from '../utils/scroll-observer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';





export const AboutUs:React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const {scrollY} = useContext(ScrollContext)
  const {current: elContainer} = refContainer
  const [transitionState, setTransitionState] = useState(false)
  
 


  

  
  
  
  const handleImageLoaded = useCallback(()=>{
    setImageLoaded(true)
  },[])

  let progress = 0
   
  console.log({'scrollY':scrollY})
  console.log({'elContainer':elContainer?.clientHeight})
  
  if(elContainer){
      progress = Math.min(1 , scrollY/elContainer.clientHeight)
  }

  return (

    // className={` ${matches2 && matches3 ? '-translate-y-5': translate!matches3?'-translate-y-60':'translate-y-6'}`} style={{marginTop:'-45vh'}}
<>      


    <Box 
    sx={{marginTop:{xs:'-83vh',sm:'-65vh',md:'-65vh',lg:'-55vh',xl:'-65vh'},paddingTop:{xs:'-10vh'}}}
    >
      
      <div className="p-1 font-bold z-20 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] -translate-y-2/4 text-center flex-1 flex items-center justify-center flex-col">
            <h1 className='mb-3 text-4xl xl:text-5xl'>AMH Propiedades</h1>
            <h2 className='mb-1 text-2xl xl:text-3xl tracking-tight'>
                <span>Gestores </span> <span>inmobiliario</span>
            </h2> 
        </div>
       <div
       ref={refContainer}
          className={`  pb-16   -translate-y-2/4  animate__animated animate__fadeIn `}
            >
              <SearchFilters  />
          </div>
      </Box>  
        
      

  <Box className='flex flex-col bg-white py-10 ' 
      sx={{marginTop:{xs:'80vh',sm:'55vh',md:'55vh',lg:'60vh',xl:'65vh'},paddingTop:{xs:'-10vh'}}}
          >

    <br/>
    <Grid container 
                  gap={2}
                  paddingBottom={5}
                  paddingTop={0}
                  sx={{flexDirection:{xs:'column',sm:'row'},justifyContent:{xs:'center',sm:'space-evenly'}}}
                  alignItems='center'
                  className='drop-shadow-[2px_2px_1px_rgba(0,0,0,0.3)]'
                  >
        <Grid item
          xs={11} sm={3.7}
             textAlign='center' 
             justifyContent='center'
             
             height={200} 
             sx={{backgroundColor:'transparent'}}

              >
                
              <Image src="/computer-device-hardware-svgrepo-com.svg" height={90} width={90} />
              <br/>
              
              
                <Typography 
                 variant="h5"
                 fontSize={20}
                 fontFamily='Prompt'
                 color='black'
                >
                     Contamos con una amplia oferta de propiedades</Typography>
            </Grid>
          
          <Grid item
            xs={11} sm={3.7}
             textAlign='center' 
             justifyContent='center'
            
             height={200} 
             sx={{backgroundColor:'transparent'}}
             >
              <Image src="/hand-shake-svgrepo-com.svg" height={90} width={90} />
              <br/>
              <br/>
              
              

                <Typography 
                 variant="h5"
                 fontSize={20}
                 fontFamily='Prompt'
                 color='black'
                 
                >
                     Mas de 25 años de experiencia en el mercado inmobiliario</Typography>
            </Grid>
            <Grid item
             xs={11} sm={3.7}
             textAlign='center'
             justifyContent='center'
             height={200}  
             sx={{backgroundColor:'transparent'}}

              >
              <Image src="/building-svgrepo-com.svg" height={115} width={115} />
              
              
              

                <Typography 
                 variant="h5"
                 fontSize={20}
                 fontFamily='Prompt'
                 color='black'
                >
                     Gestionamos tus activos inmobiliarios</Typography>
            </Grid>
          
            
            </Grid>
        
        <Grid container paddingTop={2} >
        <Banner 
         purpose={'PROPIEDADES EN ARRIENDO'}
         title1={'Encuentra aca'} 
         title2={'el arriendo que buscas'} 
         buttonText='Ver Arriendos'
         linkName='/search?purpose=for-rent'
         imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
         desc1={'Explora las diferentes opciones'} 
         desc2={'departamento, casa, terrenos en arriend'}        />

        <Banner 
         purpose={'PROPIEDADES EN VENTA'}
         title1={'Encuentra aca'} 
         title2={'la propiedad que buscas'} 
         buttonText='Ver ventas'
         linkName='/search?purpose=for-sale'
         imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
         desc1={'Explora las diferentes opciones'} 
         desc2={'departamento, casa, terrenos en venta'}        />

        <Banner 
         purpose={'PROPIEDADES COMERCIALES'}
         title1={'Encuentra aca'} 
         title2={'la propiedad comercial que buscas'} 
         buttonText='Ver propiedades'
         linkName='/search?purpose=for-sale'
         imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
         desc1={'Explora las diferentes opciones'} 
         desc2={'oficinas, locales comerciales, terrenos comerciales en venta'}        />

          <div>
            <div>

            </div>
          </div>

        </Grid>
     

            </Box>       
            </>
  )
}

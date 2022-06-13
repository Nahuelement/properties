import { Grid, Typography,Box ,FormControl, InputLabel,  MenuItem} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import React, { useCallback, useContext, useRef, useState } from 'react'
import { Banner } from './banners/Banner'
import Image from 'next/image';
import videos from '../public/videos';
import {SearchFilters} from './layout/SearchFilters'

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ScrollContext } from '../utils/scroll-observer';
import Headroom from 'react-headroom'



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


<>       
      <div className='-translate-y-1/2' style={{marginTop:'-24vh'}}>
      <div className="p-10 font-bold z-20 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] -translate-y-full text-center flex-1 flex items-center justify-center flex-col">
            <h1 className='mb-6 text-4xl xl:text-5xl'>AMH Propiedades</h1>
            <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                <span>Gestores </span> <span>inmobiliario</span>
            </h2> 
        </div>
       <div
       ref={refContainer}
          className={`  pb-40 mb:pb-40 transition-all -translate-y-full -translate-x-1/4	duration-1000 ${imageLoaded ? 'opacity-100':'opacity-0 -translate-y-10 '}`}
            style={{marginTop:'-10vh'}}
            >
            <Image
              src="https://res.cloudinary.com/nahuelement/image/upload/v1637907926/hnzmupeaipcruza83dmu.svg"
              width={0}
              height={5}
              alt='scroll down'
              onLoad={handleImageLoaded}
              />
              <SearchFilters onLoading={handleImageLoaded} />
          </div>
        </div>   

  <section className='flex flex-col bg-white py-10 ' 
      style={{marginTop:'-22vh'}}
          >

    <br/>
    <Grid container 
                  gap={3}
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
                 fontSize={17}
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
                 fontSize={17}
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
              <Image src="/building-svgrepo-com.svg" height={105} width={105} />
              
              
              

                <Typography 
                 variant="h5"
                 fontSize={17}
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
     

            </section>       
            </>
  )
}

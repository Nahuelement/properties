import { Grid, Typography,Box } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import React from 'react'
import { Banner } from './banners/Banner'
import Image from 'next/image';
import videos from '../public/videos';


videos

export const AboutUs:React.FC = () => {
  return (
      <section className='flex flex-col bg-white py-10'>
      <Grid container 
                  gap={3}
                  paddingBottom={5}
                  paddingTop={4}
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
                
              <Image src="/computer-device-hardware-svgrepo-com.svg" height={80} width={80} />
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
              <Image src="/hand-shake-svgrepo-com.svg" height={70} width={70} />
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
              <Image src="/building-svgrepo-com.svg" height={95} width={95} />
              
              
              

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
   
  )
}

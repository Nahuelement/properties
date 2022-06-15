import { Grid, Link, Typography, Box } from '@mui/material'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blueGrey,teal } from '@mui/material/colors';



interface Props {
    purpose:string,
    title1:string, 
    title2:string, 
    imageUrl:string ,
    linkName:string,
    buttonText:string,
    desc1: string,
    desc2: string

}

export const Banner:React.FC<Props> = ({purpose, title1, title2, imageUrl,linkName,buttonText,desc1,desc2}) => {
  return (
    <Grid  container gap={2} flexWrap='wrap' justifyContent='space-around' alignItems='center' margin={2.5}>
    
    <Box 
        marginLeft={1}
       
        
        sx={{
        
        boxShadow: {xs:'rgba(0, 0, 0, 0.35) 0px 3px 9px;',sm:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'},
        width:{xs:'auto',sm:'auto'},
        height:{xs:'190px',sm:'320px'},
        }}

        >
    <Image src={imageUrl} width={540} height={320}  />
    </Box>
    
    <Grid item padding={2} justifyContent='center' xs={12} sm={5} alignItems='center'  >
    <Box sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'start',
          justifyContent:'center'
          
      }}>
    <Box>
      <Typography color='action' fontSize={21} paddingBottom={1} fontFamily='Tiro Tamil' >{purpose}</Typography>
      <Typography fontSize={17} fontWeight='bold' sx={{color:'darkblue'}} fontFamily='Tiro Tamil'>{title1}<br />{title2}</Typography>
      <Typography fontSize={15} paddingTop={1} paddingBottom={3} color='gray' fontFamily='Tiro Tamil'>{desc1}<br />{desc2}</Typography>
    </Box> 
      </Box> 
      
      <Box sx={{
          display:'flex',
          justifyContent:{xs:'center',sm:'start'}
          
      }}>
      <ColorButton  
        variant="contained"
        
        
        >
        <NextLink href={linkName}>
            <Link underline='none'>
                <Typography fontSize={13} fontFamily='monospace'  sx={{color:'whitesmoke'}} >{buttonText}</Typography>
            </Link></NextLink>
      </ColorButton>
      </Box>
    </Grid>
  </Grid>
);
  
}
 const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
     color: theme.palette.getContrastText(blueGrey[400]),
     backgroundColor: blueGrey[400],
     '&:hover': {
       backgroundColor: blueGrey[500],
     },
   }));
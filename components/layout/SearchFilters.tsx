import { useEffect, useState,FC } from 'react';
import { useRouter } from 'next/router';

import {AppBar, Badge,InputLabel,Box,FormHelperText, Button,FormControl, MenuItem, Input, Link, Toolbar, Typography, InputAdornment, IconButton, Grid, Container
} from '@mui/material'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { filterData, getFilterValues, PropsFilter } from '../../utils/filterData';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import TextField from '@mui/material/TextField';
import _, { map } from 'underscore'
import { SearchOutlined } from '@mui/icons-material';


interface Props{
  onLoading: () => void,
}
interface PropsSearch{
  values:{ purpose?: string; minPrice?: string; maxPrice?: string; roomsMin?: string; bathsMin?: string; }
}




const initialState = {
  purpose:'Comprar',
 
   minPrice:'50,000',
   maxPrice:'50,000',
  
   roomsMin:'1',
  bathsMin:'1',
  sort:'Newest',
  categoryExternalID: 'Apartment'

  }

export const SearchFilters:FC=()=> {

  const {push } = useRouter();




  const onSearchTerm = () => {
    if( searchTerm.trim().length === 0 ) return;
    push(`/api/hello`);
}


  const [searchTerm, setSearchTerm] = useState('');


  const [values, setValues] = useState(initialState);
  
  const [filters] = useState(filterData)
  const handleInputChange = (event: any) => {

    setValues({
        ...values,
        [ event.target.name ]: event.target.value
    });

}

function valuesToArray(o:any) {
  return _.pairs(o);
}
const result = valuesToArray(values)



  return (
   <>

    <AppBar  position="absolute" 
    sx={{width:{xs:'73%',sm:'80%'}, marginX:{xs:'13%',sm:'10%'},height:{xs:'auto',sm:'auto',md:'auto',lg:'auto',xl:'auto'},borderRadius:'6px'}}
    
    >
      <Toolbar disableGutters

              sx={{backgroundColor:'whitesmoke',display:'flex',

              padding:'1vh',
              paddingLeft:{xs:'3vw'},
              justifyContent:'space-around',
             
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' ,
              height:{xs:'auto',sm:'auto',md:'auto',lg:'auto',xl:'auto'},borderRadius:'6px'        
   }} >
              {/* <NextLink href='/' passHref>
                  <Link display='flex' alignItems='center'>
                        <Typography  color='chocolate'   variant='h6'>Propiedades |</Typography>
                        <Typography color='chocolate' sx={{ ml: 0.5 }}>AMH</Typography>
                    </Link>  
              </NextLink> */}
      
      <FormControl 
      
      
      sx={{display:{xs:'flex',sm:'block',md:'block',lg:'flex',xl:'flex'},flexDirection:{xs:'column',sm:'row'}}}>
      <TextField 
          id="outlined-basic" 
          label="Ubicacion" 
          variant="outlined"  
          sx={{p:'-1vh',ml:{sm:'-2vw'},mt:{xs:'2vh',sm:'2vh',md:'2vh',lg:'1vh',xl:'1vh'}}}
          InputProps={{
            endAdornment: <InputAdornment position="start">
              <IconButton
                  sx={{mr:{xs:'-4vw',sm:'-3vw',md:'-3vw',lg:'-1vw',xl:'-1vw'}}}
                    // onClick={ toggleSideMenu }
                    >
                         <SearchOutlined />
              </IconButton>
              </InputAdornment>,
          }}
          
           />
    {filters?.map((filter) => (
         <FormControl 
         key={filter.queryName}
         sx={{pt:1,m:1}}
         
         >
        <InputLabel   sx={{pt:1}}
        >{filter.queryName}</InputLabel>
        <Select
          sx={{  minWidth: 110, maxHeight:40 }}
          value={`${result.filter(v=>v[0] ===filter.queryName)[0]?.[1]}`}
          
          name= {filter.queryName}
          label={filter.queryName}
          onChange={handleInputChange}

      >
          {filter?.items?.map((item) => (
               <MenuItem value={item.name} key={item.value}>
                 {item.name}
               </MenuItem>

            ))}
        </Select>
        </FormControl>
      ))} 
        </FormControl>
      {/* <Input
          sx={{ maxWidth:'200px'  }}
          className='fadeIn'
          color='secondary'
          autoFocus
          value={ searchTerm }
          onChange={ (e) => setSearchTerm( e.target.value ) }
          onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
          type='text'
          placeholder="Buscar..."
                /> */}
       
      </Toolbar> 
      
       </AppBar>
       <Box sx={{
          display:{xs:'none',sm:'flex',md:'flex',lg:'flex',xl:'flex'},
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'46vh',
          

          
      }}>
          
          <Button variant="contained" 
          sx={{positon:'relative',width:'40vw', height:{sm:'10vh',md:'10vh',lg:'10vh',xl:'10vh'},marginTop:{xs:'10vh',sm:'5vh',md:'-65vh',lg:'18vh',xl:'18vh'}}}>
                      
            Buscar
          </Button>
          </Box> 

          </>
  );
}

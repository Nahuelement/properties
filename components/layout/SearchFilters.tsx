import { useEffect, useState,FC } from 'react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import NextLink from 'next/link';
import {AppBar, Badge,InputLabel,Box,FormHelperText, Button,FormControl, MenuItem, Input, Link, Toolbar, Typography, InputAdornment, IconButton, Grid
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filterData, getFilterValues, PropsFilter } from '../../utils/filterData';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import noresult from '../../assets/noresult.svg';
import { ClearOutlined } from '@mui/icons-material';
import { height } from '@mui/system';


interface Props{
  onLoading: () => void,
}


const initialState = {
  purpose:'Comprar',
 
 
   minPrice:'50,000',
   maxPrice:'50,000',
  
   roomsMin:'1',
  bathsMin:'1',
  //  sort?:string
  // locationExternalIDs?:string

  }

export const SearchFilters:FC<Props>=(onLoanding)=> {

  const {push } = useRouter();



  const onSearchTerm = () => {
    if( searchTerm.trim().length === 0 ) return;
    push(`/api/hello`);
}


  const [searchTerm, setSearchTerm] = useState('');


  const [values, setValues] = useState(initialState);
  console.log({values})
  const [filters] = useState(filterData)
  const handleInputChange = (event: SelectChangeEvent<string>) => {

    setValues({
        ...values,
        [ event.target.name ]: event.target.value
    });

}
  
  return (
   

    <AppBar sx={{width:'70%', marginX:'-10%',height:{sm:'20%'},marginTop:{sm:'2%'}}}>
      <Toolbar 
              sx={{backgroundColor:'whitesmoke',display:{xs:'block',sm:'inline-flex'} ,
              borderRadius:'3px',padding:'4%',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
               }}  >
              {/* <NextLink href='/' passHref>
                  <Link display='flex' alignItems='center'>
                        <Typography  color='chocolate'   variant='h6'>Propiedades |</Typography>
                        <Typography color='chocolate' sx={{ ml: 0.5 }}>AMH</Typography>
                    </Link>  
              </NextLink> */}
    {filters?.map((filter) => (
        <FormControl 
        key={filter.queryName}
        sx={{m:1}}
        >
        <InputLabel 
        sx={{}}
        >{filter.queryName}</InputLabel>
        <Select
          sx={{  minWidth: 90, maxHeight:40 }}
          value={`${values?.[filter.queryName]}`}
          
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
      <Input
          sx={{ maxWidth:'200px'  }}
          className='fadeIn'
          color='secondary'
          autoFocus
          value={ searchTerm }
          onChange={ (e) => setSearchTerm( e.target.value ) }
          onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
          type='text'
          placeholder="Buscar..."
                />
       
      </Toolbar> 
       </AppBar>
      


  );
}

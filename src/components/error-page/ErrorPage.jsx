// import React from 'react'

// const ErrorPage = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ErrorPage

import React from 'react'
import ErrorImg from '../../assets/Imgs/error=img.svg'
import { Box, Typography } from '@mui/material'
const ErrorPage = () => {
    return (
        <Box sx={{margin:'10%'}}  className='text-center justify-content-between ' >

            <Typography>Error code: 404</Typography>

            <Typography variant='h4' className='mt-3'>Oops! Looks like this isn't a page</Typography>

            <Box>
                <img className='img-fluid' src={ErrorImg} alt="" />
            </Box>


            
        </Box >


    )
}

export default ErrorPage

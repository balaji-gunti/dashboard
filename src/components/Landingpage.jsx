import React from 'react'
import Sidebar from "./Sidebar"
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import "./LandingPage.css"
import EditButton from './EditButton'
const Landingpage = () => {

  return (
    <>
    <Stack direction="row"  > 
        <Sidebar />
       <Box sx={{margin: "35px", width:"100vw"}}>
                <Box  direction="row" sx={{display: "flex", justifyContent:"space-between", marginBottom: "30px"}} >
                    <h1>Recurring Invoices</h1>
                    <Button variant="outlined" sx={{ width: "262px",  height:"63px",  borderRadius: "5px", backgroundColor: "black"}} >
                        <Typography variant="button" >
                            Add Recurring Invoice +
                        </Typography>
                    </Button>
                </Box>
                <Stack direction="row" style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "30px"}} >
                    <div style={{ padding: "30px 20px", backgroundColor: "#F9F9FB", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "8px"}} > 
                        <Typography variant="caption" display="block" gutterBottom>
                            # RECURRING INVOICES
                        </Typography>
                        <h1>215</h1>
                    </div>
                    <div style={{ padding: "30px 20px", backgroundColor: "#F9F9FB", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "8px"}} > 
                        {/* <p>RECURRING REVENUE</p> */}
                        <Typography variant="caption" display="block" gutterBottom>
                            RECURRING REVENUE
                        </Typography>
                        <h1>$2500/month</h1>
                    </div>
                    <div style={{ padding: "30px 20px", backgroundColor: "#F9F9FB", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "8px"}} > 
                        <Typography variant="caption" display="block" gutterBottom>
                            RECURRING   OVERDUE
                        </Typography>
                        <h1>22</h1>
                    </div>
                </Stack>

                <Box>
                    <Typography variant="h3">
                        Per Client
                    </Typography>
                    <br />
                    <Box sx={{display: "flex"}} >
                        <input type="text" placeholder='Search Client'  />
                        <Button variant='outlined' sx={{color: "white", backgroundColor:"black"}} > Search </Button>
                    </Box>
                </Box>
                <table>
                    <thead>
                    <tr>
                        <th className='align-left'>CLIENT</th>
                        <th className='align-left'># SEND</th>
                        <th className='align-left'>END DATE</th>
                        <th className='align-left'>INTERVAL</th>
                        <th className='align-left'>AMOUNT</th>
                        <th className='align-left'>EDIT</th>
                    </tr>
                    </thead>
                     <tbody>
                       <tr>
                            
                       </tr>
                           <EditButton />
                       <tr>
                            <EditButton />
                       </tr>
                       <tr>
                            <EditButton />
                       </tr>
                    </tbody>
                </table>
       </Box>
    </Stack>
    </>
  )
}

export default Landingpage
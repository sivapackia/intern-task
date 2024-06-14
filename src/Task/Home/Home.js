import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isArray } from "../Reducer";
const Home=()=>{
    const a=useNavigate()

    const[param]=useSearchParams()
    let prize=param.get('prize')
    console.log(prize)
    const dispatch=useDispatch()

    const State=useSelector(
        ({data})=>data
    )
    // console.log(State)
    const Click=(l,m,id)=>{
        // let x=State.Array.map((value,index)=>{
        //     return value.id !=id ?{...value,click:true}:value
        // })
        // dispatch(isArray(x))
        a(`/Component?id=${id}`)
    }
    return(
        <>
        <Box sx={{width:{xs:"100%",sm:"100%",md:"90%"},margin:"0 auto"}}>
        <Box sx={{textAlign:"center"}}>
                    <Typography component="h3" variant="h3" sx={{backgroundColor:"red",color:"white",fontWeight:"bold",padding:"15px 0px"}}>
                        Page-1
                    </Typography>
                </Box>
          <Box sx={{width:{xs:"100%",sm:"100%",md:"100%"},display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginTop:"25px"}}>
            {
                State.Array.map((value,index)=>{
                    return(
                <Box  sx={{width:{xs:"50%",sm:"100%",md:"45%"},margin:"5px 10px",backgroundColor:value.bg?"black":"",color:value.bg?"yellow":""}}>
                <Box sx={{boxShadow:"0px 0px 10px gray",height:"500px",width:"100%"}}>
                    <Typography component="h1" variant="h3" sx={{textAlign:"center"}}>
                           {value.name }
                    </Typography>
                    <Typography component="img" src="">
                    </Typography>
                    { value.click ?
                    <Box sx={{textAlign:"center"}}>
                    <Typography component="button" onClick={()=>Click(value,index,value.id)} sx={{backgroundColor:value.bg?"black":"",color:value.bg?"yellow":"",fontWeight:"800",boxShadow:"0px 0px 5px white"}}>Click</Typography>
                    </Box>:<Box sx={{textAlign:"center"}}>
                    <Typography component="button" sx={{backgroundColor:value.bg?"black":"",color:value.bg?"yellow":"",fontWeight:"800"}}>Click</Typography>
                    </Box>
                   }
    
                </Box>
            </Box>
                    )
                })
            }
          </Box>
        </Box>
        </>
    )
}

export default Home
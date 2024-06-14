import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isArray } from "../Reducer";


const Component=()=>{

    const State=useSelector(
        ({data})=>data
    )
    const a=useNavigate()
    const[param]=useSearchParams()
    const id=param.get("id")

    const dispatch=useDispatch()

    const[prize,setPrize]=useState("")
    const[error,setError]=useState(false)


    const Handle=(e)=>{
        if(e.target.name == "prize"){
            setPrize(e.target.value)
            setError(true)
        }
    }

    console.log(prize)

    const Cancel=()=>{
        let x=State.Array.map((value,index)=>{
            return value.id == id ?{...value,bg:false}:value
        })
        dispatch(isArray(x))
        a(`/`)
    }

    const Next=()=>{
        let x=State.Array.map((value,index)=>{
            return value.id == id ?{...value,bg:true}:value
        })
        dispatch(isArray(x))
        let y=x.map((value,index)=>{
            return value.id != id?{...value,click:true}:value
        })
        dispatch(isArray(y))
        console.log(x)
        a(`/?prize=${prize}`) 
    }

    const Nextt=()=>{
        alert("Please Enter Input Value")
    }

    return(
        <>
        <Box sx={{width:{xs:"100%",sm:"100%",md:"90%"},margin:"0 auto"}}>
            <Box sx={{width:"100%"}}>
                <Box sx={{textAlign:"center"}}>
                    <Typography component="h3" variant="h3" sx={{backgroundColor:"red",color:"white",fontWeight:"bold",padding:"15px 0px"}}>
                        Page-2
                    </Typography>
                </Box>
                <Box sx={{marginTop:"55px",boxShadow:"0px 0px 5px gray",width:"100%",height:"300px"}}>
                    <Box sx={{textAlign:"center",paddingTop:"25px"}}>
                    <Typography component="h4" variant="h4" sx={{height:"100px",fontWeight:"800"}}>
                          Enter The Prize Bicycle {id} 
                    </Typography>
                    </Box>
                    <Box sx={{textAlign:"center"}}>
                        <Typography component="input" type="number" name="prize" value={prize} placeholder="Enter The Prize " sx={{padding:"10px"}} onChange={Handle}></Typography>
                    </Box>
                    <Box sx={{textAlign:"center",marginTop:"25px"}}>
                        <Typography component="button" width="80px" onClick={Cancel}>
                             Cancel
                        </Typography>
                        {
                            error ?
                            <Typography component="button" sx={{marginLeft:"10px"}} width="80px" onClick={Next}>
                             Next
                        </Typography>:
                        <Typography component="button" sx={{marginLeft:"10px"}} width="80px" onClick={Nextt}>
                        Next
                      </Typography>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Component
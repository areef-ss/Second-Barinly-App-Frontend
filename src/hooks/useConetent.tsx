import axios from "axios";
import { useEffect, useState } from "react";
import { BACK_END_URL } from "../components/ui/comfig";

export function useContent(){
    const [contents,SetContents]=useState([]);

    useEffect(()=>{
        axios.get(`${BACK_END_URL}/content`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }

        }).then((responce)=>{
             SetContents(responce.data.content)
        })
       

    },[])
    return contents;
}
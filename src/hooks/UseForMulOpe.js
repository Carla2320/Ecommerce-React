import { useState } from 'react';

export const UserForMulOpe =(cargar={})=>{
    const [formData,setfromData]=useState({cargar})
    const handleChange=(eve)=>{
        const target=eve.target
        const name=target.name
        const value=target.value
        setfromData({
            ...formData,
            [name]:value
        })

    }

    return [formData,handleChange]


}
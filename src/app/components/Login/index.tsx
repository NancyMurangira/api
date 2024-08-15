"use client"
import React, {ChangeEvent, useState} from "react";

const Login =() =>{
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    return(
        <form>
            <h2> LOGIN </h2>
            <input placeholder="Enter username" type="text" required className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2 " onChange={(event:ChangeEvent<HTMLInputElement>)=> SetUsername(event.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" className="border border-gray-500 rounded-md w-full py-4 px-2 my-4"onChange={(event:ChangeEvent<HTMLInputElement>)=> SetPassword(event.target.value)} required/>
            <br/>
            <button type="submit" className="bg-green-500 text-white py-2 px-3 rounded-md" >Submit</button>
        </form>
    )
}
 
 export default Login;



 
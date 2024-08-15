"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { userLogin } from "@/app/utils/userLogin";
const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const handleLogin = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        try{
            setLoading(true);
            const response = await userLogin({username, password})
            setResponse(response.message ?? 'Successful Login')
            console.log({response});
            setLoading(false);
        }
        catch(error){
            setLoading(false);
            const message = (error as Error).message;
            console.log({message});
        }
    };
    return(
        <div>
            <form className="w-2/5 border p-10" onSubmit={handleLogin}>
            <h2>LOGIN</h2>
            <input type="text"
            placeholder="Enter Username"
            required
            className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4 text-black"
            onChange={(event: ChangeEvent<HTMLInputElement>)=>setUsername(event.target.value)}
            />
            <br />
            <input type="password"
            placeholder="Enter Password"
            required
            className="border w-full px-4 py-6 border-gray-500 rounded-xl my-4 text-black"
            onChange={(event: ChangeEvent<HTMLInputElement>)=>setPassword(event.target.value)}
            />
            <br />
            <button type="submit"
            className="rounded-xl bg-green-500 text-white cursor-pointer px-6 py-4">
            {loading? 'Loading....': 'Submit'}
                </button>
                {response && <p className="text-green-500 text-sm">{response}</p>}
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
        </div>
    )
};
export default Login;
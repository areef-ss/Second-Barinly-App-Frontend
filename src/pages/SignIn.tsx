import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACK_END_URL } from "../components/ui/comfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export function SignIn() {
    const navigate=useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        console.log(username, password);

        const responce=await axios.post(BACK_END_URL + "/signin", {
            username,
            password
        });

        const jwt=responce.data.token;

        localStorage.setItem("token",jwt);
        navigate("/dashBoard")
        


    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center rounded border">
        <div className="bg-white rounded border min-w-48 justify-center items-center">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="flex justify-center p-4 pr-2 pl-2">
                <Button size="lg" onClick={signin} loading={false} variant="primary" text="SignIn" fullWidth={true}/>
            </div>
            
            
        </div>

    </div>

}
import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACK_END_URL } from "./comfig";

enum ConetentType {
    YouTube = "youtube",
    Twitter = "twitter"
}


export function CreateContentModel({ open, onClose }) {

    const titleref = useRef<HTMLInputElement>(null);
    const linkref = useRef<HTMLInputElement>(null);
    const [type, SetType]=useState(ConetentType.Twitter)

     async function addContent() {
        const title = titleref.current?.value
        const link = linkref.current?.value

        await axios.post(`${BACK_END_URL}/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })

    }
    return (
        <div>
            {open && <div>
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-10 flex justify-center items-center">
                </div>

                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-100 flex justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded">
                            <div className="flex justify-end">
                                <div onClick={onClose}>
                                    <CrossIcon />
                                </div>


                            </div>
                            <div>
                                <Input reference={titleref} placeholder={"Title"} />
                                <Input reference={linkref} placeholder={"Link"} />
                            </div>
                            <div>
                                <h1>Type</h1>
                           

                            <div className="flex gap-4 p-4">
                                
                                <Button size="lg" text="Youtube" variant={type==ConetentType.YouTube ? "primary" : "secondary"} onClick={()=>{
                                    SetType(ConetentType.YouTube)
                                }}></Button>
                                <Button size="lg" text="Twitter" variant={type==ConetentType.Twitter ? "primary" : "secondary"} onClick={()=>{
                                    SetType(ConetentType.Twitter)
                                }}></Button>


                            </div>
                             </div>
                            <div className="flex justify-center opeacity-100">
                                <Button onClick={addContent} size="lg" variant="primary" text="Submit"  ></Button>
                            </div>

                        </span>
                    </div>

                </div>

            </div>}
            


        </div >
    )
}




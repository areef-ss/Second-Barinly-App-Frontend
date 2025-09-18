import { useEffect } from "react";
import { Document } from "../../icons/Document";
import { Trash } from "../../icons/tras";
import { TwitterIcon } from "../../icons/twitterIcon";
import { YoutubeIcon } from "../../icons/youtubeIcon";
import axios from "axios";
import { BACK_END_URL } from "./comfig";

interface CardProps {
    title?: string;
    link: string;
    type: string;
    icon:string
    id:string
}

export function Card({ title, link, type, id}: CardProps) {
    console.log(id);

  

    async function DeleteCard(id: string) {

        try {
            await axios.delete(`${BACK_END_URL}/content`, {
                data: { Content_id: id },   // 👈 put Content_id in the body
                headers: {
                    Authorization: localStorage.getItem("token") || ""
                }
            });
            console.log("Deleted successfully");
        } catch (error) {
            console.error("Delete failed:", error);
        }
    }



    return <div>
        <div className="p-4 bg-white rounded-md shadow-md outline-slate-20 max-w-72 border">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center text-gray-500">

                    <div className="text-gray-500 pr-2">

                        <Document size="lg" />
                    </div>
                    {title}
                </div>
                <div className="flex items-center gap-2">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">{type=="twitter" ? <TwitterIcon/> : <YoutubeIcon/> }</a>   
                    </div>
                    <div className="pr-2 text-gray-500">
                        <Trash onClick={()=>DeleteCard(id)} size="lg" />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type=="youtube" && <iframe className="w-full" src={link.replace("watch","embed")} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type=="twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a>
                </blockquote>}              
            </div>

        </div>

    </div>
}
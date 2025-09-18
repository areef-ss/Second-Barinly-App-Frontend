import { Logo } from "../../icons/Logo";
import { PlusIcon } from "../../icons/plus";
import { TwitterIcon } from "../../icons/twitterIcon";
import { YoutubeIcon } from "../../icons/youtubeIcon";
import { SidebarItem } from "./sidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed top-0 left-0">
        <div className="pt-4 pl-4 flex flex-col gap-2">
            <div className="flex pl-3 text-2xl pt-4 items-center rounded-md bg-slate-200 hover:bg-slate-300">
              
                <div className="flex items-center gap-2 pr-3 text-slate-700 text-4xl">
                    <Logo />                       
                </div>
                Brainly                 
            </div>
            <SidebarItem title="YouTube"  icon={<YoutubeIcon />} />
            <SidebarItem title="Twitter" icon={<TwitterIcon />} />
           {/* <SidebarItem title="Home"  icon={<TwitterIcon />} /> */}
        </div>
        

    </div>
}
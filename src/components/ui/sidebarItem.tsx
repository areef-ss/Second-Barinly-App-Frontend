import type { ReactElement } from "react";

interface SidebarItemProps {
    title: string;
    icon?: ReactElement;
    onClick?: () => void;
}

export function SidebarItem(props: SidebarItemProps) {

    return <div className="flex text-gray-800 cursor-pointer hover:text-purple-600 hover:bg-slate-200 p-2 rounded-md" onClick={props.onClick}>
        <div className="flex items-center gap-1">
        <div className="p-1 text-purple-600">
            {props.icon}
        </div>
        <div >
            {props.title}
        </div>

        </div>

        

    </div>
}
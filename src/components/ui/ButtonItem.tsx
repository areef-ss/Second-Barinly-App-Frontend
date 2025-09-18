import type { ReactElement } from "react";

interface ButtonItemProps {

    variant:"primary"|"secondary";
    text:string;
    startIcon:ReactElement;
    onClickfunction?:()=>void;

}

const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-200",
  secondary: "bg-purple-300 text-white hover:bg-purple-200",
};

const defaultStyles="px-2 py-1 rounded-md flex font-medium ";

export function ButtonItem(props:ButtonItemProps){

    return <button onClick={props.onClickfunction} className={variantStyles[props.variant] + " " + defaultStyles}>
        {props.startIcon?<div className="pr-2">{props.startIcon}</div>:null}
        {props.text}
        </button>
}
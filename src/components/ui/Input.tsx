import { forwardRef } from "react";

interface InputProps {
    placeholder:string;
    reference?:any
}

export function Input({placeholder,reference}:InputProps) {
  return <div>
    <div>
      <input ref={reference} placeholder={placeholder} className="px-4 py-2 border rounded m-2 hover:border-purple-400"></input>
      
    </div>
  </div>
    
  
}




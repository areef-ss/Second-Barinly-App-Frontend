
import { useState } from "react";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { Sidebar } from "../components/ui/sidebar";
import { ButtonItem } from "../components/ui/ButtonItem";
import { ShareIcon } from "../icons/share";
import { PlusIcon } from "../icons/plus";
import { Card } from "../components/ui/card";
import { useContent } from "../hooks/useConetent";

function DashBoard() {
     const [modelOpen, setModelOpen] = useState(false);
     const contents=useContent()
     console.log(contents);


    return   <div>
        <div>
            <Sidebar />
        </div>
         <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />
      <div className=' flex justify-end gap-2'>
        <ButtonItem onClickfunction={() => setModelOpen(true)} variant="primary" text="Add Content" startIcon={<PlusIcon size='lg' />} />
        <ButtonItem variant="secondary" text="Share Barin" startIcon={<ShareIcon size='lg' />} />
      </div>
     <div className="flex flex-wrap gap-4">
      
  {contents?.map(({ type, link, title,_id }, index) => (
    <Card key={link ?? index} type={type} link={link} title={title} id={_id}/>
  ))}
</div>

    </div>
      
    </div>
 
  
}

export default DashBoard;


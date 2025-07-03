import React from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Mail from './navbar/message/Mail';
import NumberMsg from './navbar/message/NumberMsg';
import { useState } from 'react';


function SocialMsgBox() {
      const [messageType, setMessageType] = useState("mail"); 

  return (
    <>
    <div className='absolute w-full h-[85%]  flex flex-col gap-2 rounded-b-2xl'>
                  
                  <div className=' w-full h-full'>
                    <div className=' w-full h-[15%] flex gap-3 justify-between items-center px-2 '>
                      <button className='w-6/12 h-[40px] bg-purple-400 rounded' onClick={()=>setMessageType("mail")}>Mail</button>
                      <button className='w-6/12 h-[40px] bg-purple-400 rounded' onClick={() => setMessageType("whatsapp")}>what's app</button>
                    </div>
                    <div className=' w-full h-[70%] flex flex-col gap-2 rounded-b-2xl justify-center items-center'>
                      {messageType === "mail" && <Mail />}
                      {messageType === "whatsapp" && <NumberMsg />}
                    </div>
                  </div>
                  
                </div>
    </>
  )
}

export default SocialMsgBox

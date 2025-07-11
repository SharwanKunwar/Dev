'use client';
import React, { useState } from 'react';
import Mail from './navbar/message/Mail';
import NumberMsg from './navbar/message/NumberMsg';

function SocialMsgBox() {
  const [messageType, setMessageType] = useState("whatsapp");

  return (
    <div className='absolute w-full h-[85%] flex flex-col gap-2 rounded-b-2xl'>
      <div className='w-full h-full flex flex-col justify-start items-center'>
        <div className='w-[90%] h-[15%] flex gap-3 md:justify-between justify-center items-center px-2 mastShadow mt-2'>
          

          <button
            onClick={() => setMessageType("whatsapp")}
            className={`md:w-6/12 w-[40%] h-[40px] z-50 rounded font-semibold transition-all duration-200 mastShadow ${
              messageType === "whatsapp"
                ? "bg-green-600 text-white mastShadow"
                : "bg-green-200 text-black mastShadow"
            }`}
          >
            WhatsApp
          </button>

          <button
            onClick={() => setMessageType("mail")}
            className={`md:w-6/12 w-[40%] h-[40px] z-50 rounded font-semibold transition-all duration-200 mastShadow ${
              messageType === "mail"
                ? "bg-indigo-500 text-white mastShadow"
                : "bg-purple-200 text-black mastShadow"
            }`}
          >
            Mail
          </button>

        </div>

        <div className='w-full h-[70%] flex flex-col gap-2 rounded-b-2xl justify-center items-center'>
          {messageType === "mail" && <Mail />}
          {messageType === "whatsapp" && <NumberMsg />}
        </div>
      </div>
    </div>
  );
}

export default SocialMsgBox;

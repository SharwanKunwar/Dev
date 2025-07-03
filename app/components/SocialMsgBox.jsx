import React, { useState } from 'react';
import Mail from './navbar/message/Mail';
import NumberMsg from './navbar/message/NumberMsg';

function SocialMsgBox() {
  const [messageType, setMessageType] = useState("mail");

  return (
    <div className='absolute w-full h-[85%] flex flex-col gap-2 rounded-b-2xl'>
      <div className='w-full h-full'>
        <div className='w-full h-[15%] flex gap-3 justify-between items-center px-2'>
          <button
            onClick={() => setMessageType("mail")}
            className={`w-6/12 h-[40px] rounded font-semibold transition-all duration-200 ${
              messageType === "mail"
                ? "bg-indigo-500 text-white"
                : "bg-purple-200 text-black"
            }`}
          >
            Mail
          </button>

          <button
            onClick={() => setMessageType("whatsapp")}
            className={`w-6/12 h-[40px] rounded font-semibold transition-all duration-200 ${
              messageType === "whatsapp"
                ? "bg-green-600 text-white"
                : "bg-green-200 text-black"
            }`}
          >
            WhatsApp
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

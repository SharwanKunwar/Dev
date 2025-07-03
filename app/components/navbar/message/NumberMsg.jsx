import React, { useState } from 'react';

function NumberMsg() {
  const [msg, setMsg] = useState("I just landed on your site—it’s awesome!!");

  const MailMessage = () => {
    const phoneNumber = "+9779763290022";
    const message = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <div className=' w-[90%]'>
        <div className='flex gap-5 text-2xl justify-start items-center ml-2 mt-15'>
          <h1>To: </h1>
          <span className='text-[18px]'>+9779763290022</span>
        </div>
        <div className='mt-2'>
          <h1 className='text-2xl ml-2'>Message: </h1>
          <textarea 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Enter your message'
            className='mt-2 ml-2 border border-black/30 w-[90%] h-[220px] p-2 mb-5'
          />
        </div>
      </div>
      <button
        className='py-2 w-[90%] bg-indigo-500 text-white font-semibold rounded'
        onClick={MailMessage}
      >
        Process
      </button>
    </>
  );
}

export default NumberMsg;

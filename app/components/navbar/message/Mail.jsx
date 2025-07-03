import React, { useState } from 'react';

function Mail() {
  const [msg, setMsg] = useState("I just landed on your site—it’s awesome!!");

  const MailMessage = () => {
  const subject = encodeURIComponent("👋 Hello from your site visitor!");
  const body = encodeURIComponent(msg);
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=sharwankunwar@gmail.com&su=${subject}&body=${body}`;
  const fallbackMailto = `mailto:sharwankunwar@gmail.com?subject=${subject}&body=${body}`;

  const newWindow = window.open(gmailURL, '_blank');
  if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
    // fallback if Gmail blocked
    window.location.href = fallbackMailto;
  }
};



  return (
    <>
      <div className='w-[90%]'>
        <div className='flex gap-5 text-2xl justify-start items-center ml-2 mt-15'>
          <h1>To: </h1>
          <span className='text-[18px] text-neutral-400'>sharwankunwar@gmail.com</span>
        </div>
        <div className='mt-2'>
          <h1 className='text-[18px] ml-2'>Message: </h1>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Enter your message'
            className='mt-1 ml-2 border text-neutral-500 border-black/30 w-[90%] h-[220px] p-2 mb-5 mastShadow'
          />
        </div>
      </div>
      <button
        className='py-3 w-[90%] bg-indigo-500 text-white font-semibold rounded mastShadow'
        onClick={MailMessage}
      >
        Process
      </button>
    </>
  );
}

export default Mail;

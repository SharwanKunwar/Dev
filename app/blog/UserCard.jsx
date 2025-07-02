import React from 'react';
import Image from 'next/image';

function UserCard({ name, address, postTime, img }) {
  return (
    <div className="flex items-center md:w-[89%] w-screen md:px-10 px-5 h-full gap-4 md:p-4  border-b border-black/30 shadow-sm bg-gray-50 dark:bg-neutral-700 mb-2">
      {/* Profile image with blue dot */}
      <div className="relative w-16 h-16">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 object-cover rounded-full border-2 border-blue-200 p-1 mastShadow"
        />
        {/* Blue dot at bottom-right */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 border-2 border-white rounded-full mastShadow" />
      </div>

      {/* User Info */}
      <div className="flex-1 relative">
        <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-50">
          <span>{name}</span>
          {/* Blue star icon */}
          <Image src="/verify.png" width={17} height={17} alt="verify" className=' pb-2'/>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-200">{address}</p>
        <p className="text-xs text-gray-400 dark:text-gray-400">{postTime}</p>
      </div>
    </div>
  );
}

export default UserCard;

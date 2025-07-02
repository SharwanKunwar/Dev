
import React from 'react'

export const Container = ({ children, className }) => {
    return(
        <div className={`max-w-5xl pb-20 w-full mx-auto bg-white dark:bg-neutral-800 "),className ${className}`}>
            {children}
        </div>
    )
}
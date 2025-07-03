import React from 'react'
import { useEffect } from 'react';

function R3F3DPage() {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div>
      3D Projects page
    </div>
  )
}

export default R3F3DPage

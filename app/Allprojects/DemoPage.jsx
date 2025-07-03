import React from 'react'
import { useEffect } from 'react';

function DemoPage() {
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div>
      Demo Projects Page
    </div>
  )
}

export default DemoPage

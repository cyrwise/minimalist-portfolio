"use client";

import { useEffect } from 'react';

export default function StoreRedirect() {
  useEffect(() => {
    // Client-side redirect that human browsers execute
    window.location.replace("https://sylasweiss.com/");
  }, []);

  return (
    <>
      {/* The shield to block Google crawlers */}
      <meta name="robots" content="noindex, nofollow" />
      <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Redirecting...
      </div>
    </>
  );
}
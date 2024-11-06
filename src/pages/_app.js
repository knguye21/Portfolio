import React from 'react';
import '../styles/index.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
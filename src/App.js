import React, { useEffect, useState  } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { BrowserRouter } from "react-router-dom";
import { Audio } from 'react-loader-spinner';

function App() {
  return(
      <BrowserRouter basename='/onePageClient'>
          <Content />
          <Footer />
      </BrowserRouter>
  )
}

export default App;

import React, { useEffect, useRef, useState } from 'react'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Services from './sections/services/Services'
import Testimonials from './sections/testimonials/Testimonials'
import FAQs from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'


const App = () => {
  const mainRef = useRef();
  // console.log(mainRef?.current?.getBoundingClientRect());
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSitePosition] = useState(0);
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }
  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSitePosition(mainRef?.current?.getBoundingClientRect().y);
  }
  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition])
  // console.log(mainRef?.current?.getBoundingClientRect());

  return (
    <main ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      {/* <Theme /> */}
      {showFloatingNav && <FloatingNav />}
    </main>
  )
}

export default App
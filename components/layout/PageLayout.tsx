import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main> 
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default PageLayout

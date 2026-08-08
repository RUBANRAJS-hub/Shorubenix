import Navbar from './Navbar'
import Footer from './Footer'
import QuickResponse from '../feedback/QuickResponse'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-enter">{children}</main>
      <QuickResponse />
      <Footer />
    </>
  )
}

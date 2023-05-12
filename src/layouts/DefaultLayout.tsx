import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function Defaultlayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

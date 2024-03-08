import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout';
 
export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

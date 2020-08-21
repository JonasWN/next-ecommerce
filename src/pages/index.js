import React from 'react'
import Layout from '../components/Layout'
import { Footer } from '../components/Footer'
import { ProductList } from '../components/ProductList'

function HomePage() {
  return (
    <Layout title="Home">
      <ProductList />
      <Footer />
    </Layout>
  )
}

export default HomePage

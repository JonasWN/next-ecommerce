import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import { ShoppingBag } from '@styled-icons/feather'

const Product = ({ slug }) => {
  return (
    <Layout title={`product`}>
      <StyledProduct>
        <aside className="left-background"></aside>
        <aside className="right-background"></aside>
        <article>
          <img src={`/image ${slug}.png`} alt="product-image" />
          <h1>Switzer Rolex</h1>
          <h2></h2>
          <p>$255.00</p>
          <div>
            <ShoppingBag />
            <button>Buy Now</button>
          </div>
        </article>
      </StyledProduct>
    </Layout>
  )
}

const StyledProduct = styled.main`
  overflow: scroll;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  padding: 1.5rem;
  background: #e8eff6;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    position: relative;
    z-index: 2;
  }

  .left-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100%;
    background: #c9d2e1;
  }

  .right-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    background: #e8eff6;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    img {
      object-fit: contain;
    }

    svg {
      width: 20px;
    }
  }
`

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: { slug },
  }
}

export const getStaticPaths = async () => {
  const paths = routes.map(product => {
    return {
      params: {
        slug: product,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

const routes = ['1', '2', '3', '4', '5', '6', '7', '8']

export default Product

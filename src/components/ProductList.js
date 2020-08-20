import React from "react"
import styled from "styled-components"
import { ProductItem } from "./ProductItem"

export const ProductList = () => {
  return (
    <StyledProductList>
      <ul>
        {products.map((p, index) => (
          <ProductItem
            key={index}
            image={index + 1}
            name={p.name}
            price={p.price}
          />
        ))}
      </ul>
    </StyledProductList>
  )
}

const StyledProductList = styled.main`
  overflow: scroll;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  padding: 1.5rem;
  background: #e8eff6;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 250px));
    place-content: center;
    place-items: center;
    grid-gap: 20px;
  }
`
const products = [
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
  {
    name: "Switz Rolex",
    price: "255.00",
  },
]

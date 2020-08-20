import React from "react"
import styled from "styled-components"
import { Heart } from "@styled-icons/feather"
import Link from "next/link"

export const ProductItem = ({ image, name, price }) => {
  return (
    <Link href={`/products/${image}`}>
      <StyledProductItem>
        <Heart />
        <img src={`/image ${image}.png`} alt="product-image" />
        <div>
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <button>Buy Now</button>
      </StyledProductItem>
    </Link>
  )
}

const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 400px;
  padding: 1.5rem;
  background: ${props => props.theme.colors.body};

  img {
    object-fit: contain;
  }

  svg {
    width: 20px;
    align-self: flex-end;
  }

  h2 {
    color: ${props => props.theme.colors.dimmed};
    font-weight: 300;
  }

  p {
    color: ${props => props.theme.colors.accent};
    font-weight: 300;
  }

  button {
    color: ${props => props.theme.colors.font};
    border: none;
    background: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
`

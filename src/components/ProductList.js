import React from "react"
import styled from "styled-components"

export const ProductList = () => {
  return (
    <StyledProductList>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
      <h1>List</h1>
    </StyledProductList>
  )
}

const StyledProductList = styled.main`
  overflow: scroll;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  padding: 1.5rem;
`

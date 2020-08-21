import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { themeState } from '../recoil/atoms'
import { ShoppingCart, Moon, Sun } from '@styled-icons/feather/'

export const Header = () => {
  const [darkTheme, setDarkTheme] = useRecoilState(themeState)

  return (
    <StyledHeader>
      <StyledNavigation>
        <ul>
          <li onClick={() => setDarkTheme(!darkTheme)}>
            {!darkTheme && <Moon />}
            {darkTheme && <Sun />}
          </li>
          <li>All Products</li>
          <li>
            <ShoppingCart />
          </li>
        </ul>
      </StyledNavigation>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1.5rem;
  border-bottom: ${props => props.theme.colors.border};
`
const StyledNavigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;

    & li svg {
      width: 24px;
    }
  }
`

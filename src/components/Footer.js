import React from "react"
import styled from "styled-components"
import { Home, Search, User } from "@styled-icons/feather/"
import { ActiveLink } from "./ActiveLink"

export const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <ActiveLink href="/">
              <Home />
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/search">
              <Search />
              Search
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/profile">
              <User />
              Profile
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 0.8rem 1.5rem;
  border-top: ${props => props.theme.colors.border};

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & li {
      text-transform: uppercase;
      font-size: 0.6rem;

      & a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      & svg {
        width: 25px;
        margin-bottom: 10px;
      }
    }
  }
`

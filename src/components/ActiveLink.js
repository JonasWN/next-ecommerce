import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({ href, children }) => {
  const router = useRouter()
  const activeLink = router.pathname === href

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} passHref>
      <StyledActiveLink active={activeLink} onClick={handleClick}>
        {children}
      </StyledActiveLink>
    </Link>
  )
}

const StyledActiveLink = styled.a`
  color: ${props => (props.active ? "#3391ff" : "#9ba4ae")};
`

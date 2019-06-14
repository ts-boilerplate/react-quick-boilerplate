import React, { Component } from 'react'
import styled from 'styled-components'

import HomePage from './pages/HomePage'

export default class App extends Component {
  render() {
    return (
      <StyledRoot>
        <HomePage />
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
`
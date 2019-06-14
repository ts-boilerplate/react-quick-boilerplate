import React, { Component } from 'react'
import styled from 'styled-components'

import Counter from '@/components/Counter'
import { Actions, Selectors, States } from '@/utils/decorators'

export default class HomePage extends Component {
  render() {
    return (
      <StyledRoot>
        <Counter />
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div``
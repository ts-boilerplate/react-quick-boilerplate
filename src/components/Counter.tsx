import React, { Component } from 'react'
import styled from 'styled-components'

import { Actions, Selectors, States } from '@/utils/decorators'

@States( 'counter', 'count' )
@Selectors( 'counter', 'countText' )
@Actions( 'counter', 'ADD_COUNT', 'SUBTRACT_COUNT' )
export default class Counter extends Component {
  count
  countText
  ADD_COUNT
  SUBTRACT_COUNT

  render() {
    return (
      <StyledRoot>
        <h1>{ this.count }</h1>
        <p>{ this.countText }</p>
        <button onClick={ () => this.ADD_COUNT( 1 ) }>+</button>
        <button onClick={ () => this.SUBTRACT_COUNT( 1 ) }>-</button>
      </StyledRoot>
    )
  }
}

const StyledRoot = styled.div`
  h1 {
    color: blue;
  }
  button {
    margin-right: 10px;
  }
`
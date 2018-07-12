import React, { PureComponent } from 'react'
import { mapValues, isNil, toArray as ensureArray, where } from '@roseys/futils'
import StyledSelect from '../src/components/Select'

export default class Select extends PureComponent {
  handleChange = event => {
    const { name, onChange } = this.props

    const select = event.target
    const selectedOption = select[select.selectedIndex]

    const value = selectedOption.hasAttribute('value')
      ? selectedOption.value
      : null

    if (name) {
      onChange(name, value)
    } else {
      onChange(value)
    }
  }

  renderPlaceholder () {
    const { value, placeholder, children } = this.props

    if (value) return

    if (children) {
      const hasNullOption = where(
        item => item.props.value === null,
        ensureArray(children)
      )

      if (hasNullOption) return false
    }

    return (
      <option disabled value="">
        {placeholder}
      </option>
    )
  }

  renderItems () {
    return mapValues(
      item => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ),
      ensureArray(this.props.items)
    )
  }

  render () {
    const {
      disabled, value, className, ...restprops
    } = this.props

    return (
      <StyledSelect
        {...restprops}
        disabled={disabled}
        value={isNil(value) ? '' : value}
        onChange={this.handleChange}
      >
        {this.renderPlaceholder()}
        {this.renderItems()}
      </StyledSelect>
    )
  }
}

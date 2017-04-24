<a href="https://github.com/cssinjs/styled-jss">
  <img alt="styled-jss" src="https://github.com/cssinjs/logo/blob/master/styled-jss-logo.png" height="150px" />
</a>

# Styled Components on top of JSS

[![Travis branch](https://img.shields.io/travis/cssinjs/styled-jss/master.svg?style=flat)](https://travis-ci.org/cssinjs/styled-jss)
[![Coverage Status branch](https://img.shields.io/coveralls/cssinjs/styled-jss/master.svg?style=flat)](https://img.shields.io/coveralls/cssinjs/styled-jss/master.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/styled-jss.svg?style=flat)](https://www.npmjs.com/package/styled-jss)
[![npm license](https://img.shields.io/npm/l/styled-jss.svg?style=flat)](https://www.npmjs.com/package/styled-jss)

## Install

```sh
npm install --save styled-jss
```

Install peer dependencies `react` and `react-dom` in your project.


## Usage

### With a default styled function

```js
import styled from 'styled-jss'

const Button = styled('button', {
  fontSize: 12,
  color: (props) => props.theme.textColor
})

// Composition.
const PrimaryButton = styled(Button, {
  color: 'red'
})
```

### With a base Style Sheet

Using base Style Sheet we can share classes between styled primitives and render function.

```js
import { Styled, injectStyled } from 'styled-jss'

// Base styles, like a regular jss object.
const styled = Styled({
  root: {
    margin: 10,
    '& $baseButton': {
      fontSize: 16
    }
  },
  baseButton: {
    padding: 10,
    '& + &': {
      marginLeft: 10
    }
  }
})

const NormalButton = styled('button', {
  composes: '$baseButton',
  border: [1, 'solid', 'grey'],
  color: 'black'
})

// Composition - same way.
const PrimaryButton = styled(NormalButton, {
  color: 'red'
})

// One can use classes AND styled primitives.
const MyComponent = ({classes}) => (
  <div className={classes.root}>
    <NormalButton>normal button</NormalButton>
    <PrimaryButton>primary button</PrimaryButton>
  </div>
)

const MyStyledComponent = injectStyled(styled)(MyComponent)
```

### With custom JSS setup

`styled-jss` uses [jss-preset-default](https://github.com/cssinjs/jss-preset-default) by default. You can require `createStyled` function and provide your custom JSS instance.

```js
import { create as createJss } from 'jss'
import vendorPrefixer from 'jss-vendor-prefixer'
import createStyled from 'styled-jss/createStyled'

const jss = createJss()
jss.use(vendorPrefixer())

// Create a custom Styled function, that allows to set BaseStyles.
const Styled = createStyled(jss)

// Create a custom styled function that allows to create styled components.
export const styled = createStyled()

export default Styled
```

## License

MIT

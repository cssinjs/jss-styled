# Styled Components on top of JSS

## Install

This has peer dependencies of `react` and `react-dom`, which will have to be installed as well.

```sh
npm install --save styled-jss
```

## Usage

### With default styled function

```jsx
import styled from 'styled-jss'

const Button = styled('button', {
  fontSize: 12,
  color: ({textColor}) => textColor,
  border: ({borderColor}) => [1, 'solid', borderColor]
})

// Composition.
const PrimaryButton = styled(Button, {
  color: 'red'
})

// it would be button with red color and green border
<PrimaryButton style={{borderColor: 'green', textColor: 'red'}} />
```

### With base Style Sheet

Using base Style Sheet we can share classes between styled primitives.

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
      marginLeft; 10
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

### With custom JSS setup:

```js
import { create as createJss } from 'jss'
import vendorPrefixer from 'jss-vendor-prefixer'

import { createStyled } from 'styled-jss'

const jss = createJss()
jss.use(vendorPrefixer())

// Create custom Styled, that allows to set BaseStyles
const Styled = createStyled(jss)

// Create custom styled function without BaseStyles accordingly
export const styled = createStyled()

export default Styled
```

## License

MIT

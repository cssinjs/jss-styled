export type JssStyles = Object
export type JssStyle = Object
export type JssStaticSheet = Object
export type JssDynamicSheet = JssStaticSheet

export type BaseStylesType = JssStyles
export type ComponentStyleType = JssStyle
export type StyledType = Function & {
  mountSheets: Function,
  styles: JssStyles
}
export type StyledElementAttrsType = {tagName: string, style: ComponentStyleType}
export type StyledElementType = Function & StyledElementAttrsType
export type TagNameOrStyledElementType = string | StyledElementType
export type StyledElementPropsType = {
  classes: Object,
  children: ?any,
  className: ?string,
}

export type StyledElementAttrsType = { tag: string, styles: Object }
export type StyledElementType = Function & StyledElementAttrsType
export type tagOrStyledElementTypeype = string | StyledElementType
export type StyledElementPropsType = {
  classes: Object,
  children: ?any,
  className: ?string,
}

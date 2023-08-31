import { type FC, type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button data-library="custom-library" {...rest}>{children}</button>
  )
}
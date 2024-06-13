import styled from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props: ButtonContainerProps) =>
    buttonVariants[props.variant]};
`

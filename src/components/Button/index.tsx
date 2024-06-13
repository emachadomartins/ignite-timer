import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export const Button = ({ variant = 'primary' }: ButtonProps) => (
  <ButtonContainer variant={variant}>Enviar</ButtonContainer>
)

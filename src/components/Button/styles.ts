import styled from 'styled-components'

export const Button = styled.button`
  background: #e91e63;
  color: ${({ theme }) => theme.colors.contrastText};
  width: 100%;
  height: 36px;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  font-weight: bold;

  &:disabled {
    background: #979797;
    cursor: default;
  }
`

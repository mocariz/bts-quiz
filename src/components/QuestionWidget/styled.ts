import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 32px 32px 32px;

  button {
    margin-top: 20px;
  }
`

export const Option = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.option}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
  }

  input {
    display: none;
  }
`

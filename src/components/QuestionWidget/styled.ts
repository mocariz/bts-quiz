import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 32px 32px 32px;

  button {
    margin-top: 20px;
  }
`

export const Form = styled.form`
  label {
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`

export const Option = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) =>
    theme.colors.option ? theme.colors.option : `${theme.colors.primary}40`};
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

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
  }
`

export const IconBlock = styled.div`
  display: flex;
  justify-content: center;
`

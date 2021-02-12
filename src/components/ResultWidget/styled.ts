import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #171b35;
  border: 1px solid #800080;
  border-radius: 4px;
  margin-top: 21px;
  padding: 0 8px;

  ul {
    height: 230px;
    max-height: 230px;
    overflow: auto;
    padding-right: 8px;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #2e0d2e;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 5px;
      //background-color: ${({ theme }) => theme.colors.mainBg};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #800080;
      border-radius: 10px;
    }
  }
`

export const Item = styled.li<{ active?: boolean }>`
  display: flex;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.option};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Position = styled.span<{ position: number }>`
  height: 24px;
  width: 24px;
  background-color: ${({ position }) => {
    if (position === 1) return '#FFD628'
    if (position === 2) return '#C8C0BE'
    if (position === 3) return '#884F31'
    return '#800080'
  }};
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`

export const Name = styled.span`
  flex: 2;
  margin-left: 8px;
  font-size: 16px;
`

export const Score = styled.span`
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`

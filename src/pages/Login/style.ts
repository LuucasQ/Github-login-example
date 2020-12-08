import styled from 'styled-components';

export const ScreenLogin = styled.div`
  width: 375px;
  height: 812px;
  background-color: #292929;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Form = styled.form`
  margin-top: 48.3px;
  max-width: 339px;

  display: flex;
  flex-direction: column;

  input {
    width: 339px;
    height: 56px;

    border-radius: 12px;
    border: 1px solid #E5E5E5;

    padding-left: 20px;
    margin-bottom: 19px;

    font-size: 20px;
  }

  button {
    width: 339px;
    height: 56px;

    background-color: #FFCE00;
    border-radius: 12px;
    border: none;

    font-size: 20px;
    font-weight: 900;

    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 13px;
  }
`;
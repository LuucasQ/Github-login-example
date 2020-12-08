import { FiDivide } from 'react-icons/fi';
import styled from 'styled-components';

export const ScreenDashboard = styled.div`
  width: 375px;
  height: 812px;
  background-color: #292929;

  img {
    width: 115px;
    border-radius: 50%;
    border: 3px solid #FFFFFF;

    margin: -57.5px 130px 0 130px;
  }

  div.section-info {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    margin-top: 45px;

    
    div.edge {
      width: 10px;
      height: 42px;
      background-color: #FFCE00;
      border-radius: 0 100px 100px 0;
      margin-right: 14px;
    }

    div.info-user {
      color: #FFFFFF;

      h1 {
        font-weight: 500;
        text-transform: uppercase;
      }
      p {
        font-weight: 100;
      }
    }
  }
`;

export const MenuBar = styled.div`
  width: 375px;
  height: 126px;

  display: flex;
  justify-content: space-between;
  padding: 23px 20px 25px 11px;

  background-color: #1F1F1F;

  p {
    width: 112px;
    height: 21px;
    color: #FFFFFF;
    font-weight: 500;
  }


  h3 {
    width: 59;
    height: 20px;

    color: #FFFFFF;
    font-weight: 100;

    display: flex;
    align-items: center;
    grid-gap: 12px;    
  }
`;

export const FollowerBar = styled.div`
  width: 100%;
  height: 97px;

  background-color: #5252525D;
  
  display: flex;
  flex-direction: row;

  div.box {
    margin: 12px auto 16px 19px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    h3{
      font-weight: 100;
    }
  }
`;

export const BioBar = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  div {
    margin-top: 47px;
  }

  div.edge{
    width: 10px;
    height: 42px;
    background-color: #FFCE00;
    border-radius: 0 100px 100px 0;
    margin-right: 14px;
  }

  div.section-bio {
    width: 332px;
    color: #FFFFFF;

    p {
      font-weight: 200;
      margin-top: 14px;
    }
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #FFFFFF;
  margin-top: 204px;
  border-radius: 15px 15px 0 0;
  border: 1px solid #00000029;

  display: flex;
  flex-direction: row;
  align-items: center;

  div.box-navigation {
    margin: 15px auto 16px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #A5A5A5;
  }

  div.box-navigation:nth-child(1) {
    color: #000000;
  }

`;
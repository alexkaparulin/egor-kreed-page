import React from 'react';
import styled from 'styled-components';
import EKLogo from '../images/Other/logo.png';

const LeftNavbar = () => {

  return (
    <LeftBarContainer>
        <Image src={EKLogo}></Image>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>главный</P>
            </Arrow>
        </NavText>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>музыка</P>
            </Arrow>
        </NavText>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>Концерты</P>
            </Arrow>
        </NavText>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>команда</P>
            </Arrow>
        </NavText>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>билеты</P>
            </Arrow>
        </NavText>
        <NavText>
            <LArrow>
                <Line></Line>
            </LArrow>
            <Arrow>
                <P>магазин</P>
            </Arrow>
        </NavText>
    </LeftBarContainer>      
  );
}

export default LeftNavbar;
const LeftBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:150px;
    margin-top:50px;
`
const Image = styled.img`
    margin-bottom:60px;
`
const Arrow = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
`
const LArrow = styled.div`
    width:100%;
    flex-basis:30%;
    margin-right:10px;
`
const Line = styled.div`
    width:100%;
`
const P = styled.p`
    flex-basis:60%;
    font-size:16px;
    color:#4A4A4A;
    cursor: pointer;
`
const NavText = styled.div`
    color:#4A4A4A;
    display:flex;
    align-items:center;
    height:40px;
    width:100%;
    &:hover ${Line}{
        color:red;
        border:1px solid #FFFFFF;
    }
    &:hover ${P}{
        color:#FFFFFF;
    }
`

import React from 'react';
import styled from 'styled-components';

import ekPhoto from '../images/Other/image_article.png'
import back from '../images/Other/back.png'
import forward from '../images/Other/next.png'

const SingerData = () =>(
    <SingerWrap>
        <SingerPhoto>
            <SingerImg src={ekPhoto}></SingerImg>
        </SingerPhoto>
        <SingerDataCon>
            <ArrowCon>
                <ArrowLeft>
                    <Left src={back}></Left>
                </ArrowLeft>
                <ArrowRight>
                    <Right src={forward}></Right>
                </ArrowRight>
            </ArrowCon>
            <SingersData>
                <ListNumberCon>
                    <OutOfNumber>01</OutOfNumber>
                    <TotalNumber>/05</TotalNumber>
                </ListNumberCon>
                    <News>News</News>
                    <NewsText>В 2014 году выпустил песню «Самая самая»,<br/>которая была написана Кридом и другими участниками творческого<br/> процесса за 15 минут[5].</NewsText>
                    <ContinueReading>Читать дальше -></ContinueReading>
            </SingersData>
        </SingerDataCon>    
    </SingerWrap>
    )

export default SingerData;

const SingerWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    height:160px;
    flex-basis:40%;
`
const SingerDataCon = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:60%;
`
const ArrowCon = styled.div`
    display:flex;
    justify-content:flex-end;
`
const ArrowLeft = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#101012;
    height:35px;
    width:35px;
    &:hover{
        background:#1E1E1E;
    }
`
const Left = styled.img``
const ArrowRight = styled(ArrowLeft)``
const Right = styled(Left)``
const SingerPhoto = styled.div`
    display:flex;
    flex-basis:40%;
`
const SingerImg = styled.img`
    height:100%;
    width:100%;
`
const SingersData = styled.div`
    display:flex;
    flex-direction:column;
    height:190px;
    width:100%;
    background:#101012;
`
const ListNumberCon = styled.div`
    display:flex;
    margin-bottom:-10px;
    padding-left:20px;
`
const TotalNumber = styled.p`
    font-size:14px;
    color:#1E1E1E;
`
const OutOfNumber = styled.p`
    font-size:15px;
    color:#FFFFFF;
`
const News = styled.p`
    color:#1E1E1E;
    font-size:12px;
    margin-bottom:-10px;
    padding-left:20px;
`
const NewsText = styled.p`
    font-size:12px;
    color:#FFFFFF;
    padding-left:20px;
`
const ContinueReading = styled.p`
    font-size:12px;
    color:#FFFFFF;
    padding-left:20px;
`
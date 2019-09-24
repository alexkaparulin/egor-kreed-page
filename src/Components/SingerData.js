import React,{Component} from 'react';
import styled from 'styled-components';

import ekPhoto from '../images/Other/image_article.png'
import back from '../images/Other/back.png'
import forward from '../images/Other/next.png'
import newsList from '../News.json'

class SingerData extends Component{
    state={
        listOfNews:newsList.news,
        currentIndex:0,
        currentNews:newsList.news[0]
    }

    moveBack(currentIndex,listOfNews){
        currentIndex--;
        
        if(currentIndex < 0){
            currentIndex = 4
        }
        this.setState({
            currentIndex:currentIndex,
            currentNews:listOfNews[currentIndex]
        })
    }
    moveForward(currentIndex,listOfNews){
        currentIndex++;
        
        if(currentIndex >= listOfNews.length){
            currentIndex = 0
        }
        this.setState({
            currentIndex:currentIndex,
            currentNews:listOfNews[currentIndex]
        })
    }
    render(){
        const {currentIndex, currentNews, listOfNews} = this.state;
        return(
        <SingerWrap>
            <SingerPhoto>
                <SingerImg src={ekPhoto}></SingerImg>
            </SingerPhoto>
            <SingerDataCon>
                <ArrowCon>
                    <ArrowLeft onClick={()=>this.moveBack(currentIndex,listOfNews)}>
                        <Left src={back}></Left>
                    </ArrowLeft>
                    <ArrowRight onClick={()=>this.moveForward(currentIndex,listOfNews)}>
                        <Right src={forward}></Right>
                    </ArrowRight>
                </ArrowCon>
                <SingersData>
                    <ListNumberCon>
                        <OutOfNumber>{'0' + Number(currentIndex+1)}</OutOfNumber>
                        <TotalNumber>{'/0' + listOfNews.length}</TotalNumber>
                    </ListNumberCon>
                        <News>News</News> 
                        <NewsText>{currentNews.data}</NewsText>
                        <ContinueReading>Читать дальше -></ContinueReading>
                </SingersData>
            </SingerDataCon>    
        </SingerWrap>
        )
    }
}

export default SingerData;

const SingerWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    height:160px;
    flex-basis:40%;
    @media (max-width: 425px) {
    flex-direction:column;
    height:auto;
}
`
const SingerDataCon = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:60%;
    @media (max-width: 425px) {
    flex-basis:100%;
  }
`
const ArrowCon = styled.div`
    display:flex;
    justify-content:flex-end;
    @media (max-width: 425px) {
    background:#101012;
}
`
const ArrowLeft = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#101012;
    height:35px;
    width:35px;
    cursor: pointer;
    &:hover{
        background:#1E1E1E;
    }
    @media (max-width: 425px) {
    height:25px;
    width:25px;
  }
`
const Left = styled.img``
const ArrowRight = styled(ArrowLeft)``
const Right = styled(Left)``
const SingerPhoto = styled.div`
    display:flex;
    flex-basis:40%;
    @media (max-width: 425px) {
    width:100%;
    border-bottom:1px solid gray;
  }
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
    padding-left:20px;
    height:40px;
`
const TotalNumber = styled.p`
    font-size:12px;
    color:#454545;
    align-self:center;
    font-weight:700;
`
const OutOfNumber = styled.p`
    font-size:18px;
    color:#FFFFFF;
    align-self:center;
`
const News = styled.p`
    color:#454545;
    font-size:12px;
    margin-bottom:-5px;
    padding-left:20px;
    font-weight:700;
`
const NewsText = styled.p`
    font-size:12px;
    color:#FFFFFF;
    padding-left:20px;
    font-weight:600;
    @media (max-width: 425px) {
    font-size:10px;
  }
   @media (min-width: 426px) and (max-width: 768px) {
    font-size:9px;
  }
  
`
const ContinueReading = styled.p`
    font-size:12px;
    color:#FFFFFF;
    padding-left:20px;
    font-weight:600;
    @media (max-width: 425px) {
    font-size:9px;
  }
   @media (min-width: 426px) and (max-width: 768px) {
    font-size:9px;
  }
`
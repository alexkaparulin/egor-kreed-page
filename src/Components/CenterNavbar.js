import React,{ Component } from 'react';
import styled,{ keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { closeNavbar } from '../Homepage/Homepage.action';

class CenterNavbar extends Component {

    render(){
      const { doCloseNavbar }= this.props;
        return (
            <Wrapper>
                <ExitCon>
                    <ExitButton onClick={()=>doCloseNavbar(false)}>&times;</ExitButton>
                </ExitCon>
                <ListWrap>
                    <NavText style={{animationDelay:'150ms'}}>главный</NavText>
                    <NavText style={{animationDelay:'300ms'}}>музыка</NavText>
                    <NavText style={{animationDelay:'450ms'}}>Концерты</NavText>
                    <NavText style={{animationDelay:'600ms'}}>команда</NavText>
                    <NavText style={{animationDelay:'750ms'}}>билеты</NavText>
                    <NavText style={{animationDelay:'900ms'}}>магазин</NavText>
                </ListWrap>
            </Wrapper>
        ) 
    }
}
function mapStateToProps(state,ownProps){
    console.log(state)
    const {isClicked}=state.homepage;
    return { 
        isClicked
    }
  }
  function mapDispatchToProps(dispatch,ownProps){
    return {
      doCloseNavbar : (boolean) => dispatch(closeNavbar(boolean)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CenterNavbar)

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100%;
    background:black;
    opacity:.9;
    z-index:1;
`
const ExitCon = styled.div`
    position:absolute;
    right:0;
    top:0;
    display:flex;
    width:40px;
    height:40px;
    justify-content:center;
    align-items:center;
`
const ExitButton = styled.p`
    color:gray;
    font-size:40px;
    cursor:pointer;
    &:hover{
        color:white;
        transform:scale(1.3)
    }
`
const MenuFrames = keyframes`
  0% {
    opacity:0;
    transform: rotateX(-90deg);
  }
  100% {
    opacity:1;  
    transform: rotateX(0deg);
  }
`;
const ListWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:400px;
`
const NavText = styled.li`
    color:lightgray;
    padding:15px;
    display:flex;
    cursor:pointer;
    transform-origin:top-center;
    animation:${MenuFrames} 300ms ease-in-out forwards;
    justify-content:center;
    list-style-type: none;
    font-size:26px;
    background:#101012;
    width:100%;
    opacity:0;
    border:1px solid black;
    &:hover{
        color:white;
        transform:scale(1.1);
        background:#1E1E1E;
    }
`


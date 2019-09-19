import React,{ Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Menu from '../images/Other/Menu.png';
import facebook from '../images/Social Media/facebook.png'
import instagram from '../images/Social Media/instagram.png'
import twitter from '../images/Social Media/twitter.png'
import vk from '../images/Social Media/vk.png'
import youtube from '../images/Social Media/Youtube.png'
import { openNavbar } from '../Homepage/Homepage.action';

class SocialRightBar extends Component{

    render(){
        const {doOpenNavbar}=this.props;
        
        return(
        <RightBarContainer>
            <MenuImage src={Menu} onClick={()=>doOpenNavbar(true)}></MenuImage>
            <SocialListCon>
                <SocialImg style={{height:'12px',width:'12px'}}  src={instagram}></SocialImg>
                <SocialImg style={{height:'13px',width:'9px'}} src={facebook}></SocialImg>
                <SocialImg src={twitter}></SocialImg>
                <SocialImg src={vk}></SocialImg>
                <SocialImg src={youtube}></SocialImg>
            </SocialListCon>
        </RightBarContainer>
        )
    }
}

function mapStateToProps(state,ownProps){
    const { isClicked } = state.homepage;
    return { 
        isClicked
    }
  }
  function mapDispatchToProps(dispatch,ownProps){
    return {
      doOpenNavbar : (boolean) => dispatch(openNavbar(boolean)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SocialRightBar);

const RightBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
    margin-top:50px;
`
const MenuImage = styled.img`
    margin-bottom:100px;
`
const SocialListCon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:200px;
`
const SocialImg = styled.img`
    height:12px;
    width:15px;
`  
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import background from '../images/Other/Background.jpg';
import CenterNavbar from '../Components/CenterNavbar';
import LeftNavbar from '../Components/LeftNavbar';
import SocialRightbar from '../Components/SocialRightbar';
import Player from '../Components/Player';
import SingerData from '../Components/SingerData';


class HomePage extends Component{
    
    render(){
        let { isClicked } = this.props;     

    return (
        <Wrapper>
            { isClicked === true && <CenterNavbar/> } {/* OnClick Center-Navbar is opened*/}
            <SidesCon>
                <LeftNavbar />     {/*Left-Navbar Component */}
                <SocialRightbar /> {/*Right-Social-Icons Component */}
            </SidesCon>
            <BottomCon>
                <Player/>          {/* Player-Container Component*/}
                <SingerData />     {/* Singer-Data Component* */}
            </BottomCon>
        </Wrapper>
        );
    }
}

function mapStateToProps(state,ownProps){
    const { isClicked } = state.homepage;
    return { 
        isClicked
    }
  }
export default connect(mapStateToProps)(HomePage);

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    background:black;
    height:100vh;
    background:url(${background});
    background-repeat:no-repeat;
    background-size:cover;
`
const SidesCon = styled.div`
    display:flex;
    justify-content:space-between;
    height:70%;
`
const BottomCon = styled.div`
    display:flex;
    align-items:flex-end;
    height:30%;
    width:100%;
`
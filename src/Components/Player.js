import React,{ Component } from 'react';
import styled from 'styled-components';

import playerforward from '../images/Music Player/fast-forward.png'
import playerback from '../images/Music Player/back-forward.png'
import volumeIcon from '../images/Music Player/Volum.png'
import playerplay from '../images/Music Player/Play.png'
import playerStop from '../images/Music Player/Pause.png'

import grekhi from '../music/egor-krid-grekhi.mp3'
import grekhiAlbum from '../images/Other/Album Cover image.png'

import gdeTiGde from '../music/gde-ti-gde-ya.mp3'
import gdeTiAlbum from '../images/album/gde-ti-gde.jpg'

import beregu from '../music/egor-krid-beregu.mp3'
import bereguAlbum from '../images/album/beregu.jpg'

import gucci from '../music/egor-krid-gucci.mp3'
import gucciAlbum from '../images/album/gucci.jpg'

import vremaNePrishlo from '../music/vrema-ne-prishlo.mp3'
import vremaNeAlbum from '../images/album/vrema-ne.jpg'

import songJson from '../../src/Songs.json';

class Player extends Component{
   
    state={
        isPlaying:false,
        play:playerplay,
        stop:playerStop,
        playerLine:0,
        value:40,
        valueIsChanged:false,
        arrOfSongs:[grekhi,gdeTiGde,beregu,gucci,vremaNePrishlo],
        songData:songJson,
        songAlbum:[grekhiAlbum,gdeTiAlbum,bereguAlbum,gucciAlbum,vremaNeAlbum],
        nowPlaying:grekhi,
        nowPlayingIndex:0,
        playingSong:'Грехи',
        playingSinger:'Егор Крид feat. Клава Кока',
        initial_minutes:4,
        initial_seconds:48,
        time_minutes:4,
        time_seconds:48,
    }

    componentDidUpdate(){
        console.log(this.state.value)
    }
    stopIt(){
        let { time_seconds, time_minutes, playerLine ,initial_minutes, initial_seconds } = this.state;
        let insideLine = document.getElementById("insideLine");

        let eachSecPercent = 100 / Number( (Number(initial_minutes * 60)) + Number(initial_seconds) );
         
        time_seconds--;
        playerLine = Number(playerLine) + Number(eachSecPercent);
        insideLine.style.width = playerLine +'%';  
        // 288-100%  1% = 0.34722


        if(time_seconds === 0){
            time_seconds = 59;
            time_minutes--; 
        }
        if(time_seconds < 10){
            time_seconds = '0' + time_seconds;
        }
        if(time_minutes === 0){
            time_seconds = 59;
            time_minutes = '00';
        }
        if(time_minutes === '00' && time_seconds === '0'+1){
            this.pauseAudio();
            time_seconds = initial_seconds;
            time_minutes = initial_minutes;
            playerLine   = 0;
        }
        this.setState({
            time_minutes : time_minutes,
            time_seconds : time_seconds,
            playerLine   : playerLine })
    }

    playerInverval = (doesPlayerWork) => {
        if (doesPlayerWork === true){
            this.interval = setInterval(()=>this.stopIt(), 1000)
        }
        else{
            clearInterval(this.interval)
        }    
    }

    playAudio = () => { 
        var audio = document.getElementById("myAudio"); 
        this.setState({isPlaying:true})   
        audio.play(); 
        this.playerInverval(true)
    }

    pauseAudio = () => {
        var audio = document.getElementById("myAudio"); 
        this.setState({isPlaying:false})
        audio.pause(); 
        this.playerInverval(false)
    }

    updateRange(e){
        var audio = document.getElementById("myAudio"); 
        console.log(e.target.value)
        this.setState({
            value: e.target.value,
            valueIsChanged:true },() => audio.volume = this.state.value / 100);
    }

    changeSongForward(arrOfSongs,nowPlaying,songData){
        this.pauseAudio();
        let songIndex = nowPlaying;
        let songArrLength = arrOfSongs.length;
        songIndex++;
        if(songArrLength === songIndex){
            songIndex = 0;
        }
        this.setState({
            nowPlaying      : arrOfSongs[songIndex],
            nowPlayingIndex : songIndex,
            playerLine      : 0,
            playingSinger   : songData.songs[songIndex].singer,
            playingSong     : songData.songs[songIndex].songName,
            time_minutes    : songData.songs[songIndex].minutes,
            time_seconds    : songData.songs[songIndex].seconds,
            initial_minutes : songData.songs[songIndex].minutes,
            initial_seconds : songData.songs[songIndex].seconds,
        })
    }
    
    render(){
        const { isPlaying, play, stop, time_minutes, time_seconds, value, valueIsChanged, arrOfSongs,
                nowPlaying, nowPlayingIndex, songData, playingSong, playingSinger, songAlbum} = this.state;
        return(
        <PlayerCon>
            <SongCon>
                <AlbumImg src={songAlbum[nowPlayingIndex]}></AlbumImg>
                <SongNameCon>
                    <SongName>{playingSong}</SongName>
                    <SubSongName>{playingSinger}</SubSongName>
                </SongNameCon>
            </SongCon>
            <MusicPlayerCon>
                <Audio src={nowPlaying} id="myAudio" type='audio/mpeg'></Audio>
                <MusicPlayer>
                    <PlayerBack src={playerback}></PlayerBack>
                    <PlayerPlay src={isPlaying === false? play : stop} onClick={isPlaying === false? this.playAudio : this.pauseAudio}></PlayerPlay>
                    <PlayerForward src={playerforward} onClick={()=>this.changeSongForward(arrOfSongs,nowPlayingIndex,songData)}></PlayerForward>
                </MusicPlayer>
                <PlayerLine>
                    <PLine>
                        <InsidePLine id="insideLine"></InsidePLine>
                    </PLine>
                    <PlayerTime>{time_minutes}:{time_seconds}</PlayerTime>
                </PlayerLine>
            </MusicPlayerCon>
                <VolumeCon>
                    <VolumeImg src={volumeIcon}></VolumeImg>
                    <RangeContainer>
                        <VolumeLine type='range' min="0" max="100" step="1" onChange={(e)=>this.updateRange(e)} ></VolumeLine>
                        <VolumeInSideLine  width={value + '%'} isChangedValue={valueIsChanged} ></VolumeInSideLine>
                    </RangeContainer>
                </VolumeCon>
        </PlayerCon>
        )
    }
}
export default Player; 

const PlayerCon = styled.div`
    display:flex;
    height:60px;
    background:#000000;
    flex-basis:60%;
    @media (max-width: 425px) {
    flex-direction:column;
    margin-top:50px;
    width:100%;
    height:auto;
    padding:15px 0;
    border-top:1px solid gray;
  }
`
const SongCon = styled.div`
    display:flex;
    align-items:center;
    padding-left:30px;
    flex-basis:30%;
    @media (max-width: 425px) {
    flex-direction:column;
    justify-content:center;
    height:auto;
    align-items:space-around;
    padding-left:0px;
    padding:10px 0;
  }
    @media(min-width: 425px) and (max-width: 768px){
    margin:0;
    padding-left:10px;
  }
`
const AlbumImg = styled.img`
    width:22%;
    height:80%;
    @media (max-width: 425px) {
    width:120px;
    height:110px;
    margin-bottom:20px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width:60px;
    height:40px;
  }
`
const SongNameCon = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:10px;
    @media (max-width: 425px) {
    align-items:center;
    padding-left:0px;
  }
`
const Audio = styled.audio`
    height:100px;
    width:100px;
`
const SongName = styled.p`
    color:#FFFFFF;
    font-size:11px;
    padding-bottom:3px;
    @media (max-width: 425px) {
    font-size:15px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    font-size:9px;
  }
`
const SubSongName = styled.p`
    color:gray;
    font-size:10px;
    margin-top:-12px;
    @media (max-width: 425px) {
    font-size:14px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    font-size:8px;
  }
`
const MusicPlayerCon = styled.div`
    display:flex;
    flex-basis:60%;
    justify-content:space-between;
    @media (max-width: 425px) {
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:450px;
  }
`
const MusicPlayer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-basis:25%;
    @media (max-width: 425px) {
    width:80%;
    padding:15px 0;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    justify-content:space-between;
    width:120%;
  }
`
const PlayerBack = styled.img`
    width:20px;
    height:15px;
    @media (max-width: 425px) {
    width:25px;
    height:20px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width:15px;
    height:12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width:20px;
    height:15px;
  }
`
const PlayerPlay = styled.img`
    width:35px;
    height:35px;
    @media (max-width: 425px) {
    width:40px;
    height:40px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width:25px;
    height:25px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width:35px;
    height:35px;
  }
`
const PlayerForward = styled.img`
    width:20px;
    height:15px;
    @media (max-width: 425px) {
    width:25px;
    height:20px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width:15px;
    height:12px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width:20px;
    height:15px;
  }
`
const PlayerLine = styled.div`
    display:flex;
    align-items:center;
    margin-left:-15px;
    justify-content:space-evenly;
    width:100%;
    @media (max-width: 425px) {
    margin-left:0px;
  }
    @media (min-width: 426px) and (max-width: 768px) {
    width:65%;
    padding:0 8px 0 0;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width:75%;
  }
`
const PLine = styled.div`
    border:1px solid #454545;
    background:#454545;
    width:80%;
`
const InsidePLine = styled.div`
    border:1px solid #FFFFFF;
    width:0%;
`
const PlayerTime = styled.p`
    color:#454545;
    font-size:12px;
    margin-left:-10px;
    align-self:center;
    @media (max-width: 425px) {
    margin-left:0px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    margin-left:4px;
    font-size:10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left:3px;
  }
`
const VolumeCon = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-basis:20%;
    @media (max-width: 426px) {
    justify-content:center;
    align-items:space-around;
    padding:10px 0;
  }
`
const RangeContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:5px;

`
const VolumeImg = styled.img`
    height:20px;
    width:20px;
`
const VolumeInSideLine = styled.div`
    border:1px solid #ffffff;
    height:60%;
    display:flex;
    position:relative;
    top:-5.5px;
    left:2.5px;
    width:${props => props.width};
    max-width:85%;
    overflow:hidden;
`
const VolumeLine = styled.input`
    -webkit-appearance: none; /* Override default look */
    display:flex;
    justify-content:space-evenly;
    border:1px solid #454545;
    background:#454545;
    height:3px;
    outline:none;
    cursor: pointer;
    width:85%;
    &::-webkit-slider-thumb {
        appearance: none;
        width: 8px; 
        height: 8px; 
        background: transparent; 
}
`

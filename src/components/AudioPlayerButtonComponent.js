import React, { useEffect, useState, useRef } from 'react'
import {TouchableOpacity, View} from 'react-native'

import AudioIconComponent from './AudioIconComponent';
import RippleAnimationComponent from './RippleAnimationComponent';
import {defaultBtnSize} from '../constants/component_constant'
import color from '../constants/color_constant';
import audioPlayerService from '../services/audio_player_service';

const AudioPlayerButtonComponent = (props) => {
  const localAudioPlayer = useRef(null);
  const [state, setState] = useState({
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Clear the local audio if the user is switching to play another audio
    if (!!props.playingUuid && props.playingUuid != props.itemUuid)
      clearLocalAudioPlayer();

    // Clear all the audio if the playingUuid is null (ex: exit the screen)
    if (!props.playingUuid && !!global.audioPlayer && !!localAudioPlayer.current) {
      clearLocalAudioPlayer();
      audioPlayerService.clearAllAudio();
    }
  }, [props.playingUuid])

  useEffect(() => {
    return () => { audioPlayerService.clearAllAudio(); }  // Clear all the audio when component is unmount
  }, []);

  const clearLocalAudioPlayer = () => {
    localAudioPlayer.current = null;
    setState({
      playSeconds: 0,
      duration: 0,
      countInterval: null
    })
    setIsPlaying(false)
  }

  const updateState = (playSeconds, duration, countInterval) => {
    setState({ playSeconds, duration, countInterval })
  }

  const toggleAudio = () => {
    if (!!localAudioPlayer.current) {
      audioPlayerService.playPause(localAudioPlayer.current, state.countInterval, (audioPlayer, playSeconds, duration, countInterval) => {
        global.audioPlayer = audioPlayer;
        global.countInterval = countInterval;
        localAudioPlayer.current = audioPlayer;
        updateState(playSeconds, duration, countInterval);
        handleStopPlaying(countInterval, playSeconds, duration);
      });
      return;
    }

    audioPlayerService.clearAllAudio(); // Clear all the playing audio when starting to play a new audio if there is an existing audio is playing

    audioPlayerService.play(props.audio, props.itemUuid, props.playingUuid, (audioPlayer, playSeconds, duration, countInterval) => {
      global.audioPlayer = audioPlayer;
      global.countInterval = countInterval;
      localAudioPlayer.current = audioPlayer;
      updateState(playSeconds, duration, countInterval);
      handleStopPlaying(countInterval, playSeconds, duration);
    });
  }

  const handleStopPlaying = (countInterval, playSeconds, duration) => {
    if (!countInterval) {
      setIsPlaying(false);

      if (playSeconds == 0 && duration == 0)
        props.updatePlayingUuid(null);
    }
  }

  const onPress = () => {
    props.updatePlayingUuid(props.itemUuid);
    setIsPlaying(!isPlaying);
    toggleAudio();
  }

  const renderRippleAnimation = () => {
    return <RippleAnimationComponent
              rippleColor={props.rippleColor}
              height={props.rippleHeight}
              width={props.rippleWidth}
              radius={props.rippleRadius}
              isPlaying={isPlaying}
              rippleStyle={props.rippleStyle}
           />
  }

  const renderBtn = () => {
    const btnStyles = {
      alignItems: 'center',
      backgroundColor: props.buttonColor || color.white,
      borderRadius: 48,
      elevation: props.hasShadow ? 4 : 0,
      justifyContent: 'center',
      height: props.height || defaultBtnSize,
      width: props.width || defaultBtnSize,
      zIndex: 10
    }

    return <TouchableOpacity onPress={() => onPress()} style={[btnStyles, props.btnStyle]}>
            <AudioIconComponent
              isPlaying={isPlaying}
              audio={props.audio}
              isSpeakerIcon={props.isSpeakerIcon}
              iconStyle={props.iconStyle}
              iconSize={props.iconSize}
              iconPrimaryColor={props.iconPrimaryColor}
              iconSecondaryColor={props.iconSecondaryColor}
              customIcon={props.customIcon}
              customIconSet={props.customIconSet}
            />
          </TouchableOpacity>
  }

  return (
    <View style={[{justifyContent: 'center', alignItems: 'center'}, props.containerStyle]}>
      { props.rippled && renderRippleAnimation() }
      { renderBtn() }
    </View>
  )
}

export default AudioPlayerButtonComponent

// How to use
{/*
<AudioPlayerServcie
  audio={}
  itemUuid={string}
  playingUuid={string}
  isSpeakerIcon={boolean}
  buttonColor={}
  rippled={boolean}
  rippleColor={}
  rippleHeight={number}
  rippleWidth={number}
  rippleRadius={number}
  rippleStyle={{}}
  iconStyle={{}}
  iconSize={number}
  iconPrimaryColor={}
  iconSecondaryColor={}
  btnStyle={{}}
  updatePlayingUuid={(playingUuid) => {}}
  containerStyle={{}}
/>
*/}
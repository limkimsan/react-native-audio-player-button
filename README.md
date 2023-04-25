React Native Audio Player Button is a custom button with an icon for playing audio. The user is able to use this button as many as they want on the same screen without having the issue of overlapping playing audio.

<span><img src="https://user-images.githubusercontent.com/18114944/215944532-c1ce1e50-9744-4f75-899e-a801d4a2b080.png" width="250" height="500" /></span>

## Support
iOS & Android

## Installation

```sh
npm install react-native-audio-player-button
```

## Installing dependencies

```sh
npm install react-native-vector-icons react-native-sound
```
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-sound](https://github.com/zmxv/react-native-sound)

## Usage

```js
import AudioPlayerButton from 'react-native-audio-player-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

//...
const [playingUuid, setPlayingUuid] = React.useState(null);

<AudioPlayerButton
  audio={require('sample.mp3')}
  itemUuid='abcdefg'
  isSpeakerIcon={true}
  rippled={true}
  iconPrimaryColor='#0088ff'
  iconSecondaryColor='#5da297'
  playingUuid={playingUuid}
  updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
  containerStyle={{marginTop: 16}}
  customIcon={<FAIcon/>}
  customIconSet={{play: 'play-circle', pause: 'pause-circle', mute: 'repeat'}}
/>
```
## Properties
#### Basic
| Prop               |    Default    |    Type    |  Optional  | Description                                                                                  |
| :----------------- | :-----------: | :--------: | :--------: | :------------------------------------------------------------------------------------------- |
| audio              |      null     |   `.mp3`   |   `false`  | The audio file that will be playing                                                          |
| itemUuid           |      null     |  `string`  |   `false`  | A unique uuid of the audio or the uuid of the button (to prevent playing audio overlap)      |
| playingUuid        |      null     |  `string`  |   `false`  | The uuid of the audio that is currently playing                                              |
| isSpeakerIcon      |     false     |  `boolean` |   `true`   | If true, it will show a speaker icon. If false, it will show a normal play icon              |
| buttonColor        |   '#ffffff'   |  `string`  |   `true`   | The color of the button                                                                      |
| buttonHeight       |    48 or 56   |  `number`  |   `true`   | Height of the button                                                                         |
| buttonWidth        |    48 or 56   |  `number`  |   `true`   | Width of the button                                                                          |
| rippled            |     false     |  `boolean` |   `true`   | If true, it will show a ripple animation while playing the audio                             |
| rippleColor        |   '#000000'   |  `string`  |   `true`   | Color of the ripple animation                                                                |
| rippleHeight       |    48 or 56   |  `number`  |   `true`   | The height of the ripple animation                                                           |
| rippleWidth        |    48 or 56   |  `number`  |   `true`   | The width of the ripple animation                                                            |
| rippleRadius       |    48 or 56   |  `number`  |   `true`   | The radius of the ripple animation                                                           |
| iconSize           |    24 or 26   |  `number`  |   `true`   | The size of the icons (play and pause icon)                                                  |
| iconPrimaryColor   |   '#000000'   |  `string`  |   `true`   | The color of the icon before playing the audio                                               |
| iconSecondaryColor |   '#808080'   |  `string`  |   `true`   | The color of the icon while playing the audio                                                |
| playingUuid        |      ''       |  `string`  |   `false`  | The uuid of the playing audio component (to prevent playing audio overlap each other)        |
| hasShadow          |     false     |  `boolean` |   `true`   | The shadow of the button (Android only)                                                      |
| allowPause         |     false     |  `boolean` |   `true`   | Allow to pause the audio when toggle the button                                              |
| isFromAppBundle    |     false     |  `boolean` |   `false`  | Set to `true` to play the audio that is stored in the app bundle (ex: the downloaded audio)  |

- The default width, height of the button and ripple animation will be `56dp` and `48dp` for the low pixel devices

#### Custom styles

| Prop                        |    Default    |   Type    |  Optional  | Description                                                                |
| :-------------------------- | :-----------: | :-------: | :--------: | :------------------------------------------------------------------------- |
| containerStyle              |     {...}     |  `style`  |   `true`   | Style of the button and ripple animation container                         |
| buttonStyle                 |     {...}     |  `style`  |   `true`   | Style of the button                                                        |
| iconStyle                   |     {...}     |  `style`  |   `true`   | Style of the audio icons (play and pause icon)                             |
| rippleStyle                 |     {...}     |  `style`  |   `true`   | Style of the ripple animation                                              |
| customNotPlayingIconStyle   |     {...}     |  `style`  |   `true`   | Style of the audio icon when is not playing                                |
| customPlayingIconStyle      |     {...}     |  `style`  |   `true`   | Style of the audio icon while playing                                      |


#### Custom components
| Prop              |               Default             |  Type  |  Optional  | Description                                          |
| :---------------- | :-------------------------------: | :----: | :--------: | :--------------------------------------------------- |
| customIcon        |                {...}              | `comp` |   `true`   | Custom audio icon component                          |
| customIconSet     | {{play: '', pause: '', mute: ''}} | `hash` |   `true`   | A hash of the custom icon names                      |

#### Child components
```js
<AudioPlayerButton {...props}>
  <child components/>
</AudioPlayerButton>
```

- `play`: The icon that will be shown when the audio is not playing
- `pause`: The icon that will be shown while the audio is playing
- `mute`: The icon that will be shown when there is no audio file
- Default icon types of the button: 
    -   Speaker icon use Ionicons
    -   Normal play icon use Feather icons

#### Events

| Prop              |  Default  |    Type   |  Optional  | Description                                                          |
| :---------------- | :-------: | :-------: | :--------: | :------------------------------------------------------------------- |
| updatePlayingUuid |   {...}   |  `event`  |  `false`   | On press the button, to update the uuid of the playing item          |
| onPress           |   {...}   |  `event`  |  `true`    | Event when pressing the button                                       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

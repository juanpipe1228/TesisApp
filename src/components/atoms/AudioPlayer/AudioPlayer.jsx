import ReactAudioPlayer from 'react-audio-player';
export default function AudioPlayer(props) {
    const {src} = props
  return (
    <div style={{margin:'20px 0px 0px'}}>
        <ReactAudioPlayer
        src={src}
        controls
        />
    </div >
  )
}

import { useCallback, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import useStyles from './style';
import { Image } from '../../typings/common';


interface VidePlayerProps {
  videoUrl: string;
  playIcon: Image
  controls: boolean
  size: {width: number | string; height: number | string}
}

const VideoPlayer = ({
  videoUrl,
  playIcon,
  controls,
  size,
}: VidePlayerProps) => {
  const {classes} = useStyles();
  const [playing, setPlaying] = useState(false);
  const onClickPlay = useCallback(
    () => setPlaying(!playing), [playing, setPlaying]
  );
  return (
    <ReactPlayer
      config={
        { file: { attributes: { controlsList: "nodownload" }}}
      }
      url={videoUrl}
      type="video/mp4"
      height={size.height}
      width={size.width}
      muted={false}
      controls={controls}
      playing={playing}
      playIcon={
        <>
          <div className={classes.playIcon}
              style={{display: playing? "none":"block"}}
          >
            <img
              style={{width: playIcon.width, height: playIcon.width, cursor: "pointer"}}
              src={playIcon.image}
              alt="play"
              onClick={onClickPlay}
            />
          </div>
        </>
      }
      light={true}
    />
  )
}

export default VideoPlayer;

import React, {useRef, useEffect}from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoJSProps {
    options: videojs.PlayerOptions;
    onReady?: (player: videojs.Player | null) => void;
    styles?: any;
}

// const initialOptions: videojs.PlayerOptions = {
//   controls: true,
//   fluid: true,
//   controlBar: {
//     volumePanel: {
//       inline: false
//     }
//   }
// };

const VideoJS = ({options, onReady, styles}: VideoJSProps) => {
    // const {classes, cx} = styles();
    const videoRef = useRef<HTMLVideoElement>(null);
    let player: videojs.Player | null = null;

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!player) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = videojs(
                videoElement,
                {...options}
                ).ready(
                    () => {
                        videojs.log('player is ready');
                        onReady && onReady(player);
                    }
            );

        // You could update an existing player in the `else` block here
        // on prop change, for example:
        } else {
        // const player = playerRef.current;

        // player.autoplay(options.autoplay);
        // player.src(options.sources);
        }

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [options, videoRef, onReady, player]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                data-setup='{"fluid": true }'
            >
            </video>
        </div>
    )
}

export default VideoJS;

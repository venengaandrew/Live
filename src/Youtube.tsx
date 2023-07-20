import React from 'react';
import './Youtube.css';
import YouTube, { YouTubeProps } from 'react-youtube';


// Optional component to be rendered
// when you're not streaming


function YoutubeLiveStream() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      return (
        <div className="App">
            <header className="App-header">
                <YouTube videoId="live_stream?channel=UCHeBuYQUEr3r_5D5NQSwLCw" opts={opts} onReady={onPlayerReady} />
                <iframe width="350px" height="500px" src="https://www.youtube.com/live_chat?v=KPzR8ki3cLw" ></iframe>
            </header>
        </div>
      )
}

export default YoutubeLiveStream;
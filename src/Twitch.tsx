import React, { useRef } from 'react';

import { TwitchEmbed } from 'react-twitch-embed';




const Twitch = () => {
    const embed = useRef(); // We use a ref instead of state to avoid rerenders.
    
    const handleReady = (e: undefined) => {
      embed.current = e;
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <TwitchEmbed
            channel="drewvpopc"
            id="drewvpopc"
            muted
            onVideoPause={() => console.log(':(')}
          />
        </header>
      </div>
    );
  }
  
  export default Twitch;
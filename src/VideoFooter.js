import { MusicNote } from '@material-ui/icons';
import React from 'react';
import Ticker from 'react-ticker';
import './VideoFooter.css';

function VideoFooter() {
    return (
        <div className="videoFooter" >
            <div className="videoFooter__text">
              <h3>@UsamaMK</h3>
              <p>some desc..</p>
              <div className="videoFooter__ticker">
                  <MusicNote className="videoFooter__icon" />
                  <Ticker mode="smooth" >
                        {({index})=> (
                            <>
                            <p>I am a dev</p>
                            </>
                        )}
                  </Ticker>
              </div>
            </div>
            <img
        style={{ marginTop: "24px" }}
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
        </div>
    )
}

export default VideoFooter

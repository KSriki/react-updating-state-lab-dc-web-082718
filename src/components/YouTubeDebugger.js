// Code YouTubeDebugger Component Here
import React from 'react';

export default class YoutubeDebugger extends React.Component {


    constructor(){
        super();
        this.state ={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {
        this.setState({
            settings: {...this.state.settings,bitrate:12}
        });
    }

    handleRes = () => {
        this.setState({
            settings: {...this.state.settings,video: {...this.state.settings.video, resolution: '720p'}}
        });
    }

    render(){

        return (
            <div>
            <button className="bitrate" onClick={this.handleBitRate}>increase bitrate</button>
            <button className="resolution" onClick={this.handleRes}>change resolution</button>
            </div>
        );

    }


}

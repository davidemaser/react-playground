/**
 * Created by DAVIM on 13/04/2017.
 */
import React, {Component} from 'react';
import DataSet from '../Data/Widgets/video.json';

class VideoComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:'mp4'
        }
    }

    getVideoSource(){
        let videoObject = [];
        let MediaList = DataSet.media;
        for(let m in MediaList){
            let styles = {width: MediaList[m].dimensions.width+'px', height: MediaList[m].dimensions.height+'px'};
            videoObject.push(
                <video style={styles} poster={MediaList[m].poster}>
                <source src={MediaList[m].src} type={MediaList[m].type} />
                <track src={MediaList[m].track.src} label={MediaList[m].track.label} kind={MediaList[m].track.kind} srcLang={MediaList[m].track.lang}>{null}</track>
            </video>
            )
        }
        return(
            videoObject
        )
    }

    render(){
        return(
            <div>
                {this.getVideoSource()}
            </div>
        )
    }
}

export default VideoComponent;
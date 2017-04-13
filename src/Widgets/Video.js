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
            let mediaSource = MediaList[m].clip.enable === true ? MediaList[m].src+'#t=' + MediaList[m].clip.start + ',' + MediaList[m].clip.end : MediaList[m].src;
            videoObject.push(
                <video controls={MediaList[m].controls} autoPlay={MediaList[m].autoplay} loop={MediaList[m].loop} style={styles} poster={MediaList[m].poster}>
                <source src={mediaSource} type={MediaList[m].type} />
                <track src={MediaList[m].track.src} label={MediaList[m].track.label} kind={MediaList[m].track.kind} srcLang={MediaList[m].track.lang} default={MediaList[m].track.default}>{null}</track>
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
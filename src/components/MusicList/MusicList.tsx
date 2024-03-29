import cl from "./MusicList.module.css";
import Track from "../Track/Track";
import {FC} from "react";
import {IMusic} from "../../types/musicTypes";

type MusicListProps={
    musicList:IMusic[];
}

const MusicList:FC<MusicListProps> = ({musicList}) => {
    return (
        <div className={cl.musicList}>
            {musicList.map(music=><Track poster={music.poster} author={music.author} audio={music.audio}/>)}
        </div>
    );
};

export default MusicList;
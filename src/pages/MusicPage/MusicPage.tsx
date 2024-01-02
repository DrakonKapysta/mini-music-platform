import cl from './MusicPage.module.css'
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import MusicList from "../../components/MusicList/MusicList";
import {FC, useEffect, useState} from "react";
import {IMusic} from "../../types/musicTypes";


const MusicPage:FC = () => {
    const [music, setMusic] = useState<IMusic[]>([]);
    useEffect(()=>{
        console.log('list init');
    },[])
    return (
        <div className={cl.wrapper}>
            <MusicList musicList={music}/>
            <MusicPlayer/>
        </div>
    );
};

export default MusicPage;
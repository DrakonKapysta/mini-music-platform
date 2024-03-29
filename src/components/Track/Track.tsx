import cl from './Track.module.css';
import {FC} from "react";
import {IMusic} from "../../types/musicTypes";


const Track:FC<IMusic> = ({poster,author}) => {
    return (
        <div className={cl.track}>
            <div className={cl.track__poster}>{poster}</div>
            <div className={cl.track__about}>
                <p className={cl.track__author}>{author}</p>
                <p className={cl.track__duration}>4.21</p>
            </div>
        </div>
    );
};

export default Track;
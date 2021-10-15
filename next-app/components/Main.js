import Image from 'next/image'
import { IconlyProvider, Home, Notification, Folder, Bookmark, Setting, TimeCircle, Logout } from 'react-iconly'
import style from '../styles/Main.module.css'
function Main () {
    return (
        <div className={style.na_sideBar_container}> 
            <a href='#' className={style.logo_app}><h1>.L</h1></a>
            <a href='#'>
                <Home   
                 set="light"
                className={style.icon_color}/>
             </a>
             <a href='#'>
                <Folder   
                 set="light"
                className={style.icon_color}/>
             </a>
             <a href='#'>
                <TimeCircle
                 set="light"
                className={style.icon_color}/>
             </a>
             <a href='#'>
                <Bookmark
                 set="light"
                className={style.icon_color}/>
             </a> 
             <a href='#'>
                <Setting
                 set="light"
                className={style.icon_color}/>
             </a>
             <a href='#'>
                <Logout
                 set="light"
                className={style.icon_color}/>
             </a>
             
        </div>
    )
}

export default Main
import {  Home,  Folder, Bookmark, TimeCircle, Logout } from 'react-iconly'
import style from '../styles/Main.module.css'
const Mainlink = ({icon}) => {
   return <a href="">
      {icon}
   </a>
}
function Main () {
    return (
        <div className={style.na_sideBar_container}> 
            <a href='#' className={style.logo_app}><h1>.L</h1></a>
            <Mainlink icon={<Home  set="light" className={style.icon_color}/>}/>
            <Mainlink icon={<Folder  set="light" className={style.icon_color}/>}/>
            <Mainlink icon={<TimeCircle  set="light" className={style.icon_color}/>}/>
            <Mainlink icon={<Bookmark  set="light" className={style.icon_color}/>}/>
            <Mainlink icon={<Logout  set="light" className={style.icon_color}/>}/>
        </div>
    )
}

export default Main
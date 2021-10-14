import Image from 'next/image'
import { IconlyProvider, Home, Notification, Folder, Bookmark, Setting, TimeCircle, Logout } from 'react-iconly'
import vid from '../components/BL.png'
import style from '../../styles/Main.module.css'
function Main () {
    return (
        <div className={style.naMain}> 
            <Image src={vid} />
            
            <a href='#'>
                <Home   
                 set="light"
                primaryColor='#a6afff'/>
             </a>
             <a href='#'>
                <Folder   
                 set="light"
                primaryColor='#a6afff'/>
             </a>
             <a href='#'>
                <TimeCircle
                 set="light"
                primaryColor='#FFF'/>
             </a>
             <a href='#'>
                <Bookmark
                 set="light"
                primaryColor='#a6afff'/>
             </a> 
             <a href='#'>
                <Setting
                 set="light"
                primaryColor='#a6afff'/>
             </a>
             <a href='#'>
                <Logout
                 set="light"
                primaryColor='#a6afff'/>
             </a>
             
        </div>
    )
}

export default Main
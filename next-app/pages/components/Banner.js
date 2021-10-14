import {useState} from 'react'
import {Search, Notification, Calendar, ChevronDown} from 'react-iconly'
import Image from 'next/image'
import style from '../../styles/Banner.module.css'
import logo from '../components/Assets/5.png'
function Banner () {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}
    return (
        <div className={style.naBanner}>
            <nav>
            <a href='#' className={style.btnSearch}>
                <Search   
                 set="light"
                primaryColor='#757579'/>
             </a>
                <input 
                    onChange={handleInput} 
                    className={style.search} 
                    placeholder='Search'>
                </input>
            </nav>
            <nav className={style.naDate}>
                <Calendar/>
                <a>15 may - 23 june</a>
            </nav>
            
            <nav className={style.UserProfile}>
                <a href='#' className={style.notif}><Notification/></a>
                <div  className={style.profile}><Image src={logo}/></div>
                
                <b>Julien Pablo</b>
                <a href="#" className={style.UserMainBtn}><ChevronDown /></a>
                
            </nav>
        </div>
    )
}

export default Banner
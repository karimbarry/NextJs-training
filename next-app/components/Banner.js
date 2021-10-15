import {useState} from 'react'
import {Search, Notification, Calendar, ChevronDown} from 'react-iconly'
import Image from 'next/image'
import style from '../styles/Banner.module.css'
import logo from '../public/Assets/5.png'
function Banner () {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}
    return (
        <div className={style.na_Banner_container}>
            <nav>
            <a href='#' className={style.na_banner_btn_search}>
                <Search   
                 set="light"
                primaryColor='#757579'/>
             </a>
                <input 
                    onChange={handleInput} 
                    className={style.na_banner_search_input} 
                    placeholder='Search'>
                </input>
            </nav>
            <nav className={style.na_banner_set_date}>
                <Calendar/>
                <a href='#'>15 may - 23 june</a>
            </nav>
            
            <nav className={style.na_banner_UserProfile}>
                <a href='#' className={style.na_banner_notifIcon}><Notification/></a>
                <div  className={style.na_banner_UserProfile_img}><Image src={logo}/></div>
                
                <b>Julien Pablo</b>
                <a href="#" className={style.na_banner_User_chevron}><ChevronDown /></a>
                
            </nav>
        </div>
    )
}

export default Banner
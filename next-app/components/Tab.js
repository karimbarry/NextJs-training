import { Archive, CheckCircle, ChevronRight, Paperclip, PieChart, Plus } from 'react-feather'
import style from '../styles/Tab.module.css'
const Sublink = ({icon, text, children}) => {
    return <button className={style.na_navigation_link}>
        <div className={style.na_navigation_link_elt}>
            <div className={style.na_navigation_link_description}>
            {icon} <a href='#'>{text}</a> 
            </div>
                <ChevronRight className={style.iconChevronRigth}/>
        </div>

        <div className={style.list__deroulante}>
            {children}
        </div>
    </button>
        
}
const Tab = () => {
    return <div className={style.na_navigation}>
        <div className={style.na_navigation_Elt}>
            <h1 className={style.na_navigation_title}>Projects</h1>
            <button className={style.na_navigation_button}>+</button>

        </div>
        <div className={style.na_navigation_link_container}>
            <Sublink icon={<Archive className={style.cat}/>} text="All project"/>
            <Sublink icon={<Paperclip className={style.cat}/>} text="Pinneds"/>
            <Sublink icon={<PieChart className={style.cat}/>} text="In process"/>
            <Sublink icon={<CheckCircle className={style.cat}/>} text="Done"/>
        </div>
    </div>
}

export default Tab
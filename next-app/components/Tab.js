import {Graph, ChevronRight, Category,Filter,ShieldDone} from 'react-iconly'
import style from '../styles/Tab.module.css'

function Tab () {
    return <div className={style.na_navigation}>
        <div className={style.na_navigation_Elt}>
            <h1 className={style.na_navigation_title}>Projects</h1>
            <button className={style.na_navigation_button}>+</button>

        </div>
        <div className={style.na_navigation_link_container}>
           <nav className={style.na_navigation_link}>
               <div  className={style.na_navigation_link_description}><Category className={style.cat}/><a href='#'>All Projects</a> </div>
               <div><ChevronRight className={style.iconChevronRigth}/></div>
               
            </nav>
            <nav className={style.na_navigation_link}>
               <div className={style.na_navigation_link_description}><Filter className={style.cat}/><a href='#'>Pinneds</a> </div>
               <div><ChevronRight className={style.iconChevronRigth}/></div>
               
            </nav>
            <nav className={style.na_navigation_link}>
               <div className={style.na_navigation_link_description}><Graph className={style.cat}/> <a href='#'>In process</a></div>
               <div><ChevronRight className={style.iconChevronRigth}/></div>
               
            </nav>
            <nav className={style.na_navigation_link}>
               <div className={style.na_navigation_link_description}><ShieldDone className={style.cat}/> <a href='#'>Done</a></div>
               <div><ChevronRight className={style.iconChevronRigth}/></div>
               
            </nav>
        </div>
    </div>
}

export default Tab
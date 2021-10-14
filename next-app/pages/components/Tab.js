import {Graph, ChevronRight, Category,Filter,ShieldDone} from 'react-iconly'
import style from '../../styles/Tab.module.css'

function Tab () {
    return <div className={style.naTab}>
        <div className={style.naTabElt}>
            <h1 className={style.h1}>Projects</h1>
            <button className={style.naAdd}>+</button>

        </div>
        <div className={style.naNav}>
           <nav className={style.nav}>
               <div><Category className={style.cat}/> </div>
               <div><a href='#'>All Projects</a></div>
               <div><ChevronRight/></div>
               
            </nav>
            <nav className={style.nav}>
               <div><Filter className={style.cat}/> </div>
               <div><a href='#'>Pinneds</a></div>
               <div><ChevronRight/></div>
               
            </nav>
            <nav className={style.nav}>
               <div><Graph className={style.cat}/> </div>
               <div><a href='#'>In process</a></div>
               <div><ChevronRight/></div>
               
            </nav>
            <nav className={style.nav}>
               <div><ShieldDone className={style.cat}/> </div>
               <div><a href='#'>Done</a></div>
               <div><ChevronRight/></div>
               
            </nav>
        </div>
    </div>
}

export default Tab
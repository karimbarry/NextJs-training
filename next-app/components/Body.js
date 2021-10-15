import style from '../styles/Body.module.css'
import {AddUser, ShieldDone} from 'react-iconly'
import Image from 'next/image'
import img1 from '../public/Assets/5.png'
import img2 from '../public/Assets/1.png'
import img3 from '../public/Assets/2.png'
import img4 from '../public/Assets/3.png'
import img5 from '../public/Assets/4.png'

function Body() {
    return <div className={style.naContainerTimeViewer}>
        <div className={style.na_Body_view1}>
            <div className={style.na_Body_view1_container}>
                <div className={style.na_Body_view1_imgs}>
                    <div className={style.img}><Image src={img1}/></div> 
                    <div className={style.img}><Image src={img2}/></div> 
                    <div className={style.img}><Image src={img3}/></div> 
                    <div className={style.img}><Image src={img4}/></div> 
                    <div className={style.img}><Image src={img5}/></div> 
                </div>
                <button className={style.na_Body_view1_add_userButton} >
                <AddUser className={style.na_Body_view1_add_icon}/>
                <a> Invite People</a>
                </button>
            </div>
            <div className ={style.na_Body_view1_timeSheet}>
                <div className ={style.na_Body_view1_timeSheetHead}>
                    <h1>Timesheet</h1>
                    <div className={style.na_Body_view1_Task}>
                        <button className={style.na_Body_view1_AllTask}>All tasks</button>
                        <button className={style.na_Body_view1_MyTask}>My tasks</button>
                    </div>
                </div>
                <div className ={style.na_Body_view1_timeSheetBody}>
                        <div> 
                            <ShieldDone/>
                            <a> E-commerce integration</a>
                        </div>
                        <div>
                            <ShieldDone/>
                            <a> Illustration for dribbble</a></div>
                        <div> 
                            <ShieldDone/>
                            <a> Design system update</a></div>
                        <div> 
                            <ShieldDone/>
                            <a> E-commerce integration</a></div>
                </div>
            </div>
 
        </div>
        <div className={style.na_Body_view2}>
            
        </div>
    </div>
}

export default Body
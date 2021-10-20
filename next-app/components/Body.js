import style from '../styles/Body.module.css'
import { Circle, Plus, UserPlus ,CheckCircle, PlayCircle, PauseCircle, MoreHorizontal } from 'react-feather'
import Image from 'next/image'
import img1 from '../public/Assets/5.png'
import img2 from '../public/Assets/1.png'
import img3 from '../public/Assets/2.png'
import img4 from '../public/Assets/3.png'
import img5 from '../public/Assets/4.png'

const Task = ({icon, text, time, color, progress ='100', img, iconLaunch}) => {
   return <div className={style.na_tasks}>
        <div className={style.na_tasks_descrip}>
            {icon}
            <a> {text} </a>
            <span style={{height: "6px",width :'6px', background: color, borderRadius: "50%"}}></span>
        </div>
        <div className={style.na_tasks_process}>
                <div  style={{height: "2px", background: "#b9bcbe", width: "100%", borderRadius: "6px"}}>
                    <div style={{width: progress + "%", background: color, height: "100%", borderRadius: "6px"}}></div>
                </div>
                <div className={style.time}>
                    <a>{time}</a>                 
            </div>
            <div className={style.userControl}>
                {iconLaunch}
                <div className={style.img}>{img}</div> 
            </div>
        </div>
        
    </div>
}
const Action = ({img, name, time, actionDescription}) =>{
    return <div className={style.actionUser}>
        <div>{img}</div>
        <div className={style.USerInfoTask}>
            <div className={style.USerInfo}>
                <b>{name}</b>
                <p>{actionDescription}</p>
            </div>
                <b className={style.tim}>{time}</b>
        </div>
    </div>
}
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
                <UserPlus className={style.na_Body_view1_add_icon}/>
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
                <Task icon={<Circle style={{color: '#b9bcbe', height:'20px'}}/>} 
                    text={'E-commerce integration'} progress='75' 
                    color='#1856b3' time='00:25:15'
                    iconLaunch={<PlayCircle style={{color: '#b9bcbe',height:'18px'}} />} 
                    img={<Image src={img5} />}/>

                 <Task icon={<Circle style={{color: '#b9bcbe', height:'20px'}}/>} 
                    text={'Illustration for dribbble'} progress='45' 
                    color={'#f1cb81'} time={'00:08:15'}
                    iconLaunch={<PlayCircle style={{color: '#b9bcbe',height:'18px'}} />} 
                    img={<Image src={img2} />}/>

                <Task icon={<Circle style={{color: '#b9bcbe', height:'20px'}}/>} 
                    text={'Illustration for dribbble'} progress='45' 
                    color={'#f1cb81'} time={'00:08:15'}
                    iconLaunch={<PauseCircle style={{color: '#1856b3',height:'18px'}} />} 
                    img={<Image src={img4} />}/>

                <Task icon={<CheckCircle style={{color: '#1856b3', height:'20px'}}/>} 
                    text={'Illustration for dribbble'} progress='100' 
                    color={'#1856b3'} time={'01:02:14'}
                    iconLaunch={<PlayCircle style={{color: '#b9bcbe',height:'18px'}} />} 
                    img={<Image src={img1} />}/>    
              </div> 
            </div>
 
        </div>
        <div className={style.na_Body_view2}>
            <div className={style.na_Body_view2_container}>
                <div className={style.na_Body_view2_header}>
                    <h1>Time Tracking</h1>
                    <MoreHorizontal style={{color : '#b9bcbe'}}/>
                </div>
                <div className={style.na_Body_view2_Time}>
                    <div className={style.title}>Design system update</div>
                    <div className={style.time}><b>00:08:15</b></div>
                    <div className={style.play}><PlayCircle size ='70px' fill ='#1856b3' stroke-width="1" color='hsl(200deg 33% 98%)'/></div>
                </div>
            <div className={style.actionList}>
                <div className={style.actionHeader}>
                    <h1>Last actions <a className={style.actionNumber}>(12)</a></h1>
                    <button className={style.na_Body_view1_AllTask}>See all</button>
                </div>
                <div className={style.actionListUsers}>
                    <Action img={<Image src={img2} className={style.actionProfile}/>} 
                    name={'Josephine Monroe'}
                    actionDescription ={"'Paused', Illustration for dribbble"}
                    time={'14:45 pm'}
                    />

                    <Action img={<Image src={img3} className={style.actionProfile}/>} 
                    name={'Jackeline Monroe'}
                    actionDescription ={"'Started', Update deseign system"}
                    time={'14:40 pm'}
                    />
                    
                </div>
                
            </div>
                
            </div>
        </div>
    </div>
}

export default Body
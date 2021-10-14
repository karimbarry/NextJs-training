import Banner from './Banner'
import Main from './Main'
import Tab from './Tab'
import Body from './Body'
function App(){
   return <div className='na-container'> 
       <Main />
       <Tab />
       <section className='na-body-container' >
            <Banner/>
            <Body/>
        </section>
       </div> 
}

export default App
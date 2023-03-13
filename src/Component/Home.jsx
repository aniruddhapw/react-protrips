import React,{useState} from 'react'
import HomeComponent from './HomeComponent';
import AddTripComponent from './AddTripComponent';
import ListComponent from './ListComponent';
import { House, CalendarPlus, Table } from 'phosphor-react';
const trips1 = {
}

function Home() {
    const [val, setVal] = useState('Home');
    const [trips, setTrips] = useState(trips1);
  return (
    <div>
        <div className="main-body">
      <div id='left-nav'>
        <House className="nav-buttons" size={52} color="#ffffff" weight="fill"
          onClick={() => {setVal('Home')}}
        />
        <CalendarPlus className='nav-buttons' size={52} color="#ffffff" weight="fill"
          onClick={() => {setVal('AddTrip')}}
        />
        <Table className="nav-buttons" size={52} color="#ffffff" weight="fill"
          onClick={() => {setVal('ListTrips')}}
        />
      </div>
      <SetBody data={trips} body={val} clickHandler={setTrips}/>
    </div>
    </div>
  )
}

function SetBody(props) {
    switch (props.body){
      case 'Home':
        let totalTrips = Object.keys(props.data).length, treks = 0, tropics = 0, clubs = 0;
        Object.keys(props.data).forEach(key => {
          switch (props.data[key].type){
            case 'Trek':
              treks+=1
              break;
            case 'Tropic':
              tropics+=1
              break;
            case 'Club':
              clubs+=1
              break;
            default:
          }
        })
        return <HomeComponent totalTrips={totalTrips} treks={treks} tropics={tropics} clubs={clubs}/>
      case 'AddTrip':
        return <AddTripComponent data={props.data} clickHandler={props.clickHandler} />
      case 'ListTrips':
        return <ListComponent data={props.data} />
      default:
  
    }
  }

export default Home
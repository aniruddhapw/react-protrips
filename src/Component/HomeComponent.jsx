import React, { Component } from 'react';
// import './HomeComponent.css'
import { SunDim, Mountains, Martini } from 'phosphor-react';

class HomeComponent extends Component {
    render() {
        return (
            <div className='home-component'>
                <div id='totalTrips'>{this.props.totalTrips}<span className='trips'>trips</span></div>
                <br/><br/>
                <div id='tripLogs'>
                    <span>{this.props.tropics}
                        <SunDim className='icons' size={20} color="#ffffff" weight="fill" />
                    </span>
                    <span>{this.props.treks}
                        <Mountains className='icons' size={20} color="#ffffff" weight="fill" />
                    </span>
                    <span>{this.props.clubs}
                    <Martini className='icons' size={20} color="#ffffff" weight="fill" />
                    </span>
                </div><br/><br/><br/>

                
                <div id='progressBarContainer'><div id='progressBar'><></></div><span  id='progress'>23%</span></div>
            </div>
        );
    }
}

export default HomeComponent;
import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data    
        }
        // this.state = {
        //     data: data +1
        // }
    }
   
    
    render() {      
        return(
            <div>
                {/* {this.state.data.map((beast, index) => ( */}
                    <HornedBeasts 
                        key={index}
                        animalName={beast.title}
                        imageURL={beast.image_url} 
                        description={beast.description}
                        
                    />    
                ))}
            </div>
        )
    }
}


export default Main;

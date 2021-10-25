import { Component } from "react";

class HornedBeasts extends Component {
    render() {
        return(
            <section>
                <h2>{this.props.animalName}</h2>
                <img src = {this.props.imageURL} alt = {this.props.description} title = {this.props.title}/>
                <p>{this.props.descriptionOfAnimal}</p>
            </section>    
        )
    }
}

export default HornedBeasts;

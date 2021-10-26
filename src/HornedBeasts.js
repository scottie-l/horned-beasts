import { Component } from "react";

class HornedBeasts extends Component {
    handleClick = () => {
        console.log('clicked')
        this.setState({data: this.state.data +1});
    }
    render() {
        return(
            <section>
                <h2>{this.props.animalName}</h2>
                <img onClick = {this.handleClick} src = {this.props.imageURL} alt = {this.props.description} title = {this.props.animalName}/>
                <p>{this.props.description}</p>
            </section>    
        )
    }
}

export default HornedBeasts;

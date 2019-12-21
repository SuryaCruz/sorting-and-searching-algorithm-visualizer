import React, { Component } from 'react';
import {
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Button
} from 'reactstrap'

class NavBar extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="navBar">
                <div className = "arrayInput">
                    <InputGroup>
                        <InputGroupAddon addonType = "prepend"><Button size = "sm" color = "primary">Random</Button></InputGroupAddon>
                        <Input placeholder = "eg: [ 1 , 2 , 3 ]" size = "sm"/>
                    </InputGroup>
                </div>
                <div className = "algorithms">
                    <Button color = "info" size = "mb" className = "buttonPadding"> Binary Search </Button>
                    <Button color = "info" size = "mb" className = "buttonPadding"> Linear Search </Button>
                    <Button color = "info" size = "mb" className = "buttonPadding"> Selection Sort </Button>
                    <Button color = "info" size = "mb" className = "buttonPadding"> Bubble Sort </Button>
                </div>
            </div>
        )

    }
}

export default NavBar;
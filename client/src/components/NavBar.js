import React, { Component } from 'react';
import {
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Button,
    ButtonGroup
} from 'reactstrap'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {search: true};
        this.setSearch = this.setSearch.bind(this);
        this.setSort = this.setSort.bind(this);
    }

    setSearch(){
        this.setState({search:true});
    }

    setSort(){
        this.setState({search:false});
    }

    render(){
        var show = this.state.search;
        const search = (
            <div className = "algorithms">
                <Button color = "info" size = "mb" className = "buttonPadding"> Binary Search </Button>
                <Button color = "info" size = "mb" className = "buttonPadding"> Linear Search </Button>
            </div>
        );

        const sort = (
            <div className = "algorithms">
                <Button color = "info" size = "mb" className = "buttonPadding"> Selection Sort </Button>
                <Button color = "info" size = "mb" className = "buttonPadding"> Bubble Sort </Button>
            </div>
        );
        
        var alg = search;

        if(show){
            alg = search;
        }else{
            alg = sort;
        }



        return(
            <div className="navBar">
                <div className = "arrayInput">
                    <InputGroup>
                        <InputGroupAddon addonType = "prepend"><Button size = "sm" color = "primary">Random</Button></InputGroupAddon>
                        <Input placeholder = "eg: [ 1 , 2 , 3 ]" size = "sm"/>
                    </InputGroup>
                </div>
                <ButtonGroup className = "buttons">
                            <Button color="success" onClick={this.setSearch} >Searching</Button>
                            <Button color="danger" onClick={this.setSort} >Sorting</Button>
                </ButtonGroup>
                {alg}
                
            </div>
        )

    }
}

export default NavBar;
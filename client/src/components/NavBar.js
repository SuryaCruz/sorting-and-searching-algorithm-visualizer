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
        this.state = {search: true,array:[],check: false};
        this.setSearch = this.setSearch.bind(this);
        this.setSort = this.setSort.bind(this);
        this.changeArray = this.changeArray.bind(this);
    }

    setSearch(){
        this.setState({search:true, array: this.state.array, check: this.state.check});
    }

    setSort(){
        this.setState({search:false, array: this.state.array, check: this.state.check});
    }

    changeArray(e){
        var invalid = false;
        var input = e.target.value.split("");
        var stri = "";
        for (var i of input){
            if(!(i === '[' || i === ']' || i === ' ' || i === ',' || (i >= '0' && i <= '9'))){
                invalid = true;
                numbers = [];
                break;
            }else{
                if(!(i === '[' || i === ']' || i === ' ')){
                    stri = stri + i;
                }
                var numbers = stri.split(",");
                if(numbers[numbers.length-1] === ""){
                    numbers.pop();
                }
                for (var c = 0; c < numbers.length; c++){
                    numbers[c] = Number(numbers[c]);
                }   
            }
            
        }
        console.log(numbers);
        this.setState({search:this.state.search, array: numbers,check: invalid});
    }
    

    render(){
        var input = this.state.array;
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
                        <Input invalid = {this.state.check} placeholder = "eg: [ 1 , 2 , 3 ]" size = "sm" onChange = {this.changeArray}/>
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
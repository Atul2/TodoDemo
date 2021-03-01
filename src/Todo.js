import React, { Component } from 'react';
import ListView from './ListView';

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: "",
            todoItems:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
    }

    onChangeHandler(event){
        var inputVal = event.target.value;
        this.setState({
            item:inputVal
        })
    }

    addData() {
        var inputVal = this.state.item;
        var iteminstance = this.state.todoItems;
        iteminstance.push(inputVal);
        this.setState({
            todoItems: iteminstance,
            item:''
        })
        console.log(this.state.todoItems)
    }

    delete(id) {
        // var id = event.target.id;
        var iteminstance = this.state.todoItems;
       iteminstance.splice(id,1);
        this.setState({
            todoItems:iteminstance
        })
        console.log(id);
    }
    

    render() {
        // var itemlist = this.state.todoItems.map((e, i) => 
        //     <li key={i}>{e}<span onClick={this.delete} id={i}>X</span></li>
        // )
    return (
        <>  <h1>Class Based Todo App </h1>          
            <div className="footer">
                <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                <button onClick={this.addData}>Add</button>
            </div>
            <ListView itemlist={this.state.todoItems} deleteThisITem={this.delete} />
     </>
    );
  }
}

export default Todo;

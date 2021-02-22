import React, { Component } from 'react';


class ListViewCompo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: "",
            todoItems:[]
        }
    }
    render() {
        console.log(this.props);
    return (
        <>
            
            <div>
            {this.props.itemlist && this.props.itemlist.map((e, i) =>
                <li key={i}>{e}<span onClick={e => { e.preventDefault(); this.props.deleteThisITem(i); }} id={i}><b>   X</b></span></li>
            )
            }
            </div>
           
     </>
    );
  }
}

export default ListViewCompo;

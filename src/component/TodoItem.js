import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: props.todo.completed
        }
        this.change = this.change.bind(this);
    }
    change() {
        // first way
        // this.setState({isDone:!this.state.isDone});

        // second way
        this.setState(prevState=>{return{isDone:!prevState.isDone}});

    }
    render() {
        const { text, completed } = this.props.todo;

        return (
            <div className='todo-item'>
                <h1 style={{ display: 'inline' }}>{this.state.isDone ? <del> {text}</del> : text}</h1>
                <input onChange={this.change} type="checkbox" checked={this.state.isDone} />
            </div>
        )
    }
}

// export default (props)=>{
//     const {text,completed}=props.todo;
//     const [isDone,setIsDone]=React.useState(completed);
//     function change(){
//         setIsDone(!isDone);
//     } 

//     return(
//         <div className='todo-item'>
//            <h1 style={{display:'inline'}}>{isDone ? <del> {text}</del>:text}</h1>
//             <input onChange={change} type="checkbox" checked={isDone}/>
//         </div>
//     )
// }
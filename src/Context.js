import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact.id !== action.payload )
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [ action.payload, ...state.contacts]
            };   
        default:
            return state;
    }
};

export class Provider extends Component{
    state = {
        contacts : [ ],
        dispatch : action => this.setState( state => reducer(state, action))
    };
            // {
            //     id    : 1,
            //     name  : 'Kushal Doshi',
            //     email : 'kushal1@gmail.com',
            //     phone : '222-222-2222'
            // },
            // {
            //     id    : 2,
            //     name  : 'Devam Agrawal',
            //     email : 'devam2@gmail.com',
            //     phone : '555-555-5555'
            // },
            // {
            //     id    : 3,
            //     name  : 'Kunj Patel',
            //     email : 'kunj3@gmail.com',
            //     phone : '999-999-9997'
            // },
            // {
            //     id    : 4,
            //     name  : 'Harshil Shah',
            //     email : 'harshil4@gmail.com',
            //     phone : '333-333-3339'
            // }
            // email : '', phone : '', id : '', name:  ''


    // componentDidUpdate(){
    //     alert("You are going to delete a contact")
    // }

    async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(response => response.json())

            this.setState({ contacts : res.data })
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
} 

export const Consumer = Context.Consumer;
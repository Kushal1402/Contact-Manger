import React, { Component } from 'react'
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context'
import axios from 'axios';

class EditContact extends Component {
  state = {
     name : '',
     email : '',
     phone : '',
     showContactInfo : false,
     errors : {}
   };

   async componentDidMount(){
    const { id } = this.props.match.params;
    const res = await axios.get('https://jsonplaceholder.typiode.com/users')

    const contact = res.data({
        name : contact.name,
        email : contact.email,
        phone : contact.phone
    })
   }

    onSubmit = async (dispatch, e) => {

        e.preventDefault();

        const { name, email, phone } = this.state;


        //Check for field errors
        if (name === ''){
            this.setstate({ errors : { name : 'Name is required '}});
            return;
        }
        if (email === '') {
            this.setState({ errors : { email : ' Email is required'}});
            return;
        }
        if (phone === '') {
            this.setState({ errors : { phone : 'Phone number is required'}});
            return;
        }

        //To clear the state
        this.setState({
            name: '',
            email : '',
            phone : '',
            errors : {}
        });

        this.props.history.push('/')
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value 
    });

  render() {
    const { name, email, phone, errors} = this.state;
    const { showContactInfo } = this.state;

    return (
        <Consumer>
            {value => { const { dispatch } = value;
                return (
                    <div className='card mb-4'>
                        <div className="card-header">
                            <h3>Edit Contact <i onClick={ () => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down"/></h3>
                        </div>

                        {showContactInfo ? (
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind (this, dispatch)}>
                                    <TextInputGroup 
                                        label= 'Name' name = 'name' placeholder= 'Enter your name' value= {name} onChange = {this.onChange} type= 'name' error = {errors.name}
                                    />
                                    <TextInputGroup 
                                        label= 'Email' name = 'email' placeholder= 'Enter your email' value= {email} onChange = {this.onChange} type = 'email' error = {errors.email}
                                    />
                                    <TextInputGroup 
                                        label= 'Phone' name = 'phone' placeholder= 'Enter your number' value= {phone} onChange = {this.onChange} type = 'phone' error = {errors.phone}
                                    />
                                    <div class="d-grid col-6 mx-auto">
                                        <input class="btn btn-danger mt-2" value="Update Contact" type="submit" />
                                    </div>  
                                </form>
                            </div>
                        ) : null } 
                    </div>
                )

            }}
        </Consumer>
    )
  }
}

export default EditContact
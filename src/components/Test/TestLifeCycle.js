import React, { Component } from 'react'

class TestLifeCycle extends Component {

  state = {
    email : '',
    phone : '',
    id : '',
    name:  ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => this.setState({
        id : data.id,
        name  : data.name,
        email : data.email,
        phone : data.phone
       }) 
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {favColor : 'red', color : 'red'}
  //   // this.state = { color : 'blue'}
  // }

  // handleColorChange = (newColor) => {
  //   this.setState({
  //     color : newColor
  //   })
  // }
  // componentDidMount() {
  //   // console.log('Component did mount...')
  //   this.timer = setTimeout(() => {
  //     this.handleColorChange('green')
  //     this.setState( {favColor : 'green' })
  //   }, 3000);
  // }
  
  // componentDidUpdate() {
  //   alert("Your favourite color is changing")
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log ('componentWillUpdate is here')
  // }

  // componentWillUnmount() {
  //    console.log({ todayDate: new Date(Date.now())});
  //    clearTimeout(this.timer)
  //  alert('Component will unmount is run')
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState){
  //   console.log('Component will recieve update')
  // } // It is more used in redux
  
  // shouldComponentUpdate() {
  //   return true;
  // }

  // static getDerivedStateFromProps(props, state){ 
  //   return { favColor }
  // }
  
  // componentWillUnmount() {
  //   console.log('component will mount...')
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('Here is the snapshot before updating');
  // }
  
  render() {

    const {name, phone, email} = this.state;

    return (
      <div className='container'>
        <h1 style={{textAlign : 'center'}}>TESTING SITE</h1>
        <br />
        <p style={{textAlign : 'center'}}>Life-Cycle testing component <i class="fa fa-arrow-down" aria-hidden="true"></i></p>

        {/* <h3 style={{textAlign : 'center', background : this.state.color}}>My favourite Color is {this.state.favColor} </h3> */}

        {/* <button type='button' onClick={this.state.favColor}>Change color here</button> */}
        <div className='row'>
          <h4>Name  :  { name  }</h4>
          <h6>Email :  { email }</h6>
          <h6>Phone :  { phone }</h6>
        </div>

      </div>
    )
  }
}

export default TestLifeCycle
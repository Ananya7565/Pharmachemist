
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import Stylesheet from '../src/components/Stylesheet'

//next few lines
//import ScriptTag from 'react-script-tag';
//const Demo = props => (
//<ScriptTag type="text/javascript" src="/signupfront/src/aditicode/aditijs.js" />
//)





class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName :'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        
        //next line
      // <div className='tick'>
        // document.write("you have been registered');
        //</div>
        const registered = {
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/app/signup',registered)
            .then(response => console.log(response.data))

            //for home page
            //window.location = '/'
          //  window.location='file:///C:/Users/Ananya/OneDrive/Desktop/loginmongo/signupfront/src/newpage.html';
         // window.location='/homepage'
            //npm start
          //  window.location.replace('http://mywebsite.com/home.html');
        window.location.replace('file:///C:/Users/Ananya/OneDrive/Desktop/loginmongo/signupfront/src/loginold.html');
            
        //next para
           this.setState({
          fullName:'',
           username:'',
            email:'',
          password:''
           })
          //till here
        //  window.location='file:///C:/Users/Ananya/OneDrive/Desktop/loginmongo/signupfront/src/homepage.html';
    }
    render() {
        return(
            <div>
                <div className='container'>
                    <div className='box'>
                        <Stylesheet/>
                        <form onSubmit={this.onSubmit}> 
                            <div className='input-container'>
                            <input type = 'text'
                           placeholder='Fullname'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            required=""
                            />
                           
                            </div>

                            <div className='input-container'>
                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            />
                            
                            </div>

                            <div className='input-container'>
                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            />
                           
                            </div>

                            <div className='input-container'>
                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            />
                            
                            </div>

                         <input type='submit' className='btn' value='Submit' />
                        
                        </form>
                        
                    </div>
                </div>
            </div>
         );
    }
}
//next
//const result = await User.findOne({ _id: userID }).select("_id").lean();
//if (result) {
    // user exists...
//}
//above


export default App;    





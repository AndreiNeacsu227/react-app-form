import React from 'react';
import "../css/UserAddForm.css"

class UserAddForm extends React.Component{

    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            id: 0
        }
    }

    handleNameChange(event){
        
            this.setState({name:event.target.value})
        
    }

    handleEmailChange(event){
        
            this.setState({email:event.target.value})
        
    }


    addKey(){
        let maxId = 0;
         this.props.users.forEach(element => {
             if (element.id > maxId){
                 maxId = element.id;
             }
         })

         maxId ++;
        return maxId;
    }


    handleSubmit(event){
        event.preventDefault();
        console.log(this.addKey());

        if (this.state.name !==""){
        const user = {
            name: this.state.name,
            email: this.state.email,
            id: this.addKey()
        }

        this.props.addUser(user);
        this.props.warning("");
    }else{
        this.props.warning("The name field must not be empty");
    }
    }





    render(){

        return(
            <div class="user-add-form">
                
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <h4>Add new user</h4>
                <table>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <td><input type="text" id="name"  onChange={(event) => this.handleNameChange(event)}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input type="email" id="email" onChange={(event) => this.handleEmailChange(event)}/></td>
                    </tr>
                    <tr>
                        <td  class="sub-but" colSpan={2}><input type="submit" value="submitt"/></td>
                    </tr>
                </table>
            </form>
            </div>
        )
    }
}


export default UserAddForm
import React from 'react';
import UserItem from './UserItem'
import '../css/UserList.css'

class UserList extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        const {users,deleteUser} = this.props;

        return(
            <table className="user-table">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete User</th>
            </tr>
                {
                    users.map((user,index)=>{
                        return <UserItem 
                                name={user.name}
                                email={user.email}
                                id={index}
                                idd={user.id}
                                deleteUser={deleteUser}
                                key={user.id}
                                />
                    })
                }
            

            </table>
            
        )
    }

}


export default UserList;
import React from 'react';


function UserItem(props){
    const {name,email,id,idd,deleteUser} = props;

 

    return(
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td><button value={id} onClick={()=> deleteUser(id)}>Delete User</button></td>
            </tr>
    )


}



export default UserItem;
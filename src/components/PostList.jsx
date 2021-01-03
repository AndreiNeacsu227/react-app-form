import React from 'react'
import PostItem from './PostItem'


class PostList extends React.Component{

    

    render(){

        const{posts} = this.props;

        return(
            <div>
                {
                    posts.map((item,index) => {
                        return <PostItem 
                                title={item.title}
                                content={item.content}
                                
                                />
                    })
                }
            </div>
        )
    }


}




export default PostList;
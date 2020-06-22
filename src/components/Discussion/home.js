import axios from "axios";

import React, { useState, useEffect } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Container from '@material-ui/core/Container';

import Feed from './feed'
import { withRouter } from "react-router-dom";
import { getAllPosts , deletePost } from "../../redux/actions/postActions";
import { connect } from "react-redux";
function SimpleContainer(props) {
    const [feeds, setFeeds] = useState([0,1,2,3,4])

    const [posts, setPosts] = useState([]);
 
    useEffect(()=>{
      props.getAllPosts();
    },[])

    useEffect(()=>{
      if(JSON.stringify(posts) == JSON.stringify(props.posts)) {

      } else {
        setPosts(props.posts);
      }
    }, [posts, props.posts])
    

    function buttonRoute (){
        props.history.push('/league/NewPost')
    }
  return (

    <div>
        
          <Container maxWidth="lg">
            <div style={{ height: "5vh" }} />  
            {
              posts.length ?
                posts.map(item => (
                    <Feed  deletePost={deletePost} feed={item} />
                ))
              :
                  <div>NO POSTS</div>
            }
            
            <div style={{ height: "2vh" }} /> 
            <Fab color="primary" style={{position: "fixed",bottom:"5vh", right: "22vw"}}aria-label="add" onClick={buttonRoute}>
        <AddIcon />
      </Fab>
          </Container>
          
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    posts: store.postReducer.posts
  }
}

export default connect(mapStateToProps, { getAllPosts })(withRouter(SimpleContainer))
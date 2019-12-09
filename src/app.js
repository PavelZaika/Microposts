import { http } from "./http";
import { ui } from "./ui";

// get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

//Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);


// Get posts
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then(data => ui.showPost(data))
    .catch(err => console.log(err));
}

//Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title: title,
    body: body
  };

  // Create Post
  http.post("http://localhost:3000/posts", data)
    .then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearField();
      getPosts();
    })
    .catch(err => console.log(err));
    
    
}

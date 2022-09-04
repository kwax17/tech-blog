const loginFormHandler = async function(event) {
    event.preventDefault();
    const usernameEl = document.querySelector("#username-login");
    const passwordEl = document.querySelector("#password-login");
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

function logout() {
    fetch("/api/user/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
    .then(function() {
      document.location.replace("/");
    })
    .catch(err => console.log(err));
};

const signupFormHandler = async function(event) {
    event.preventDefault();
    const usernameEl = document.querySelector("#username-signup");
    const passwordEl = document.querySelector("#password-signup");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

const newPostHandler = async function(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    document.location.replace("/dashboard");
};

const newCommentHandler = async function(event) {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
};

// login
document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);
// logout
document.querySelector("#logout").addEventListener("click", logout);
// signup
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
// post
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostHandler);

// comment
document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);
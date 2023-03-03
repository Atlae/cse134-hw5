import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify/dist/purify.es.min.js";

const postContainer = document.getElementById('post-container');
const addPostButton = document.getElementById('add-post');
const postTemplate = document.getElementById('post-template');
const dialog = document.getElementById("add-post-dialog");
const confirmDialog = document.getElementById("confirm-dialog");

let posts = [];

export function alert(message) {
    dialog.innerHTML = document.getElementById("alert-template").innerHTML;
    dialog.querySelector("form > p").textContent = message;
    dialog.showModal();
}

export function confirm(message, callback) {
    confirmDialog.innerHTML = document.getElementById("confirm-dialog").innerHTML;
    confirmDialog.querySelector("form > p").textContent = message;
    confirmDialog.showModal();
    confirmDialog.addEventListener("close", function handler() {
        callback(confirmDialog.returnValue);
        confirmDialog.close();
        this.removeEventListener("close", handler);
    });
}

export function prompt(message, callback) {
    dialog.querySelector("form > p").textContent = message;
    dialog.showModal();
    
    dialog.addEventListener("close", function handler() {
        console.log(dialog.returnValue);
        console.log(typeof dialog.returnValue)
        let returned = [
            dialog.querySelector("input[name='title']").value ?? null,
            dialog.querySelector("input[name='date']").value ?? null,
            dialog.querySelector("textarea").value ?? null
        ]
        callback(
            dialog.returnValue == 'true' ? 
            (returned.some((value) => value === '') ? null : returned) 
            : null);
        dialog.close();
        this.removeEventListener("close", handler);
    });
}

export function editPost(post) {

    prompt('Edit the blog post', (result) => {
        if (result !== null) {
            console.log(result)
            
            post.querySelector('.title').textContent = DOMPurify.sanitize(result[0]);
            post.querySelector('.date').textContent = DOMPurify.sanitize(result[1]);
            post.querySelector('.summary').textContent = DOMPurify.sanitize(result[2]);
        }
    });
}

export function deletePost(post) {
    confirm('Are you sure you want to delete this post?', (result) => {
        if (result === "true") {
            postContainer.removeChild(post);
        }
    });
}


// NOTES FOR GARY IN THE MORNING:
// why is addPostButton.addEventListener firing for all posts
addPostButton.addEventListener('click', () => {
    dialog.querySelector("input[name='title']").value = null;
    dialog.querySelector("input[name='date']").value = null;
    dialog.querySelector("textarea").value = null;
    prompt('Fill out the blog post', (result) => {
        if (result !== null) {
            console.log(result);
            const post = postTemplate.content.firstElementChild.cloneNode(true);
            const title = post.querySelector('.title');
            const date = post.querySelector('.date');
            const summary = post.querySelector('.summary');
            const editButton = post.querySelector('.edit');
            const deleteButton = post.querySelector('.delete');

            title.textContent = DOMPurify.sanitize(result[0]);
            date.textContent = DOMPurify.sanitize(result[1]);
            summary.textContent = DOMPurify.sanitize(result[2]);
            console.log(typeof post);
            console.log(post);
            
            editButton.addEventListener('click', () => {
                console.log(post);
                dialog.querySelector("input[name='title']").value = post.querySelector('.title').innerHTML;
                dialog.querySelector("input[name='date']").value = post.querySelector('.date').innerHTML;
                dialog.querySelector("textarea").value = post.querySelector('.summary').innerHTML;
                
                editPost(post)
            });

            deleteButton.addEventListener('click', () => deletePost(post));

            postContainer.appendChild(post);
        }
    });
});

(function () {
    
})();
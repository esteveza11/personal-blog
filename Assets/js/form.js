document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blog-form");
    if (!blogForm) {
        console.log("Form not found");
        return;
    }

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault(); // doesnt allow empty submission
	
	 // gets input
        const username = document.getElementById("username").value.trim();
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
	
	 // checks input
        if (!username || !title || !content) {
            alert("Invalid Data! Please fill all fields");
            return;
        }

        const post = { username, title, content }; // creates new object from inputs
        const posts = JSON.parse(localStorage.getItem("posts")) || []; // checks the data
        posts.push(post);  // adds the new post to array
        localStorage.setItem("posts", JSON.stringify(posts));  // stores everything

        window.location.href = "blog.html"; // redirects
    });
});
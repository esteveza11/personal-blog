document.addEventListener("DOMContentLoaded", function() {
    const blogList = document.getElementById("blog-list");

    function getBlogPostsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("posts")) || [];
    }

    function displayBlogPosts() {
        blogList.innerHTML = ""; // clears previous

        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.forEach((post, index) => {
            const postContainer = createPostElement(post, index);
            blogList.appendChild(postContainer);
        });
    }

    function createPostElement(post, index) {
        const postContainer = document.createElement("div");
        postContainer.classList.add("blog-entry");

        const closeButton = createCloseButton(index);

        const title = createTextElement("h3", "Title: " + post.title);
        const content = createTextElement("p", "Content: " + post.content);
        const postedBy = createTextElement("p", "Posted By: " + post.username);
        postedBy.classList.add("postedby");

        postContainer.appendChild(closeButton);
        postContainer.appendChild(title);
        postContainer.appendChild(content);
        postContainer.appendChild(postedBy);

        return postContainer;
    }

    function createCloseButton(index) {
        const closeButton = document.createElement("button");
        closeButton.innerHTML = '<i class="bx bx-x"></i>';
        closeButton.classList.add("close-button");
        closeButton.addEventListener("click", function() {
            removeBlogPost(index);
        });
        return closeButton;
    }

    function createTextElement(elementType, text) {
        const element = document.createElement(elementType);
        element.textContent = text;
        return element;
    }

    function removeBlogPost(index) {
        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.splice(index, 1); // removes specific blog post 
        localStorage.setItem("posts", JSON.stringify(blogPosts));
        displayBlogPosts(); // refreshes
    }

    displayBlogPosts();
});
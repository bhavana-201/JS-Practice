Problem: The "Live Action" Feed

Context: You are building a feed widget (like a mini Twitter or comment section). Users can see posts, interact with them (Like/Delete), and write their own. Network requests take time, and dynamic elements appear after the initial page load.

What to build:

The Initialization: As soon as the raw HTML is fully parsed (but you don't care if images/CSS are still loading), trigger a sequence to fetch an initial list of posts from a dummy API (like https://jsonplaceholder.typicode.com/posts?_limit=5). Render them to the screen.


The Interactions: Rendered posts should each have a "Like" button and a "Delete" button. Since these posts are added to the DOM dynamically, you cannot attach addEventListener to each button individually as you create them. You must use event delegation on their parent container to handle the clicks.


The Creation: A simple form with a text input and a submit button to add a new post. When submitted, send a fetch POST request.
The Safety Net: If the user has typed anything into the input field and tries to close the tab or refresh the page before submitting, trigger a browser warning asking if they are sure they want to leave.

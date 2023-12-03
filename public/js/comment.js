const commentFormHandler = async function(event) {
    event.preventDefault();
        const post_id = document.querySelector('.new-comment-form').dataset.blogid;
    const comment_description = document.querySelector('#comment_description').value.trim();
    if (comment_description) {
      console.log("testing post for comments")
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("post for comments complete")
      document.location.reload();
    }
  };
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
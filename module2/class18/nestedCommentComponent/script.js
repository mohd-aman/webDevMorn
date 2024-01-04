let commentContainer = document.querySelector('.comment-container');


commentContainer.addEventListener('click',function(e){
    let closestCommentContainer = e.target.closest(".comment-container");
    // console.log(closestCommentContainer);
    // console.log(e.target);
    if(e.target.classList.contains('reply')){ //reply is clicked
        let commentReplyContainer = document.createElement('div');
        commentReplyContainer.setAttribute('class','comment-reply-container');
        commentReplyContainer.innerHTML = `<input placeholder="write you comment reply" type="text">
        <button class="btn-submit">submit</button>`
        // let commentReplyContainer = `<div class="comment-reply-container">
        //                                 <input placeholder="write you comment reply" type="text">
        //                                 <button class="btn-submit">submit</button>
        //                             </div>`
        // console.log(commentReplyContainer);
        closestCommentContainer.appendChild(commentReplyContainer);
    }
    else if(e.target.classList.contains('btn-submit')){
        let closetCommentReply = e.target.closest('.comment-reply-container');
        let input = closetCommentReply.querySelector('input');
        let value = input.value;
        // console.log(value);
        // <div class="comment-container" style="margin-left: 4rem;">
        //     <h3>doing better </h3>
        //     <div class="reply">Reply</div>
        // </div>
        let newComment = document.createElement('div');
        newComment.setAttribute('class','comment-container');
        newComment.innerHTML = `<h3>${value} </h3><div class="reply">Reply</div>`
        closestCommentContainer.appendChild(newComment);
        closetCommentReply.remove();
    }
})
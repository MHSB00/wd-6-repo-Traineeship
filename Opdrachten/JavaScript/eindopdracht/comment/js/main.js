class Comment {
    constructor(msg, username, commentId, replyText, replyId) {
        // let commentId = document.querySelectorAll('[data-comment-id]').length + 1;
        const commentSection = document.querySelector('[data-comment-section]');

        this.comment = document.createElement('div');
        this.comment.classList.add('comment')
        this.comment.dataset.commentId = '';
        this.comment.setAttribute('id', 'comment' + commentId)

        this.commentUser = document.createElement('div');
        this.commentUser.classList.add('commentUser');
        this.comment.appendChild(this.commentUser);

        this.commentUserAvatar = document.createElement('span');
        this.commentUserAvatar.classList.add('commentUserAvatar');
        this.commentUser.appendChild(this.commentUserAvatar);

        this.avatar = document.createElement('img');
        this.avatar.src = 'img/054.png';
        this.commentUserAvatar.appendChild(this.avatar);

        this.commentUserName = document.createElement('span');
        this.commentUserName.classList.add('commentUsername');
        this.commentUserName.dataset.userName = '';
        this.commentUserName.textContent = username;
        this.commentUser.appendChild(this.commentUserName);

        this.commentUserMsgId = document.createElement('span');
        this.commentUserMsgId.classList.add('commentUsername');
        this.commentUserMsgId.dataset.userName = '';
        this.commentUserMsgId.textContent = '#' + commentId;
        this.commentUser.appendChild(this.commentUserMsgId);

        this.commentMsg = document.createElement('div');
        this.commentMsg.classList.add('commentMsg');
        this.comment.appendChild(this.commentMsg);

        if (replyText != '') {
            this.commentReplyLink = document.createElement('span');
            this.commentReplyLink.classList.add('commentReplyLink');
            this.commentReplyLink.dataset.replyLink = '';
            this.commentMsg.appendChild(this.commentReplyLink);

            this.link = document.createElement('a');
            this.link.setAttribute('href', '#comment' + replyId);
            this.link.textContent = replyText;
            this.commentReplyLink.appendChild(this.link);
        }

        this.commentMsgContent = document.createElement('span');
        this.commentMsgContent.classList.add('commentMsgContent');
        this.commentMsgContent.textContent = msg;
        this.commentMsg.appendChild(this.commentMsgContent);

        this.commentReplyBtn = document.createElement('span');
        this.commentReplyBtn.classList.add('commentReplyBtn');
        this.commentMsg.appendChild(this.commentReplyBtn);

        this.replyBtn = document.createElement('button');
        this.replyBtn.setAttribute('id', 'btn' + commentId);
        this.replyBtn.classList.add('replyBtn');
        this.replyBtn.dataset.replyButton = '';
        this.replyBtn.textContent = 'Reply';
        this.commentReplyBtn.appendChild(this.replyBtn);

        commentSection.appendChild(this.comment);
        createReplyBtn();
    }
}

function createReplyLink(id) {
    const userId = id.replace('btn', '#');
    const replyLink = document.querySelector('[data-reply-to]');
    const commentDraft = document.querySelector('[data-comment-draft]');

    const cancelReplyBtn = document.createElement('button');
    cancelReplyBtn.dataset.cancelButton = '';
    cancelReplyBtn.classList.add('cancelReply');
    cancelReplyBtn.textContent = 'X';

    replyLink.textContent = `Replying to ${userId}`;
    replyLink.appendChild(cancelReplyBtn);

    commentDraft.prepend(replyLink);

    const cancelReply = document.querySelector('[data-cancel-button]');

    cancelReply.addEventListener('click', () => {
        const replyLink = document.querySelector('[data-reply-to]');
        const commentDraft = document.querySelector('[data-comment-draft]');

        replyLink.textContent = '';
        commentDraft.prepend(replyLink);
    })

}

function createReplyBtn() {
    const replyBtn = document.querySelectorAll('[data-reply-button]');
    replyBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            createReplyLink(e.target.id);
        })
    })
}

createReplyBtn();
const form = document.querySelector('[data-form]')
form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    const msg = document.getElementById('replyMsg').value;
    const userName = document.getElementById('username').value;
    let commentId = document.querySelectorAll('[data-comment-id]').length + 1;
    const reply = document.querySelectorAll('[data-reply-to]');
    let replyText = '';
    if (reply[0].firstChild != null) {
        replyText = reply[0].firstChild.textContent.replace('btn', '#');
    }

    const replyId = replyText.replace(/\D/g, '');

    new Comment(msg, userName, commentId, replyText, replyId);
}
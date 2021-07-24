const commentBtn = document.querySelector('.comment-btn')
const commentList = document.querySelector('.comment-list')

commentBtn.addEventListener('click', e => {
  showCommentList()
})


function showCommentList(e) {
  commentList.classList.toggle('show')
}
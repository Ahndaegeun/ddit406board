const commentBtn = document.querySelector('.comment-btn')
const commentList = document.querySelector('.comment-list')
const modifyBtn = document.querySelector('.user-modify-btn')
const userInfo = document.querySelector('.user-modify-info')

commentBtn.addEventListener('click', e => {
  showCommentList(e)
})

modifyBtn.addEventListener('click', e => {
  showModify(e)
})


function showCommentList(e) {
  commentList.classList.toggle('show')
}

function showModify(e) {
  userInfo.classList.toggle('show-modify')
}
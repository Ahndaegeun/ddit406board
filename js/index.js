const commentBtn = document.querySelector('.comment-btn')
const commentList = document.querySelector('.comment-list')
const modifyBtn = document.querySelector('.user-modify-btn')
const userInfo = document.querySelector('.user-modify-info')
const mobileMenu = document.querySelector('.mobile-device-menu')
const mobileContentsBtn = document.querySelector('.mobile-contents-btn')
const mobileInfoBtn = document.querySelector('.mobile-info-btn')

const userInfo = document.querySelector('.user-info')
const board = document.querySelector('main')

commentBtn.addEventListener('click', e => {
  showCommentList(e)
})

modifyBtn.addEventListener('click', e => {
  showModify(e)
})

mobileMenu.addEventListener('click', e => {
  mobileMenuClick(e)
})


function showCommentList(e) {
  commentList.classList.toggle('show')
}

function showModify(e) {
  userInfo.classList.toggle('show-modify')
}

function mobileMenuClick(e) {
  const target = e.target
  target.classList.add('clicked')
  if (target === mobileContentsBtn) {
    mobileInfoBtn.classList.remove('clicked')

  } else if (target === mobileInfoBtn) {
    mobileContentsBtn.classList.remove('clicked')
    
  }
}
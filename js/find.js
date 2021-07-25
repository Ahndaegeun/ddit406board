const idBtn = document.querySelector('.id-btn')
const pwBtn = document.querySelector('.pw-btn')
const idFrm = document.querySelector('.id-frm')
const pwFrm = document.querySelector('.pw-frm')

idBtn.addEventListener('click', e => {
  console.log(1)
  idSearchClick(e)
})

pwBtn.addEventListener('click', e => {
  console.log(2)
  pwSearchClick(e)
})


function idSearchClick(e) {
  idFrm.classList.add('show')
  pwFrm.classList.remove('show')
  idBtn.classList.add('select-btn')
  pwBtn.classList.remove('select-btn')
}

function pwSearchClick(e) {
  pwFrm.classList.add('show')
  idFrm.classList.remove('show')
  pwBtn.classList.add('select-btn')
  idBtn.classList.remove('select-btn')
}
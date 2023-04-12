const btn = document.getElementById('menu_btn')
const nav = document.getElementById('menu')

console.log(btn)

btn.addEventListener('click', ( )=>{
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
})
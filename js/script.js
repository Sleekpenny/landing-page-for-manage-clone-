const btn = document.getElementById('menu_btn')
const nav = document.getElementById('menu')

console.log(btn)

btn.addEventListener('click', ( )=>{
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
})

const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel_item');
const btnsHtml = Array.from(items, ()=>{
    return ` <span class="inline-block carousel_btn h-3 w-3 rounded-full border border-brightRed cursor-pointer"></span>`;
});

carousel.insertAdjacentHTML('beforeend', `
    <div class='carousel_nav md:hidden'>
        ${ btnsHtml.join("")}
    </div>
`);

const btns = carousel.querySelectorAll('.carousel_btn');

btns.forEach((btn, i)=>{
  btn.addEventListener('click', ()=>{
    // un-select all the items
    items.forEach(item => item.classList.remove('selected_carousel'));
    btns.forEach(btn=> btn.classList.remove('selected_carousel_btn'));

    items[i].classList.add('selected_carousel');
    btn.classList.add('selected_carousel_btn');
  })
})

// select item on page load
items[0].classList.add('selected_carousel');
btns[0].classList.add('selected_carousel_btn');



// console.log(items,btnsHtml)

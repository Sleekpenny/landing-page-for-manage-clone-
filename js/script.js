const meunBtn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');

meunBtn.addEventListener('click', ( )=>{
  meunBtn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
})

const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel_item');
const btnsHtml = Array.from(items, ()=>{
    return ` <span class="inline-block carousel_btn h-3 w-3 rounded-full border border-brightRed cursor-pointer md:hidden"></span>`;
});

carousel.insertAdjacentHTML('beforeend', `
    <div class="carousel_nav space-x-2 mt-2">
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
  });
});

items[0].classList.add('selected_carousel');
btns[0].classList.add('selected_carousel_btn');



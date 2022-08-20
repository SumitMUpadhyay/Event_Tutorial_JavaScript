// click - fires after full action occures
// mousedown - button is pressed
// mousedown - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('.h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    console.log('you clicked me');
})
btn.addEventListener('mousedown',function(){
    console.log('down');
})
btn.addEventListener('mouseup',function(){
    console.log('up');
})

heading.addEventListener('mouseenter',function(){
    heading.classList.add('blue');
});
heading.addEventListener('mousleave',function(){
    heading.classList.remove('blue');
});
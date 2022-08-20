// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling- clicked element first then bubles up -- default
// console.log('hello people')

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello(){
    console.log('hello there');
}

btn.addEventListener('click', function(){
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = `i am inside the container`
    container.appendChild(element);
});

container.addEventListener('click',function(e){
    if(event.target.classList.contains('heading')){
        console.log('hello there');
    }
});

// heading.addEventListener('click', sayHello);
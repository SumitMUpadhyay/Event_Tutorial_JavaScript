// allows select dynamic elements
// event propogation - order the events are fired 
// event bubling - clicked element first then bubles up --default
// event capturing - fires at the root and fires until reaches


const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
    console.log('current target',e.currentTarget);
    console.log('target',e.Target);
    if(e.target.classList.contains('link')){
        console.log('you clicked on the link');
    }
}

function stopProagation(e){
    console.log('you clicked on the list')
    e.stopProagation();
}

list.addEventListener('click',showBubbling,{capture:true});
container.addEventListener('click',showBubbling,{capture:true});
document.addEventListener('click', showBubbling,{capture:true});
window.addEventListener('click',showBubbling,{capture:true});
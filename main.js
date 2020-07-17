const colorItem = document.querySelectorAll('.color__item');
let root = document.documentElement;

colorItem.forEach(color => {
    color.addEventListener('click', event => {
        if(event.srcElement.id === 'gold'){
           return root.style.setProperty('--primary-orange', '#FFE486');   
        }
        else if(event.srcElement.id === 'blue'){
            return root.style.setProperty('--primary-orange', 'var(--primary-blue)');
        }
        else if(event.srcElement.id === 'pink'){
            return root.style.setProperty('--primary-orange', 'var(--primary-pink)');
        }
        else if(event.srcElement.id === 'orange'){
            return root.style.setProperty('--primary-orange', 'var(--primary-deep-orange)'); 
        }
        else if(event.srcElement.id === 'grey'){
            return root.style.setProperty('--primary-orange', 'var(--primary-grey-2)'); 
        }
    })
})

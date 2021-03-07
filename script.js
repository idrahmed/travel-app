// function to selecte element instead of selecting 1 by 1

const selectElement = s => document.querySelector(s);

// when .open is clicked, active will be added to the ul class, becoming nav-list active
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
    
});

// when .close is clicked, active will be removed from .nav-list class
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
    
})



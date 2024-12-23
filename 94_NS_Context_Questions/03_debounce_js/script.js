const searchInput = document.querySelector('#search-input');
const ouptut = document.querySelector('#output')

function debounce(fn,delay){
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },delay)
    }   
}


function handleSearchInput(e){
    ouptut.textContent = `search for : ${e.target.value}`
}

const debounceSearch = debounce(handleSearchInput,500);

searchInput.addEventListener('input',debounceSearch);
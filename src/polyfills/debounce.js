

const debouncedfunc = (func, delay) => {
    let timer;
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, delay);
    }
}

const doSearch = (input) => {
    return "hellow world".contains(input)
}
const debouncedSearch = debouncedfunc(
    doSearch, 1000
)
const submit = document.querySelector('#submit')
const resultHolder = document.querySelector('#result-holder');
const inputAge = document.querySelector('#q-age');
const checkBox = document.querySelector('#q-owns-phone')
const errorHolder = document.querySelector('#error-holder')

function ageChange(e){
    const age = Number(e.target.value)
    // console.log(age);
    if(age<5){
        setError('You need to be atleast 5 years old to participate')
        submit.setAttribute('disabled','')
    }else{
        setError('');
        submit.removeAttribute('disabled')
    }
}

function handleSubmit(e){
    e.preventDefault()
    const age = Number(inputAge.value);
    if(age === 0){
        setError('please choose age')
        return;
    }
    const havePhone = checkBox.checked;
    if(havePhone){
        if(age<13){
            resultHolder.innerText = 'You are too young to have a phone'
        }else{
            resultHolder.innerText = 'Use your phone in moderation'
        }
    }else if(age<13){
        resultHolder.innerText = 'You will get a phone soon'
    }else{
        resultHolder.innerText = 'You should get a phone'
    }
}

function setError(error){
    errorHolder.innerText = error
;}
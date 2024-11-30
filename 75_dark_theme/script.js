function swapTheme(){
    let app = document.querySelector('#app');
    let btn = document.querySelector('#swap')

    if(app.className === 'day'){
        app.className = "night"
        btn.className = "button_night"
    }else{
         app.className = "day"
        btn.className = "button_day"
    }
}
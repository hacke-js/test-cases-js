var count = 0
var counterr = 0
var answer
var error
var A
var B
var C
var case_answer = []
var case_error = []
var SaveAndLoad = []

const reg = /\d+/g;
const reg1 =/[a-z]+/g;
const reg2 =/[A-Z]+/g;
const reg3 =/[^\da-zA-Z,.';"]+/g;
const reg4 =/[а-яА-Я]+/g;


//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if(JSON.parse(localStorage.getItem('ex6'))!=null)
    {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex6'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('error-info').textContent = SaveAndLoad['error']


        for(var i = 0; i<=5; i++){
            document.getElementsByClassName('case-error')[i].textContent = SaveAndLoad['case_error'][i]
        }
    }
    else{
        succ = false
        count = 0
        counterr = 0
    }
    if (succ == true) {
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
})


//дополнительный скрипт проверки
async function CheckAllCondition(A){
        if(await A.match(reg) == null){
            return false;
        }
        else if(await A.match(reg1) == null){
            return false;
        }
        else if(await A.match(reg2) == null)
        {
            return false;
        }
        else if(await A.match(reg3) == null)
        {
            return false;
        }
        else if(await A.match(reg4) !== null)
        {
            return false;
        }
    return true;
}

//основной скрипт проверки
async function Check(){
    A = String(document.getElementById('A').value)
    if(A == null || A =="")
    {
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Пустая сторка"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Пустая сторка"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Пустая сторка"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(await CheckAllCondition(A) && A.length < 15 && A.length >= 8){
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Всё хорошо"
    }
    else if(A.match(reg) < 1){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В пароле нет ни одной цифры"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - В пароле нет ни одной цифры"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - В пароле нет ни одной цифры"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(A.match(reg1) < 1){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка -  Пароль должен содержать минимум одну маленкую латинскую букву"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка -  Пароль должен содержать минимум одну маленкую латинскую букву"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка -  Пароль должен содержать минимум одну маленкую латинскую букву"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(A.match(reg2) < 1){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка -  Пароль должен содержать минимум одну большую латинскую букву"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка -  Пароль должен содержать минимум одну большую латинскую букву"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка -  Пароль должен содержать минимум одну большую латинскую букву"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(A.match(reg3) < 1){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка -  Пароль должен содержать минимум однин спец. символ"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка -  Пароль должен содержать минимум однин спец. символ"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка -  Пароль должен содержать минимум однин спец. символ"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(A.match(reg1) > 0){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка -  Кириллические символы запрещены при вводе пароля"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка -  Кириллические символы запрещены при вводе пароля"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка -  Кириллические символы запрещены при вводе пароля"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if( A.length > 15 || A.length < 8){
        for(var i = 0; i<=5; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Количество символов должно быть от 8 до 15"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Количество символов должно быть от 8 до 15"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Количество символов должно быть от 8 до 15"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }

// сохранение кейсов
    error ="Вы нашли "+counterr+"/6 ошибок"
    document.getElementById('error-info').textContent = error
    if((counterr == 5)|| succ == true)
    {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }

    for(var i = 0; i<=5; i++){
        case_error[i] = document.getElementsByClassName('case-error')[i].textContent
    }
    SaveAndLoad = []
    SaveAndLoad.push(
    {
        "succ": succ,
        "counterr":counterr,
        "error": document.getElementById('error-info').textContent,
        "case_error": case_error,

    })
    localStorage.setItem('ex6', JSON.stringify(SaveAndLoad[0]))
}

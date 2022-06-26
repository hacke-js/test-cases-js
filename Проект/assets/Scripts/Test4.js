var count = 0
var counterr = 0
var answer
var error
var A
var case_answer = []
var case_error = []
var SaveAndLoad = []

//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem('ex4')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex4'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('error-info').textContent = SaveAndLoad['error']

        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('case-error')[i].textContent = SaveAndLoad['case_error'][i]
        }
    }
    else {
        succ = false
        count = 0
        counterr = 0
    }
    if (succ == true) {
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
})

//основной скрипт проверки
async function Check() {
    A = document.getElementById('A').value
    var reg = /\d{1,6}/
    var reg1 = /(\-{1}\d{1,6})/
    var reg2 = /(\d{1,6}[.,]{1}\d{1,})/
    var reg3 = /(\d{6,}[.,]{1}\d{1,})/
    var reg4 = /(\-{1}\d{6,})/
    var reg5 = /[^\d\-,.]/
    var reg0 = /[0]/g
    var reg01 = /[^0]/g

    if (await A.match(reg1) && await A.match(reg2)) {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Число отрицательное и смешаное"
    }
    else if (await A.match(reg1)==1) {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Число отрицательное"
    }
    else if (await A.match(reg2)) {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Смешаное число"
    }
    else if (await A.match(reg0) && !await A.match(reg01)) {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Ноль"
    }
    else if (A == null || A == "") {
        for (var i = 0; i < 4; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Пустая строка"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Пустая строка"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Пустая строка") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (Number(A) > 999999 || await A.match(reg3)==1) {
        for (var i = 0; i < 4; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Число слишком большое"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Число слишком большое"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Число слишком большое") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (Number(A) < -999999 || await A.match(reg4)==1) {
        for (var i = 0; i < 4; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Число слишком маленькое"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Число слишком маленькое"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Число слишком маленькое") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (await A.match(reg5)) {
        for (var i = 0; i < 4; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В строке введён недопустимый символ"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - В строке введён недопустимый символ"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - В строке введён недопустимый символ") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Обычное число"
    }



// сохранение кейсов
    error = "Вы нашли " + counterr + "/4 ошибок"
    document.getElementById('error-info').textContent = error
    if ((counterr == 4) || succ == true) {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }

    for (var i = 0; i < 4; i++) {
        case_error[i] = document.getElementsByClassName('case-error')[i].textContent
    }
    SaveAndLoad = []
    SaveAndLoad.push(
        {
            "succ": succ,
            "counterr": counterr,
            "error": document.getElementById('error-info').textContent,
            "case_error": case_error,

        })
    localStorage.setItem('ex4', JSON.stringify(SaveAndLoad[0]))
}

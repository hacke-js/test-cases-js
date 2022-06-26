var count = 0
var counterr = 0
var error
var A
var case_error = []
var SaveAndLoad = []

//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem('ex5')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex5'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('error-info').textContent = SaveAndLoad['error']

        for (var i = 0; i < 2; i++) {
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
    var reg = /[\sa-zA-Zа-яА-Я]+/g
    var reg1 = /[^\sa-zA-Zа-яА-Я]+/g

    if (await A.match(reg) && !await A.match(reg1)) {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = "Всё хорошо"
    }
    else if (await A.match(reg1)) {
        for (var i = 0; i < 2; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В строке не только буквы"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - В строке не только буквы"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - В строке не только буквы") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (A == null || A =="") {
        for (var i = 0; i < 2; i++) {
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

// сохранение кейсов
    error = "Вы нашли " + counterr + "/2 ошибок"
    document.getElementById('error-info').textContent = error
    if ((counterr == 2) || succ == true) {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }

    for (var i = 0; i < 2; i++) {
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
    localStorage.setItem('ex5', JSON.stringify(SaveAndLoad[0]))
}

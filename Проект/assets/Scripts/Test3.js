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
    if (JSON.parse(localStorage.getItem('ex3')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex3'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('error-info').textContent = SaveAndLoad['error']

        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('case-error')[i].textContent = SaveAndLoad['case_error'][i]
        }

    }
    else {
        succ = false
        counterr = 0
    }
    if(succ == true)
    {
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
})



const regex1 = /\//g
const regex2 = /\d/g
const regex3 = /([0-9-]+\/{1}[0-9-]+)/
const regex4 = /[^0-9\/\-]/g


async function DefaultCheck(A) {
    var vreminka = await A.match(regex1)
    if (!await A.match(regex1)) {
        return false
    }
    else if (vreminka.length > 1) {
        return false
    }
    else if (!await A.match(regex2)) {
        return false
    }
    else if (!await A.match(regex2) && !await A.match(regex1)) {
        return false
    }
    else if (!await A.match(regex3)) {
        return false
    }
    else if (await A.match(regex4)) {
        return false
    }
    return true
}

//основной скрипт проверки
async function Check() {
    A = document.getElementById('A').value.replace('\s', '')
    var vreminka = await A.match(regex1)


    if (A == null || A == "") {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Пустая сторка"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Пустая сторка"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Пустая сторка") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (await DefaultCheck(A)) {
        var splitarray = A.split('/')
        if (Number(splitarray[0]) > Number(splitarray[1])) {
            splitarray[0] = splitarray[1]
            document.getElementById('A').value = `${splitarray[0]}/${splitarray[1]}`
            document.getElementsByClassName('status')[0].id = "bug"
            document.getElementsByClassName('status')[0].textContent = "Была произведина замена так как второе число меньше первого"
        }
        else{
            document.getElementsByClassName('status')[0].id = "answer"
            document.getElementsByClassName('status')[0].textContent = "Всё хорошо"
        }
    }
    else if (!await A.match(regex1) && await A.match(regex2)) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Отсутствует разделитель"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка -  Отсутствует разделитель"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Отсутствует разделитель") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (await A.match(regex1) && !await A.match(regex2)) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Введен только знак разделения"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Введен только знак разделения"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Введен только знак разделения") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (await A.match(regex4)) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Наличие символов или букв"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Наличие символов или букв"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Наличие символов или букв") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (vreminka.length > 1 && await A.match(regex2)) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Лишние разделители"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Лишние разделители"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Лишние разделители") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }

// сохранение кейсов
    error = "Вы нашли " + counterr + "/5 ошибок"
    document.getElementById('error-info').textContent = error
    console.log(counterr)
    if ((counterr == 5) || succ == true) {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
    for (var i = 0; i < 5; i++) {
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
    localStorage.setItem('ex3', JSON.stringify(SaveAndLoad[0]))
}

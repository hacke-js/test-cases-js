var count = 0
var counterr = 0
var answer
var error
var A
var case_error = []
var SaveAndLoad = []

const reg = /[^\d]/g;


//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem('ex7')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex7'))
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
        count = 0
        counterr = 0
    }
    if (succ == true) {
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
})

//дополнительный скрипт проверки
async function CheckAllCondition(A) {
    var mass = A.split('')
    var i = 0
    for (var item of mass) {
        mass[i] = Number(item)
        i++
    }
    var masssum = []
    for (var i = 0; i < mass.length - 1; i++) {
        masssum[i] = mass[i]
    }
    var sum = masssum.reduce((a, b) => a + b)
    if (sum % 10 == 0) {
        if (mass[mass.length - 1] == 0) {
            return "0"
        }
        else {
            return "none"
        }
    }
    else if (sum % 3 == 0) {
        if (mass[mass.length - 1] == 1) {
            return "3"
        }
        else {
            return "none"
        }
    }
    else if (mass[mass.length - 1] == 9) {
        return "9"
    }
    else {
        return "none"
    }


}

//основной скрипт проверки
async function Check() {
    A = String(document.getElementById('A').value)
    if (A == "" || A == null) {
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
    else {
        if (A.match(reg) != null) {
            for (var i = 0; i < 5; i++) {
                if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                    document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В строке есть недопустимые символы"
                    document.getElementsByClassName('status')[0].id = "error"
                    document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - В строке есть недопустимые символы"
                    counterr++
                    break;
                }
                if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - В строке есть недопустимые символы") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                    break;
                }
            }
        }
        else {
            if (A.length < 10) {
                for (var i = 0; i < 5; i++) {
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                        document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Количество цифр меньше 10"
                        document.getElementsByClassName('status')[0].id = "error"
                        document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Количество цифр меньше 10"
                        counterr++
                        break;
                    }
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Количество цифр меньше 10") {
                        document.getElementsByClassName('status')[0].id = "bug"
                        document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                        break;
                    }
                }
            }
            else if (A.length > 10) {
                for (var i = 0; i < 5; i++) {
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                        document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Количество цифр больше 10"
                        document.getElementsByClassName('status')[0].id = "error"
                        document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Количество цифр больше 10"
                        counterr++
                        break;
                    }
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Количество цифр больше 10") {
                        document.getElementsByClassName('status')[0].id = "bug"
                        document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                        break;
                    }
                }
            }
            else if (await CheckAllCondition(A) == "0" || await CheckAllCondition(A) == "3" || await CheckAllCondition(A) == "9") {
                document.getElementsByClassName('status')[0].id = "answer"
                document.getElementsByClassName('status')[0].textContent = String(`Правельное контрольное число{${await CheckAllCondition(A)}}`)
            }
            else if (await CheckAllCondition(A) == "none") {
                for (var i = 0; i < 5; i++) {
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                        document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Неправильное контрольное число"
                        document.getElementsByClassName('status')[0].id = "error"
                        document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Неправильное контрольное число"
                        counterr++
                        break;
                    }
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Неправильное контрольное число") {
                        document.getElementsByClassName('status')[0].id = "bug"
                        document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                        break;
                    }
                }
            }
        }
    }



// сохранение кейсов
    error = "Вы нашли " + counterr + "/5 ошибок"
    document.getElementById('error-info').textContent = error
    if ((counterr == 4) || succ == true) {
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
    localStorage.setItem('ex7', JSON.stringify(SaveAndLoad[0]))
}

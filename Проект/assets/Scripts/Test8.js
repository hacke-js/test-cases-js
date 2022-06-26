var count = 0
var counterr = 0
var error
var A
var case_error = []
var SaveAndLoad = []
var Cod = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 10, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 142, 147, 150, 152, 154, 156, 159, 161, 163, 164, 172, 173, 174, 177, 178, 186, 190, 193, 196, 197, 198, 199, 277, 299, 702, 716, 725, 750, 761, 763, 774, 777, 790, 797, 799]

const reg = /[АВЕКМНОРСТУХABEKMHOPCTYX]{1}\d{3}[АВЕКМНОРСТУХABEKMHOPCTYX]{2}\d{2,3}/;

//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem('ex8')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex8'))
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

//дополнительный скрипт проверки
async function CheckAllCondition(A) {
    var mass = A.split('')
    if (!A.match(reg)) {
        return "formbad"
    }
    else if (Number(mass[1]) == 0 && Number(mass[2]) == 0 && Number(mass[3]) == 0) {
        return "000"
    }
    if (mass.length == 9) {
        var region = mass[6] + mass[7] + mass[8]
    }
    else if (mass.length == 8) {
        var region = mass[6] + mass[7]
    }
    for (var i of Cod) {
        if (i == Number(region)) {
            return "regOk"
        }
    }
    return "regionbad"
}

//основной скрипт проверки
async function Check() {
    A = String(document.getElementById('A').value)
    if (A == "" || A == null) {
        for (var i = 0; i < 4; i++) {
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
        if (await CheckAllCondition(A) == "formbad") {
            for (var i = 0; i < 4; i++) {
                if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                    document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В строке есть недопустимые символы или неправильный формат"
                    document.getElementsByClassName('status')[0].id = "error"
                    document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - В строке есть недопустимые символы или неправильный формат"
                    counterr++
                    break;
                }
                if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - В строке есть недопустимые символы или неправильный формат") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                    break;
                }
            }
        }
        else {
            if (await CheckAllCondition(A) == "000") {
                for (var i = 0; i < 4; i++) {
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                        document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Номер вне диапазона 001-999"
                        document.getElementsByClassName('status')[0].id = "error"
                        document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Номер вне диапазона 001-999"
                        counterr++
                        break;
                    }
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Номер вне диапазона 001-999") {
                        document.getElementsByClassName('status')[0].id = "bug"
                        document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                        break;
                    }
                }
            }
            else if (await CheckAllCondition(A) == "regionbad") {
                for (var i = 0; i < 4; i++) {
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                        document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Нет такого региона"
                        document.getElementsByClassName('status')[0].id = "error"
                        document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Нет такого региона"
                        counterr++
                        break;
                    }
                    if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Нет такого региона") {
                        document.getElementsByClassName('status')[0].id = "bug"
                        document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                        break;
                    }
                }
            }
            else {
                document.getElementsByClassName('status')[0].id = "answer"
                document.getElementsByClassName('status')[0].textContent = "Всё хорошо"
            }
            
        }
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
    localStorage.setItem('ex8', JSON.stringify(SaveAndLoad[0]))
}

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

//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem('ex1')) != null) {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex1'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('answer-info').textContent = SaveAndLoad['answer']
        document.getElementById('error-info').textContent = SaveAndLoad['error']

        for (var i = 0; i <= 4; i++) {
            (document.getElementsByClassName('case-answer')[i]).textContent = SaveAndLoad['case_answer'][i]
        }

        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('case-error')[i]
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
function Check() {
    A = Number(document.getElementById('A').value.replace(',', '.'))
    B = Number(document.getElementById('B').value.replace(',', '.'))
    C = Number(document.getElementById('C').value.replace(',', '.'))

    function CheckNulllableex1() {
        A = document.getElementById('A').value
        B = document.getElementById('B').value
        C = document.getElementById('C').value

        if ((A == '' || B == '' || C == '') || (A == 0 || B == 0 || C == 0)) {
            return true
        }
        return false
    }

    function CheckExistence() {
        A = Number(document.getElementById('A').value)
        B = Number(document.getElementById('B').value)
        C = Number(document.getElementById('C').value)

        if ((A > B + C) || (B > A + C) || (C > A + B)) {
            return false
        }
        return true
    }

    function Checkletters() {
        A = document.getElementById('A').value
        B = document.getElementById('B').value
        C = document.getElementById('C').value

        if (A != A.replace(/[^0-9,.]/) || B != B.replace(/[^0-9,.]/) || C != C.replace(/[^0-9,.]/)) {
            return true
        }
        return false
    }

    function CheckNegativeValue() {
        A = Number(document.getElementById('A').value)
        B = Number(document.getElementById('B').value)
        C = Number(document.getElementById('C').value)
        if (A < 0 || B < 0 || C < 0) {
            return true
        }
        return false
    }

    if (CheckNulllableex1()) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно или несколько полей пустые или равны 0"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно или несколько полей пустые или равны 0\n A: " + A + "; B: " + B + "; C: " + C + ";"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Одно или несколько полей пустые или равны 0") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (A < 0 || B < 0 || C < 0) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно или несколько чисел отрицательные"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно или несколько чисел отрицательные\n A: " + A + "; B: " + B + "; C: " + C + ";"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Одно или несколько чисел отрицательные") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if (!CheckExistence()) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одна сторона больше чем сумма других"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найден: Ошибка - Одна сторона больше чем сумма других\n A: " + A + "; B: " + B + "; C: " + C + ";"
                counterr++
                document.getElementsByClassName('case-error')[i + 1].textContent = "Ошибка - Данный треугольник не существует"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найден: Ошибка - Данный треугольник не существует\n A: " + A + "; B: " + B + "; C: " + C + ";"
                counterr++
                break;
            }

            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - Одна сторона больше чем сумма других") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                break;
            }
        }
    }
    else if (Checkletters()) {
        for (var i = 0; i < 5; i++) {
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - ??? ??? ???") {
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - В одном из полей есть недопустимые знаки"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найден: Ошибка - В одном из полей есть недопустимые знаки\n A: " + A + "; B: " + B + "; C: " + C + ";"
                counterr++
                break;
            }
            if (document.getElementsByClassName('case-error')[i].textContent == "Ошибка - В одном из полей есть недопустимые знаки") {
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                break;
            }
        }
    }
    else {
        if (A == B && B == C && CheckExistence() == true && CheckNegativeValue() == false) {
            for (var i = 0; i <= 4; i++) {
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - ??? ??? ???") {
                    document.getElementsByClassName('case-answer')[i].textContent = "Кейс - Равностороннего треугольника"
                    document.getElementsByClassName('status')[0].id = "answer"
                    document.getElementsByClassName('status')[0].textContent = "Найден: Кейс - Равностороннего треугольника\n A: " + A + "; B: " + B + "; C: " + C + ";"
                    count++
                    break;
                }
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - Равностороннего треугольника") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                    break;
                }
            }
        }
        if ((A == B && B != C && A != C || B == C && B != A && C != A || A == C && C != B && A != B) && CheckExistence() == true && CheckNegativeValue() == false) {
            for (var i = 0; i <= 4; i++) {
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - ??? ??? ???") {
                    document.getElementsByClassName('case-answer')[i].textContent = "Кейс - Равнобедренного треугольника"
                    document.getElementsByClassName('status')[0].id = "answer"
                    document.getElementsByClassName('status')[0].textContent = "Найден: Кейс - Равнобедренного треугольника\n A: " + A + "; B: " + B + "; C: " + C + ";"
                    count++
                    break;
                }
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - Равнобедренного треугольника") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                    break;
                }
            }
        }
        if (((A * A) + (B * B) == (C * C) || (B * B) + (C * C) == (A * A) || (A * A) + (C * C) == (B * B)) && CheckExistence() == true && CheckNegativeValue() == false) {
            for (var i = 0; i <= 4; i++) {
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - ??? ??? ???") {
                    document.getElementsByClassName('case-answer')[i].textContent = "Кейс - Прямоугольный треугольника"
                    document.getElementsByClassName('status')[0].id = "answer"
                    document.getElementsByClassName('status')[0].textContent = "Найден: Кейс - Прямоугольный треугольника\n A: " + A + "; B: " + B + "; C: " + C + ";"
                    count++
                    break;
                }
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - Прямоугольный треугольника") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                    break;
                }
            }
        }
        if (((A * A) + (B * B) > (C * C) || (B * B) + (C * C) > (A * A) || (A * A) + (C * C) > (B * B)) && CheckExistence() == true && CheckNegativeValue() == false) {
            for (var i = 0; i <= 4; i++) {
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - ??? ??? ???") {
                    document.getElementsByClassName('case-answer')[i].textContent = "Кейс - Остроугольный треугольника"
                    document.getElementsByClassName('status')[0].id = "answer"
                    document.getElementsByClassName('status')[0].textContent = "Найден: Кейс - Остроугольный треугольника\n A: " + A + "; B: " + B + "; C: " + C + ";"
                    count++
                    break;
                }
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - Остроугольный треугольника") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                    break;
                }
            }
        }
        if (((A * A) + (B * B) < (C * C) || (B * B) + (C * C) < (A * A) || (A * A) + (C * C) < (B * B)) && CheckExistence() == true && CheckNegativeValue() == false) {
            for (var i = 0; i <= 4; i++) {
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - ??? ??? ???") {
                    document.getElementsByClassName('case-answer')[i].textContent = "Кейс - Тупоугольный треугольника"
                    document.getElementsByClassName('status')[0].id = "answer"
                    document.getElementsByClassName('status')[0].textContent = "Найден: Кейс - Тупоугольный треугольника\n A: " + A + "; B: " + B + "; C: " + C + ";"
                    count++
                    break;
                }
                if (document.getElementsByClassName('case-answer')[i].textContent == "Кейс - Тупоугольный треугольника") {
                    document.getElementsByClassName('status')[0].id = "bug"
                    document.getElementsByClassName('status')[0].textContent = "Данный кейс уже был найден"
                    break;
                }
            }
        }
    }

// сохранение кейсов
    answer = "Вы нашли " + count + "/5 кейсов"
    error = "Вы нашли " + counterr + "/5 ошибок"
    document.getElementById('answer-info').textContent = answer
    document.getElementById('error-info').textContent = error
    if ((count == 5 && counterr == 5)) {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }

    for (var i = 0; i <= 4; i++) {
        case_answer[i] = document.getElementsByClassName('case-answer')[i].textContent
    }

    for (var i = 0; i < 5; i++) {
        case_error[i] = document.getElementsByClassName('case-error')[i].textContent
    }
    SaveAndLoad = []
    SaveAndLoad.push(
        {
            "succ": succ,
            "count": count,
            "counterr": counterr,
            "answer": document.getElementById('answer-info').textContent,
            "error": document.getElementById('error-info').textContent,
            "case_answer": case_answer,
            "case_error": case_error,

        })
    localStorage.setItem('ex1', JSON.stringify(SaveAndLoad[0]))
}

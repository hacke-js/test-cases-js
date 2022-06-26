var counterr = 0
var error
var A
var B
var C
var case_error = []
var SaveAndLoad = []

//загрузка кейсов которые были открыты
document.addEventListener("DOMContentLoaded", () => {
    if(JSON.parse(localStorage.getItem('ex2'))!=null)
    {
        SaveAndLoad = JSON.parse(localStorage.getItem('ex2'))
        succ = SaveAndLoad['succ']
        count = SaveAndLoad['count']
        counterr = SaveAndLoad['counterr']
        document.getElementById('error-info').textContent = SaveAndLoad['error']


        for(var i = 0; i<=6; i++){
            document.getElementsByClassName('case-error')[i].textContent = SaveAndLoad['case_error'][i]
        }
    }
    else{
        succ = false
        counterr = 0
    }

    if(succ == true)
    {
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }
})

//основной скрипт проверки
function Check(){
    A = Number(document.getElementById('A').value)
    B = Number(document.getElementById('B').value)

    function CheckNulllable(){
        A = document.getElementById('A').value
        B = document.getElementById('B').value

        if( A=='' || B=='' ){
            return true
        }
        return false
    }
    function CheckZero(){
        A = Number(document.getElementById('A').value)
        B = Number(document.getElementById('B').value)

        if( A==0 || B==0 ){
            return true
        }
        return false
    }
    function Checkletters(){
        A = document.getElementById('A').value
        B = document.getElementById('B').value

        if(A != A.replace(/[^0-9,.-]/)  || B!= B.replace(/[^0-9,.-]/)){
            return true
        }
        return false
    }

    function CheckFractionalCell(){
        A = document.getElementById('A').value
        B = document.getElementById('B').value
        C = document.getElementById('C').value


        if(A != A.replace(/[.,]/)  || B != B.replace(/[.,]/)){
            // console.log("true A=",A,"\nB=",B,"\nC=",C)
            return true
        }
        // console.log("fasle A=",A,"\nB=",B,"\nC=",C)
        return false
    }

    function CheckNegativeValue(){
        A = document.getElementById('A').value
        B = document.getElementById('B').value
        if( A != A.replace(/[,]/)){
            A = A.replace(/[,]/,'.')
        }
        if(B != B.replace(/[,]/)){
            B = B.replace(/[,]/,'.')
        }

        A = Number(A)
        B = Number(B)

        if(A<0||B<0){
            return true
        }
        return false
    }

    function CheckMinValue(){
        A = Number(document.getElementById('A').value)
        B = Number(document.getElementById('B').value)

        if( 0<A && A<0.1 || 0<B && B<0.1 ){
            return true
        }
        return false
    }
    function CheckMaxValue(){
        A = Number(document.getElementById('A').value)
        B = Number(document.getElementById('B').value)

        if( A>999 || B>999 ){
            return true
        }
        return false
    }

    if(CheckNulllable()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одна или обе стороны пустые"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одна или обе стороны пустые\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одна или обе стороны пустые"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(CheckZero()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одна сторона ровна 0"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одна сторона ровна 0\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одна сторона ровна 0"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(Checkletters()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одна или обе стороны содержат недопустимые символы"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одна или обе стороны содержат недопустимые символы\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одна или обе стороны содержат недопустимые символы"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(CheckNegativeValue() && CheckFractionalCell()){

        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно число дробное и отрицательное"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно число дробное и отрицательное\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одно число дробное и отрицательное"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(CheckNegativeValue()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно число отрицательное"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно число отрицательное\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одно число отрицательное"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(CheckMinValue()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно число менее 0.1"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно число менее 0.1\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одно число менее 0.1"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else if(CheckMaxValue()){
        for(var i = 0; i<=6; i++){
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - ??? ??? ???"){
                document.getElementsByClassName('case-error')[i].textContent = "Ошибка - Одно число более 999"
                document.getElementsByClassName('status')[0].id = "error"
                document.getElementsByClassName('status')[0].textContent = "Найдена: Ошибка - Одно число более 999\n A: "+A+"; B: "+B+";"
                counterr++
                break;
            }
            if(document.getElementsByClassName('case-error')[i].textContent== "Ошибка - Одно число более 999"){
                document.getElementsByClassName('status')[0].id = "bug"
                document.getElementsByClassName('status')[0].textContent = "Данная ошибка уже был найдена"
                break;
            }
        }
    }
    else
    {
        document.getElementsByClassName('status')[0].id = "answer"
        document.getElementsByClassName('status')[0].textContent = ""
        A = document.getElementById('A').value
        B = document.getElementById('B').value
        if( A != A.replace(/[,]/)){
            A = A.replace(/[,]/,'.')
        }
        if(B != B.replace(/[,]/)){
            B = B.replace(/[,]/,'.')
        }

        A = Number(A)
        B = Number(B)

        document.getElementById('C').value = A*B
    }



// сохранение кейсов
    error ="Вы нашли "+counterr+"/7 ошибок"
    document.getElementById('error-info').textContent = error
    if((counterr == 7))
    {
        succ = true
        document.getElementById('button_next').classList.remove('disabled')
        document.getElementById('button_next').classList.add('activ')
    }


    for(var i = 0; i<=6; i++){
        console.log(document.getElementsByClassName('case-error')[i].textContent)
        console.log(case_error)
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
        localStorage.setItem('ex2', JSON.stringify(SaveAndLoad[0]))
}

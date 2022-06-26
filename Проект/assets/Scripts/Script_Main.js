//скрипт для открытия тестовых кейсов
document.addEventListener("DOMContentLoaded", () => {
    for(var i=1;i<10;i++)
    {
        var ser= `ex${i}`
        if(JSON.parse(localStorage.getItem(ser)) != (null || undefined))
        {
            console.log(JSON.parse(localStorage.getItem(ser))['succ'])
            var succ =JSON.parse(localStorage.getItem(ser))['succ']
            if(succ == true && i < 8){
                document.getElementsByName('urloftest')[i].classList.remove('disabled')
                document.getElementsByName('urloftest')[i].classList.add('activ')
            }
            else if (succ == false && i!=1)
            {
                document.getElementsByName('urloftest')[i-1].classList.remove('activ')
                document.getElementsByName('urloftest')[i-1].classList.add('disabled')
            }
        }
    }
})
// очистка хранилища данных
function Clear() {
    localStorage.clear()
    for (var i = 1; i < 8; i++) {
        document.getElementsByName('urloftest')[i].classList.remove('activ')
        document.getElementsByName('urloftest')[i].classList.add('disabled')
    }
}
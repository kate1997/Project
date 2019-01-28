
var myBtn = document.getElementById('build');
var mytbl = document.getElementById('mytbl');
var tb = mytbl.querySelector('tbody');
var typeId;
var ourObj;

var clearTable = function(countRow){
    if (countRow > 1) {
        for (i=tb.rows.length-1; i>0; i--){
            tb.deleteRow(i);
        }
    }
}



window.onload = function (){ 
 var ourObj;       
                    
//создание списка типов вагонов
        var typeWagon;

    //1. Создаём новый объект XMLHttpRequest
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'http://kappa.cs.petrsu.ru/~akulov/Practice/actionsFiles.php?wagon=1',false);
        
        // 3. Отсылаем запрос
        xhr.send();
        
    // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr);
        alert( xhr.status + ': ' + xhr.statusText );  //пример вывода: 404: Not Found
        } else {
        
            typeWagon = JSON.parse(xhr.responseText);
        
        
        }
        var selector=document.getElementById('type');

        for (i = 0; i < typeWagon.length; i++) {
            for (var key in typeWagon[i]) {
            
                    selector.innerHTML+='<option id="'+key+'"  >'+key+'</option>'
                    
            }
        }

}





//работа со списком типов
var select, value, text,value;


document.getElementById('choose2').onclick=function(){

    var myBtn = document.getElementById('build');
var mytbl = document.getElementById('mytbl');
var tb = mytbl.querySelector('tbody');
clearTable(tb.rows.length);
    select2 = document.getElementById("day"); // Выбираем  select по id
    dayId=select2.selectedIndex;

    for (var i = 0; i < ourObj[dayId].length; i++) {
            //alert(ourObj[key].length);
    var tr = document.createElement('tr');
   // var id = key;

    //tr.id = `row-${id}`;
    tr.innerHTML = `
                    <td>${ourObj[dayId][i]['consName']}</td>
                    <td>${ourObj[dayId][i]['quantity']}</td>`
                    
    tb.appendChild(tr);
    }

}



//отправка данных на сервер                    
document.getElementById('choose').onclick=function(){


select = document.getElementById("type"); // Выбираем  select по id
    typeId=select.selectedIndex;

 // 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
                
xhr.open('GET', 'http://kappa.cs.petrsu.ru/~akulov/Practice/actionsFiles.php?table=supply&type=' + typeId,false);

// 3. Отсылаем запрос
xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
// обработать ошибку
console.log(xhr);
alert( xhr.status + ': ' + xhr.statusText );  //пример вывода: 404: Not Found
} else {

        ourObj = JSON.parse(xhr.responseText);
    //alert(ourObj[1][0]['consName']); 
    //alert(ourObj[1].length);
   

}



//построение таблицы

//Данные для таблицы
var myBtn = document.getElementById('build');
var mytbl = document.getElementById('mytbl');
var tb = mytbl.querySelector('tbody');

// event process
var clearTable = function(countRow){
    if (countRow > 1) {
        for (i=tb.rows.length-1; i>0; i--){
            tb.deleteRow(i);
        }
    }
}
//SELECT SUDA
var selector2=document.getElementById('day');
for (var key in ourObj){ 
    selector2.innerHTML+='<option id="'+key+'"  >'+key+'</option>';
}

}
//просмотр всей таблицы 
document.getElementById('all').onclick=function(){ 
clearTable(tb.rows.length)
for (var key in ourObj){
    for (var i = 0; i < ourObj[key].length; i++) {
            //alert(ourObj[key].length);
    var tr = document.createElement('tr');
   // var id = key;

    //tr.id = `row-${id}`;
    tr.innerHTML = `
				
					<td>${ourObj[key][i]['consName']}</td>
                    <td>${ourObj[key][i]['quantity']}</td>
                    <td>${key}</td>
					`
                    
    tb.appendChild(tr);
    }
    }
}
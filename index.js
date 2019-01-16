document.getElementById("AddButton").onclick = function (){

    var name = document.getElementById('name').value;
    var cost = document.getElementById('cost').value;
    var cost_par = /[0-9]+/;
    var provCost = cost_par.test(cost);
    var raiting = document.getElementById('raiting').value;
    var time_par = /[0-9]+/;
    var provRaiting = time_par.test(raiting);
    
    
    if( name == "" && cost =="" && raiting==""){
       alert('Заполните поля!');
    }
    else{
       if( name == "" || cost =="" || raiting==""){
          alert('Вы не заполнили одно из полей');
       }
          else{
             if(provCost == true && provRaiting ==true){
                 alert('Данные успешно отправлены');
             }
                else alert('Поля 2 и 3 должны содержать только числовые значения');    
          }     
    }
    
    }
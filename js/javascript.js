// создаем массив из переменных для выпадающего окна
var arr = ['Проворный ткачик','ПРОФИ-СПОРТ','Проспект','Просто Чудо','Прокат Пони+']
// функция при взаимодействии с input
document.getElementById('search').onkeyup = function() {
    document.getElementById('result').innerHTML ='';
        var s_1 = this.value.length;
        if(s_1>0){
            for(var i=0; i<arr.length; i++) {
                var s_2 = arr[i].split('').slice(0,s_1).join('');
                if(s_2==this.value) {
                    document.getElementById('result').innerHTML+='<div class="list">'+arr[i]+'</div>';
// функция для выбора элемента из выпадающего списка и присвоения этого элемента в input 
                    $('#result .list').on('click', function(){
                      var data = ($(this).text());
                      $('#search').val(data);
                    });
// функция для скрытия выпадающего окна после выбора элемента в списке 
                    $(document).mouseup(function (e) {
                        var container = $(".list");
                        if (container.has(e.target).length === 0){
                            container.hide();
                        }
                    });
                } 
            }
        }
    };

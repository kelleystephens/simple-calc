(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){

    $('#add').click(add);
    $('#sub').click(sub);
    $('#mult').click(mult);
    $('#div').click(div);
    $('#exp').click(exp);
    $('#sqrt').click(sqrt);
    $('#fac').click(fac);
  }

  function add(){
    var values = getNums();
    var answer = values[0] + values[1];
    display(answer);
  }

  function sub(){
    var values = getNums();
    var answer = values[0] - values[1];
    display(answer);
  }

  function mult(){
    var values = getNums();
    var answer = values[0] * values[1];
    display(answer);
  }

  function div(){
    var values = getNums();
    var answer = values[0] / values[1];
    display(answer);
  }

  function exp(){
    var values = getNums();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function sqrt(){
    var values = getNums();
    var answer = Math.sqrt(values[2]);
    display2(answer);
  }

  function fac(){
    var total = 1;
    var z = $('#num3').val() * 1;
    for(var i = 2; i <= z; i++){
      total *= i;
    }
    display2(total);
  }

  function getNums(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    var z = $('#num3').val() * 1;
    return [x, y, z];
  }

  function display(answer){
    $('#answer').text(answer);
  }

  function display2(answer){
    $('#answer2').text(answer);
  }


})();

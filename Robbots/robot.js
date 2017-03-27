var robot = document.querySelectorAll('.light');
var textBox = document.querySelector('#input');

textBox.addEventListener('change', function() {
    console.log(time);
    var time = textBox.value;
    robot[0].classList.remove('off');
    robot[1].classList.remove('off');
    robot[2].classList.remove('off');
    
    if (time < 10) {
        robot[1].classList.add('off');
        robot[2].classList.add('off');

    } else if (time <= 11) {
        robot[0].classList.add('off');
        robot[2].classList.add('off');
    } else if (time < 20) {
        robot[0].classList.add('off');
        robot[1].classList.add('off');
    }else {
      robot[0].classList.add('off');
      robot[1].classList.add('off');
      robot[2].classList.add('off');
    }
    textBox.value = "";

});

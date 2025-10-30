function flipTheText(){
    let array = [];
    let usertext = prompt('Введите текст, который будет перевернут:');
    array = usertext.split('').reverse().join();
    alert(array);
}
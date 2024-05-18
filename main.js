const output = document.querySelector('#output');
const button = document.querySelector('#button');
const deleteButton = document.querySelector('#button2');
const maRange = document.querySelector('#myRange');
const arr = "qwertyuiopasdfghjklzxcvbnm1234567890".split("");


button.addEventListener('click', () => {
    maRange.addEventListener('change', () => {
        let length = Math.min(maRange.value, 32);
        let password = randomizer(length);
        output.innerHTML = password;
       
      
    })

});


deleteButton.addEventListener('click', () => {
    output.innerHTML = '';
});
function randomizer(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += arr[Math.floor(Math.random() * arr.length )];

    }
    return password;
}



document.getElementById('input-btn').addEventListener('click', function(){
    const name = document.getElementById('input').value;
    document.getElementById('heading').innerText = 'Hello, ' + name;
})

const redBox = document.getElementById('red-box')
redBox.addEventListener('click', function(){
    redBox.style.backgroundColor = 'red'
    redBox.style.color = 'white'
})

const blueBox = document.getElementById('blue-box')
blueBox.addEventListener('click', function(){
    blueBox.style.backgroundColor = 'blue'
    blueBox.style.color = 'white'
})

const greenBox = document.getElementById('green-box')
greenBox.addEventListener('click', function(){
    greenBox.style.backgroundColor = 'green'
    greenBox.style.color = 'white'
})

const yellowBox = document.getElementById('yellow-box')
yellowBox.addEventListener('click', function(){
    yellowBox.style.backgroundColor = 'yellow'
    
})

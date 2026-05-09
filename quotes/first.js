const qoutes = ["Don't watch the clock; do what it does. Keep going.",
    "Dream big and dare to fail.","Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.","Push yourself, because no one else is going to do it for you.",
    "Study while others are sleeping; work while others are loafing.",
    "Success comes to those who prepare well.","Small progress each day adds up to big results.",
    "Life is what happens when you're busy making other plans.",
    "Happiness depends upon ourselves.",
    "Live simply, dream big, be grateful.","I’m not lazy, I’m just on energy-saving mode.",
    "Life is short. Smile while you still have teeth.",
    "I need six months of vacation, twice a year."
]

const button = document.querySelector("button")
const qoute = document.querySelector("h1")

button.addEventListener('click',()=>{
    const idex = Math.floor(Math.random()*12)
    qoute.textContent = qoutes[idex]
})
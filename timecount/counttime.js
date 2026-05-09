const time = document.getElementById("time")

setInterval(()=>{
    let t1 = Date.now()
    let olympic = new Date(2028,6,14).getTime()
    let timer = olympic - t1

    
    const day = Math.floor((timer)/(1000*60*60*24))
    timer %= (1000*60*60*24)
    const hour = Math.floor((timer)/(1000*60*60))
    timer %= (1000*60*60) 
    const minut = Math.floor((timer)/(1000*60))
    timer %= (1000*60) 
    const second = Math.floor((timer)/(1000))
    timer %= (1000) 

    time.textContent = `Day ${day}  :  Hour ${hour} :  Minut ${minut} : second ${second}`

},1000)
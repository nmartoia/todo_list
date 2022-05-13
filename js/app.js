let liste=document.querySelector(".liste")
let input=document.querySelector("input")
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    if(input.value){
        let li = document.createElement('li')
        li.className="border"
        let p = document.createElement('p')
        p.textContent=input.value
        li.appendChild(p)
        liste.appendChild(li)
        let btn1 = document.createElement('button')
        btn1.className="del"
        btn1.textContent="fait"
        li.appendChild(btn1)
        let del=document.querySelectorAll(".del")
        for (let i = 0; i < del.length; i++) {
            del[i].addEventListener("click",function(){
                del[i].parentElement.className="border fait"
            })
        }
        let up = document.createElement('button')
        let down = document.createElement('button')
        up.textContent='UP'
        down.textContent='DOWN'
        up.className='up'
        down.className='down'
        li.appendChild(up)
        li.appendChild(down)
        const buttonup = document.querySelectorAll(".up");
        const buttondown = document.querySelectorAll(".down");
        const buttonups = buttonup[buttonup.length-1];
        const buttondowns = buttondown[buttondown.length-1];
        buttonups.addEventListener("click", function(){
            (buttonups.parentElement).previousElementSibling.insertAdjacentElement("beforebegin", buttonups.parentElement);
        })
        buttondowns.addEventListener("click", function(){
            (buttondowns.parentElement).nextElementSibling.insertAdjacentElement("afterend", buttondowns.parentElement);
        })
        let btnt=document.querySelector(".btnt")
        btnt.addEventListener("click",function(){
            li.style.display="block"
        })
        let btnf=document.querySelector(".btnf")
        btnf.addEventListener("click",function(){
            if(li.className!="border fait"){
                li.style.display="none"
            }
            else{
                li.style.display="block"
            }
        })
        let btnpf=document.querySelector(".btnpf")
        btnpf.addEventListener("click",function(){
            if(li.className=="border fait"){
                li.style.display="none"
            }
            else{
                li.style.display="block"
            }
        })
    }
    else{
        console.log('vous navez rien mis D:')
    }
})

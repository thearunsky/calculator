// Some variables
let text = "";
let history = "";
let times = 0

// Getting all buttons
const allBtn = document.querySelectorAll(".btn");

// Make them all array and targeting one 
Array.from(allBtn).forEach((element)=>{

    // Adding click event to all buttons
    element.addEventListener("click",(event)=>{

        // Getting the value of button
        let show = element.value;

        console.log(show);
        if (show == ""){
            return
        }else{

            // If button is equal
            if(show == "="){
    
                history = text
                text = eval(text)
                document.getElementById("display").value = text
    
    
                let save = `${history} = ${text}`
                saveHistory(save)
    
            // If button is AC
            }else if(show == "C"){
                text = ""
                document.getElementById("display").value = text
            }
            else{
                text += show
                document.getElementById("display").value = text
            }
        }

    })
});


function saveHistory (data){
    let main = document.getElementById("history");
    
    let div = document.createElement("div")
    let h3 = `<h3 class="clear" >${times+= 1}) ${data}</h3>`
    div.innerHTML = h3
    
    main.appendChild(div)
}

function reset(){

    let all_class = document.querySelectorAll(".clear")
    Array.from(all_class).forEach((e)=>{
        e.innerHTML = ""
    })
    times = 0

}
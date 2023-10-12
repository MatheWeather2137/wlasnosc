const url = `http://localhost:3000`

async function wyswietl(){
    console.log("wyswietl")
    const data = await fetch(`${url}/select_all`)
    const json = await data.json()
    
    console.log(json)
    document.getElementById("result").innerHTML = ""

    for(let i = 0; i <= json.length - 1; i++){
        
        const div = document.createElement("div")
        div.classList.add("div")
        document.getElementById("result").appendChild(div)

        const przedmiot = document.createElement("h1")
        przedmiot.innerHTML = json[i].przedmiot
        div.appendChild(przedmiot)

        const ocena = document.createElement("p")
        ocena.innerHTML = json[i].ocena
        div.appendChild(ocena)
    }
    
}
wyswietl()


async function insert_into(){
    const przedmiot = document.getElementById("przedmiot")
    const ocena = document.getElementById("ocena")
    console.log("insert_into")
    const data = await fetch(`${url}/add/${przedmiot.value}/${ocena.value}`)
    const json = await data.json()
    console.log(json)
    await wyswietl()
}
async function delete_from(){
    
}

async function sort(){
    const radios = document.getElementsByName("min_max")
    console.log(radios)
    var value = ""
    radios.forEach((element)=>{
        if(element.checked === true){
            value = element.value
        }
    })
    const data = await fetch(`${url}/min_max/${value}`)
    const json = await data.json()
    
    console.log(json)
    document.getElementById("result").innerHTML = ""

    for(let i = 0; i <= json.length - 1; i++){
        const div = document.createElement("div")
        div.classList.add("div")
        document.getElementById("result").appendChild(div)

        const przedmiot = document.createElement("h1")
        przedmiot.innerHTML = json[i].przedmiot
        div.appendChild(przedmiot)

        const ocena = document.createElement("p")
        ocena.innerHTML = json[i].ocena
        div.appendChild(ocena)
    }
}

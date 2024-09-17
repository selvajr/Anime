var arr = []

async function api_call() {
    cnum = document.getElementById("cnum")
    cnum.style.display = "none"
    go1 = document.getElementById("go")
    go1.style.display = "none"
    cont = document.getElementById("container")
    cont.style.display = "block"
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    const response = await fetch(`https://api.jikan.moe/v4/characters/${cnum.value}`, requestOptions);
    const data = await response.json();
    console.log(data)
    cont.innerHTML = `<img src="${data.data.images.jpg.image_url}" alt="">
    <div>Name:   ${data.data.name}</div></br>
    <div>Name_kanji:   ${data.data.name_kanji}</div></br>
    <div id="pr">About</br>
    ${data.data.about}
    </div>
    <button onclick="go()">Try Another</button>
    `


}

function go() {
    cnum = document.getElementById("cnum")
    cnum.style.display = "block"
    go1 = document.getElementById("go")
    go1.style.display = "block"
    cont = document.getElementById("container")
    cont.style.display = "none"
}
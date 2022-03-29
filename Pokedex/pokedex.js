const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((respuesta) => {
        if (respuesta != 200) {
            console.log(respuesta)
            pokeImage("./img/404-error.jpg");
        }
        return respuesta.json();

    }).then((data) => {
        console.log(data)
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg)
        pokeImage(pokeImg);
    })
}

//fetchPokemon();
const pokeImage = (url) => {
        const pokeImg = document.getElementById("pokeImg");
        pokeImg.src = url;
    }
    /*

        const imprimir = () => {
            const pokeName = document.getElementById("pokeName");
            let pokeInput = pokeName.value;

            console.log("Hola " + pokeInput);
        }*/
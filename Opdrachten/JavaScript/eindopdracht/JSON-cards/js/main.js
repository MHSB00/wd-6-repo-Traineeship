const json_url = "../JSON-cards/pokemon-json/pokedex.json";
const pokeThumbSrc = './pokemon-json/thumbnails/';
const pokeBgSrc = './pokemon-json/images/';
const dex = document.querySelector('.dex');

const url = window.location.search;
const urlParams = new URLSearchParams(url);

//create docfragment
const docFrag = document.createDocumentFragment();

fetch(json_url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (pokemon) {
        genDex(pokemon);
    }).catch((error) => {
        console.log(error);
        console.log('Failed to load json');
    })

function genDex(pokemon) {
    const genPicked = genSelect();

    const filterType1 = urlParams.get('filterType1');
    const filterType2 = urlParams.get('filterType2');

    const twoTypes = pokemon.filter(pokemon => pokemon.type.length == 2);
    const oneType = pokemon.filter(pokemon => pokemon.type.length == 1);  
    

    let result = [];

    //filters
    //when 2 types are selected and are not the same
    if ((filterType1 != '' && filterType2 != '') && filterType1 != filterType2 ) {
        for (let i = 0; i < twoTypes.length; i++) {
            if ((filterType1 == twoTypes[i].type[0] && filterType2 == twoTypes[i].type[1]) ||
                (filterType1 == twoTypes[i].type[1] && filterType2 == twoTypes[i].type[0])) {
                result.push(twoTypes[i]);
            }
        }
    //when 1 type is selected
    } else if ((filterType1 != '' && filterType2 == '') ||
        (filterType1 == '' && filterType2 != '')) {
        for (let i = 0; i < oneType.length; i++) {
            if (filterType1 == oneType[i].type || filterType2 == oneType[i].type) {
                result.push(oneType[i]);
            }
        }
    } else {
        //when no type is selected
        result = pokemon;
    }

     //poke stats generation
    for (let i = 0; i < result.length; i++) {
        if (result[i].id <= genPicked) {
            //create tile
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.backgroundImage = 'url(' + pokeBgSrc + pokeImgGen(result[i].id-1) + ')';

            //create data container
            const pokeContainer = document.createElement('div');
            pokeContainer.classList.add('pokeContainer');
            tile.appendChild(pokeContainer);

            const pokeNameContainer = document.createElement('div');
            pokeNameContainer.classList.add('pokeNameContainer');
            pokeContainer.appendChild(pokeNameContainer);

            const pokeName = document.createElement('span');
            pokeName.classList.add('pokeName');
            pokeName.textContent = result[i].name.english;
            pokeNameContainer.appendChild(pokeName);

            const pokeImg = document.createElement('img');
            pokeImg.classList.add('pokeImg');
            pokeImg.src = pokeThumbSrc + pokeImgGen(result[i].id-1);
            pokeNameContainer.appendChild(pokeImg);

            const pokeId = document.createElement('span');
            pokeId.classList.add('pokeId');
            pokeId.textContent = '#' + result[i].id;
            pokeNameContainer.appendChild(pokeId);

            const pokeTypeContainer = document.createElement('div');
            pokeTypeContainer.classList.add('pokeTypeContainer');
            pokeContainer.appendChild(pokeTypeContainer);

            pokeTypeGen(result, pokeTypeContainer, i);

            const pokeStatsLeft = document.createElement('div');
            pokeStatsLeft.classList.add('pokeStatsLeft');

            const pokeStatsRight = document.createElement('div');
            pokeStatsRight.classList.add('pokeStatsRight');

            pokeStatsGen(result, pokeStatsLeft, pokeStatsRight, i);
            pokeContainer.appendChild(pokeStatsLeft)
            pokeContainer.appendChild(pokeStatsRight);

            //add tiles to docFrag
            docFrag.appendChild(tile);
        }
    }
    //add docFrag to dex
    dex.appendChild(docFrag);

    const pokeStats = document.querySelectorAll('.tile');
    removeBG(pokeStats);
}

//img url generation
function pokeImgGen(i) {
    i = i + 1;
    if (i.toString().length == 1) {
        i = '00' + i + '.png';
    } else if (i.toString().length == 2) {
        i = '0' + i + '.png';
    } else {
        i = i + '.png';
    }
    return i;
}

//type css generation
function pokeTypeGen(result, pokeTypeContainer, i) {

    for (let t = 0; t < result[i].type.length; t++) {
        let pokeType = document.createElement('span');
        pokeType.classList.add('type');
        pokeType.classList.add(result[i].type[t]);
        pokeType.textContent = result[i].type[t];
        pokeTypeContainer.appendChild(pokeType);
    }
}

//stats generation
function pokeStatsGen(pokemon, pokeStatsLeft, pokeStatsRight, i) {
    for (let t = 0; t < Object.keys(pokemon[i].base).length; t++) {
        if (t < 3) {
            let ability = Object.keys(pokemon[i].base);
            let pokeStats = document.createElement('span');
            pokeStats.classList.add('stats')
            pokeStats.textContent = ability[t];
            let pokeStatsVal = document.createElement('span');
            pokeStatsVal.classList.add('statsVal');
            pokeStatsVal.textContent = pokemon[i].base[ability[t]];
            pokeStatsLeft.appendChild(pokeStats);
            pokeStatsLeft.appendChild(pokeStatsVal);
        } else if (t >= 3) {
            let ability = Object.keys(pokemon[i].base);
            let pokeStats = document.createElement('span');
            pokeStats.classList.add('stats')
            pokeStats.textContent = ability[t];
            let pokeStatsVal = document.createElement('span');
            pokeStatsVal.classList.add('statsVal');
            pokeStatsVal.textContent = pokemon[i].base[ability[t]];
            pokeStatsRight.appendChild(pokeStats);
            pokeStatsRight.appendChild(pokeStatsVal);
        }
    }
}

//reset bg img after mouseleave
function resetBG(pokeStats, url) {
    pokeStats.forEach((tile) => {
        tile.addEventListener('mouseleave', () => {
            tile.style.backgroundImage = url;
            tile.childNodes[0].style.opacity = '0';
        });
    });
}

//create mouseOverEvent for bg-img
function removeBG(pokeStats) {
    pokeStats.forEach((tile) => {
        tile.addEventListener('mouseenter', () => {
            resetBG(pokeStats, tile.style.backgroundImage);
            tile.style.backgroundImage = 'none';
            tile.childNodes[0].style.opacity = '1';
        });
    });
}

//get selected generation
function genSelect() {
    let genPicked = 'Pick a Generation';

    //get search paras
    const pokeGen = urlParams.get('pokeGen');

    //set chosen gen
    if (pokeGen != '') {
        switch (pokeGen) {
            case 'gen1':
                genPicked = 151;
                break;
            case 'gen2':
                genPicked = 251;
                break;
            case 'gen3':
                genPicked = 386;
                break;
            case 'gen4':
                genPicked = 493;
                break;
            case 'gen5':
                genPicked = 649;
                break;
            case 'gen6':
                genPicked = 721;
                break;
            case 'gen7':
                genPicked = 810;
                break;
            default:
                break;
        }
    }

    const current = document.getElementById('current');
    current.value = genPicked;
    return genPicked;
}

//clear button
document.getElementById('clear').addEventListener('click', () => {
    const dex = document.querySelector('.dex');
    dex.textContent = '';
    const current = document.getElementById('current');
    current.value = 'Pick a Generation';
});
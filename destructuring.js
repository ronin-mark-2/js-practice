// Destructuring

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autum'
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]);
}


// Another one

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone= {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
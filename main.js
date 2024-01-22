let cartItems = [];
let quantity=0;
var tableContainer;
var table;
function togglePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = (popupContainer.style.display === "none") ? "block" : "none";

    if (popupContainer.style.display === "block") {
        displayCartTable();
    }
}
function displayCartTable() {
     tableContainer = document.getElementById("carttable");
    tableContainer.innerHTML = ''; // Clear previous content

     table = document.createElement("table");
    table.classList.add("cart-table");

    var headerRow = table.insertRow();
    var headerCell1 = headerRow.insertCell(0);
    headerCell1.innerHTML = "<b>Name</b>";

    var headerCell2 = headerRow.insertCell(1);
    headerCell2.innerHTML = "<b>Price</b>";

    var headerCell3 = headerRow.insertCell(2);
    headerCell3.innerHTML = "<b>Quantity</b>";

    cartItems.forEach(item => {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        cell1.innerHTML = item.name;

        var cell2 = row.insertCell(1);
        cell2.innerHTML = `$${item.price}`;

        var cell3 = row.insertCell(2);
        cell3.innerHTML = item.quantity;
    });

    // Calculate and display the total amount
    var totalRow = table.insertRow();
    var totalCell1 = totalRow.insertCell(0);
    totalCell1.innerHTML = "<b>Total</b>";

    var totalCell2 = totalRow.insertCell(1);
    totalCell2.innerHTML = `<b>$${calculateTotal()}</b>`;

    tableContainer.appendChild(table);
}

function calculateTotal() {
    var total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
}

    

const bikes = [
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/2ut4THpcExwC1n2g3laIHn/2bbf4e7b788514bd6e7f4208720b2508/Model-Menu-MY24-Panigale-V4-SP2-30-Anniversario-916.png', 
        details: 'Panigale V4 SP2,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/7IvfslJCuMRW3hgD6momRv/1e79522e5d41d811724734397bd9b757/Model-Menu-MY24-Hypermotard-698-Mono-RVE.png', 
        details: 'Hypermotard 698 Mono,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/2jmSo2RBTauvwaWaimeVCz/af33948d8929d5437fa3eef6e644ed37/Model-Menu-MY24-Multistrada-V4-RS.png', 
        details: 'Multistrada V4 RS,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/48zGJmEsTgIWOr5fg7yDY6/57ae8b987001e331ee40ed1c73f1a977/Model-Menu-MY23-DesertX-Rally.png', 
        details: 'DesertX Rally,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/1U3Y08O85YxDFuXSIQuOGi/237425047d4d041b02fdc0cc578844ef/Model-Menu-MY23-Multistrada-V4-S-Grand-Tour.png', 
        details: 'Multistrada V4 S Grand Tour,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/4LK4WP7SM4P4Ok6GNZYWYb/1e4b8796f323a0d51b369ee618849dc7/Model-Menu-MY23-Monster-30-Anniversario.png', 
        details: 'Monster 30 Anniversario,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/3PcRGP82S1ih4ad9aLWrEJ/be7344e1676f785fe1a2b55ffd62ecd8/Model-Menu-MY23-Multistrada-V2S-TBST.png', 
        details: 'Multistrada V2 S,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/3D5QKQasxYqwDHf49b0myd/ef53b3bfc7c025b25afebb55468156d7/Model-Menu-MY23-Panigale-V2-Bk.png', 
        details: 'Powerstage RR,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/3wbPL8SNVOXRaIvQDEPRbL/32ebdfe90abc848716b65db4514f4ede/Model-Menu-MY23-Hypermotard-950-RVE.png', 
        details: 'Panigale V2,'
    },
    { 
        name: 'DUCATI', 
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/2uq34pfO2Pnizmg9y5Wtpy/443ff5460725c0466740350ea3bc0919/Model-Menu-MY23-Monster-937-DS.png', 
        details: 'Hypermotadr,'
    },
];

function displayBikes() {
    const container = document.getElementById('showbike');

    bikes.forEach(bike => {
        const productElement = document.createElement('div');
        productElement.classList.add('bikecard');

        const imgElement = document.createElement('img');
        imgElement.src = bike.image;
        imgElement.alt = bike.name;

        const nameElement = document.createElement('h2');
        nameElement.innerText = bike.name;

        const detailsElement = document.createElement('p');
        detailsElement.innerText = bike.details;

        const buyBtn = document.createElement('a');
        buyBtn.innerText = 'More Details';
        buyBtn.href = 'https://www.ducati.com/ww/en/home';
        buyBtn.target = '_blank';
        buyBtn.classList.add('btn', 'btn-outline-danger');

        productElement.appendChild(imgElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(detailsElement);
        productElement.appendChild(buyBtn);

        container.appendChild(productElement);
    });
}
const helmets = [
    { 
        id: 1,
        name: 'Bell Moto-3 Classic Ece6 Helmet ', 
        image: 'https://www.motostorm.it/images/products/small/caschi_modulari/sena_outrush_r_helmet_neromatt_p.jpg', 
        price: 244
    },
    { 
        id: 4,
        name: 'Premier Vintage Iridium Edition 22.06 Helmet', 
        image: 'https://www.motostorm.it/images/products/small/caschi_integrali/shoei_ex_zero_grigio_p.jpg', 
        price: 129
    },
    { 
        id: 5,
        name: 'Agv K1 S E2206 Helmet Black', 
        image: 'https://www.motostorm.it/images/products/small/caschi_integrali/shoei_ex_zero_nero_p.jpg', 
        price: 149
    },
    { 
        id: 6,
        name: 'Scorpion Exo City 2 Solid Helmet black', 
        image: 'https://www.motostorm.it/images/products/small/caschi_integrali/agv_k1_s_nero_p.jpg', 
        price: 97
    },
    { 
        id: 7,
        name: 'Mt Helmets Streetfighter Sv S Darkness A1 White', 
        image: 'https://www.motostorm.it/images/products/small/caschi_jet/scorpion_exocity2_solid_bianco_p.jpg', 
        price: 104
    },
    { 
        id: 8,
        name: 'Shoei Ex-zero White', 
        image: 'https://www.motostorm.it/images/products/small/caschi_modulari/mthelmets_streetfighter_darkness_a1_p.jpg', 
        price: 379
    },
    { 
        id: 9,
        name: 'Ls2 Of606 Drifter Devor Helmet Matt Sand', 
        image: 'https://www.motostorm.it/images/products/small/caschi_modulari/hjc_i400_semiflatnoir_p.jpg', 
        price: 111
    },
    { 
        id: 10,
        name: 'Hjc I100 Modular Helmet Semi Flat Black', 
        image: 'https://www.motostorm.it/images/products/small/caschi_integrali/agv_pistagprr_helmet_2206_futuro_p.jpg', 
        price: 239
    },
    { 
        id: 11,
        name: 'Agv Pista Gp Rr E2206 Futuro Carbon Forgiato', 
        image: 'https://www.motostorm.it/images/products/small/caschi_modulari/mthelmets_streetfighter_sv_s_solid_black_p.jpg', 
        price: 136
    },
    { 
        id: 12,
        name: 'Mt Helmets Streetfighter Sv S Solid A1 Matt Black', 
        image: 'https://www.motostorm.it/images/products/small/caschi_integrali/shoei_nxr2_gleam_tc5_p.jpg', 
        price: 90
    },
];

function displayHelmets() {
    const container = document.getElementById('showhelmet');
    let i = 0;

    helmets.forEach(helmet => {
        const productElement = document.createElement('div');
        productElement.classList.add('helmetcard');

        const imgElement = document.createElement('img');
        imgElement.src = helmet.image;
        imgElement.alt = helmet.name;

        const nameElement = document.createElement('h4');
        nameElement.innerText = helmet.name;

        const priceElement = document.createElement('p');
        priceElement.innerText = `Price: $${helmet.price}`;

        const buyBtn = document.createElement('button');
        buyBtn.innerText = 'Add to cart';
        buyBtn.id = 'helmet' + i;
        i++;
        buyBtn.addEventListener('click', () => {
            addToCart(helmet.id, helmet.name, helmet.price, buyBtn.id);
        });
        buyBtn.classList.add('btn', 'btn-outline-danger');

        productElement.appendChild(imgElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(buyBtn);

        container.appendChild(productElement);
    });
}
const exausts = [
    { 
        id: 1,
        name: 'Akrapovic Full Exhaust Racing Carbon Yamaha Mt-07', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/scarico-carbonio-racing-akrapovic-yamaha-mt07-1_p.jpg', 
        price: 840
    },
    { 
        id: 2,
        name: 'Akrapovic Slip On Carbon Racing Bmw F 900 Xr', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_sliponcarbonioracing_f900xr_p.jpg', 
        price: 963
    },
    { 
        id: 3,
        name: 'Akrapovic Slip On Titanium Approved Tenere 700', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_s-y7so3-hgjt_p.jpg', 
        price: 896
    },
    { 
        id: 4,
        name: 'Akrapovic V-tuv227 Noise Damper', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_dbkiller_v-tuv227_p.jpg', 
        price: 480
    },
    { 
        id: 5,
        name: 'Mivv No Kat Pipe Ducati Monster 937', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/mivv_d.048.c1_p.jpg', 
        price: 798
    },
    { 
        id: 6,
        name: 'Akrapovic Slip On Titanium Approved Bmw F 900 Xr', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_slipontitanioomologato_f900xr_p.jpg', 
        price: 997
    },
    { 
        id: 7,
        name: 'Akrapovic Slip On Approved Titanium Hd Pan America', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_s-hd12so1-haft_p.jpg', 
        price: 915
    },
    { 
        id: 8,
        name: 'Mivv X-m5 Black Racing Full Exhaust Mt-09 2021', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/mivv_y.068.sc5b_3_p.jpg', 
        price: 706
    },
    { 
        id: 9,
        name: 'Up Map Cable Ducati Euro 4', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/upmap_sl010571_p.jpg', 
        price: 585
    },
    { 
        id: 10,
        name: 'Akrapovic Racing Line Full Exhaust Zx-10r 2021', 
        image: 'https://www.motostorm.it/images/products/small/scarichi/akrapovic_s-k10r10-rc_p.jpg', 
        price: 729
    },
];

function displayExaust() {
    const container = document.getElementById('showexaust');
    let i = 0;

    exausts.forEach(exaust => {
        const productElement = document.createElement('div');
        productElement.classList.add('helmetcard');

        const imgElement = document.createElement('img');
        imgElement.src = exaust.image;
        imgElement.alt = exaust.name;

        const nameElement = document.createElement('h4');
        nameElement.innerText = exaust.name;

        const priceElement = document.createElement('p');
        priceElement.innerText = `Price: $${exaust.price}`;

        const buyBtn = document.createElement('button');
        buyBtn.innerText = 'Add to cart';
        buyBtn.id = 'exaust' + i;
        i++;
        buyBtn.addEventListener('click', () => {
            addToCart(exaust.id, exaust.name, exaust.price, buyBtn.id);
        });
        buyBtn.classList.add('btn', 'btn-outline-danger');

        productElement.appendChild(imgElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(buyBtn);

        container.appendChild(productElement);
    });
}
const accessories = [
    { 
        id: 1,
        name: 'Wd40 Specialist Moto Chain Lube Dry Conditions', 
        image: 'https://www.motostorm.it/images/products/small/box/wd40_catenasecco_p.jpg', 
        price: 11
    },
    { 
        id: 2,
        name: 'Bagster Disc Block Pochette Black', 
        image: 'https://www.motostorm.it/images/products/small/borse/bagster_xac410_p.jpg', 
        price: 120
    },
    { 
        id: 3,
        name: 'Bagster Tab Traditional', 
        image: 'https://www.motostorm.it/images/products/small/borse/bagster_modulotanktraditional_p.jpg', 
        price: 128
    },
    { 
        id: 4,
        name: 'Shad Sh58x Expandable Top Case Carbon + Backrest', 
        image: 'https://www.motostorm.it/images/products/small/borse/shad_sh58x_topcase_1_p.jpg', 
        price: 232
    },
    { 
        id: 5,
        name: 'Airoh Helmet Bag For Aviator', 
        image: 'https://www.motostorm.it/images/products/small/borse/airoh-helmet-bag-18b0r03_p.jpg', 
        price: 232
    },
    { 
        id: 6,
        name: 'Garmin Deluxe Bag Blackr', 
        image: 'https://www.motostorm.it/images/products/small/borse/garmin_deluxe_nero_p.jpg', 
        price: 229
    },
    { 
        id: 7,
        name: 'Motul Chain Lube Off Road C3 400 Ml', 
        image: 'https://www.motostorm.it/images/products/small/box/motul_chainlube400ml_offroad_p.jpg', 
        price: 97
    },
    { 
        id: 8,
        name: 'Ohlins Sd068 Steering Damper Panigale', 
        image: 'https://www.motostorm.it/images/products/small/ammortizzatori_moto/ohlins_sd068_2_p.jpg', 
        price: 346
    },
    { 
        id: 9,
        name: 'Rizoma Indicator Light Unit Pair Fr070', 
        image: 'https://www.motostorm.it/images/products/small/luci/fr070b_1_p.jpg', 
        price: 68
    },
    { 
        id: 10,
        name: 'Kappa E168k Elastic Net', 
        image: 'https://www.motostorm.it/images/products/small/borse/givi_e161_p.jpg', 
        price: 960
    },
];

function displayaccessories() {
    const container = document.getElementById('showaccessorie');
    let i = 0;

    accessories.forEach(accessorie => {
        const productElement = document.createElement('div');
        productElement.classList.add('accessoriescard');

        const imgElement = document.createElement('img');
        imgElement.src = accessorie.image;
        imgElement.alt = accessorie.name;

        const nameElement = document.createElement('h4');
        nameElement.innerText = accessorie.name;

        const priceElement = document.createElement('p');
        priceElement.innerText = `Price: $${accessorie.price}`;

        const buyBtn = document.createElement('button');
        buyBtn.innerText = 'Add to cart';
        buyBtn.id = 'accessorie' + i;
        i++;
        buyBtn.addEventListener('click', () => {
            addToCart(accessorie.id, accessorie.name, accessorie.price, buyBtn.id);
        });
        buyBtn.classList.add('btn', 'btn-outline-danger','askqnty');

        productElement.appendChild(imgElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(buyBtn);

        container.appendChild(productElement);
    });
}

function addToCart(id, name, price, itemid) {
    const hbtn = document.getElementById(itemid);

    if (hbtn.innerHTML === 'Add to cart') {
        if (hbtn.classList.contains('askqnty')) {
            let inputQuantity;
            getalert();
            function getalert(){
                inputQuantity = prompt('Enter quantity (1-3):');
                if(inputQuantity>=0&&inputQuantity<=3){
                    cartItems.push({
                        id,
                        name,
                        price,
                        quantity: inputQuantity
                    });
                    return;
                }
                else{
                    getalert();
                }
            }
        }
      else{
        cartItems.push({
            id,
            name,
            price,
            quantity: 1
        });
      }
        hbtn.innerHTML = 'Remove from cart';
        quantity++;
        const count = document.getElementById('itemCount');
        count.innerHTML = quantity;
    } else if (hbtn.innerHTML === 'Remove from cart') {
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1) {
            cartItems.splice(index, 1);
        }
        hbtn.innerHTML = 'Add to cart';
        quantity--;
        const count = document.getElementById('itemCount');
        count.innerHTML = quantity;
    }
    
}

function order(){
    if(quantity>0){
    alert('Your order is placed and your tracking and warranty ID is "ADF35VS1"');
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = (popupContainer.style.display === "none") ? "block" : "none";
    quantity=0;
const count = document.getElementById('itemCount');
        count.innerHTML = quantity;
        cartItems = [];
        displayCartTable();
        updateButtonText();
}
else{
    alert('Please add items');
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = (popupContainer.style.display === "none") ? "block" : "none";
}
}
function updateButtonText() {
    var buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(function(button) {
      if (button.innerHTML === 'Remove from cart') {
        button.innerHTML = 'Add to cart';
      }
    });
  }
  
window.onload = function() {
    displayBikes();
    displayHelmets();
    displayExaust();
    displayaccessories()
};

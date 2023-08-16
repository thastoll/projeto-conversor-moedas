function convertValue(){
    const convertBtn = document.querySelector(".btnConvert");

    convertBtn.addEventListener("click", function(){
        const inputValueConvert = document.querySelector(".inputValueConvert").value; // valor digitado pelo usuario
        const currencySelect = document.querySelector(".currencySelect"); // moeda que vai converter
        const valueToConvert = document.querySelector(".valueToConvert"); // valor em real
        const valueConverted = document.querySelector(".valueConverted"); // valor convertido

        const dolar = 4;
        const euro = 5;
        const libra = 7;
        const bitcoin = 30;

        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        }).format(inputValueConvert); // valor em reais

        if(currencySelect.value == "dolar"){
            valueConverted.innerHTML = new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            }).format(inputValueConvert / dolar); // valor convertido na moeda escolhida
        }

        if(currencySelect.value == "euro"){
            valueConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
                style: 'currency', 
                currency: 'EUR' 
            }).format(inputValueConvert / euro);
        }
      
        if(currencySelect.value == "libra"){
            valueConverted.innerHTML = new Intl.NumberFormat('en-GB', { 
                style: 'currency', 
                currency: 'GBP' 
            }).format(inputValueConvert / libra);
        }
      
        if(currencySelect.value == "bitcoin"){
            valueConverted.innerHTML = new Intl.NumberFormat('en-DE', { 
                style: 'currency', 
                currency: 'BTC' 
            }).format(inputValueConvert / bitcoin);
        }
    
    });
};

function changeCurrency(){
    const currencySelect = document.querySelector(".currencySelect"); 

    currencySelect.addEventListener("change", function(){
        const currencyName = document.querySelector(".currencyName");
        const currencyImage = document.querySelector(".currencyImg");

        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar"
            currencyImage.src = "assets/dolar.png"
        };

        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImage.src = "assets/euro.png"
        };

        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
            currencyImage.src = "assets/libra.png"
        };
        
        if(currencySelect.value == "bitcoin"){
            currencyName.innerHTML = "BitCoin"
            currencyImage.src = "assets/bitcoin.png"
        };

        convertValue();
    });
};


window.onload = function(){
    convertValue();
    changeCurrency();
};

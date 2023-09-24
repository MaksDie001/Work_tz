
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    .then(data=>data.json())
    .then(res=>{
        let binance_list=res
        let ul=document.getElementById("list_usdt")
        for (let i in binance_list){
            let li = document.createElement('li');
            if(i<5){
                li.innerHTML=`<span class="blue_back_span"><span class="red_span">id:${binance_list[i].id}</span>,<span class="yellow_span">symbol:${binance_list[i].symbol}</span>,<span class="white_span">name:${binance_list[i].name}</span></span>`
                ul.append(li)
            }
            else {
                break
            }
        }
        for (let i in binance_list.slice(5)){
            let li = document.createElement('li');
            if (binance_list[i].symbol === "usdt"){
                li.innerHTML=`<span class="green_back_span"><span class="red_span">id:${binance_list[i].id}</span>,<span class="yellow_span">symbol:${binance_list[i].symbol}</span>,<span class="white_span">name:${binance_list[i].name}</span></span>`
            }
            else{
                li.innerHTML=`<span class="red_span">id:${binance_list[i].id}</span>,<span class="yellow_span">symbol:${binance_list[i].symbol}</span>,<span class="purpur_span">name:${binance_list[i].name}</span>`
            }
            ul.append(li)

        }
    })






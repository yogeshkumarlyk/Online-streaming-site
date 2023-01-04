let xhr = new XMLHttpRequest();
xhr.open("GET","/data.json");
xhr.send();
list=[];
list2=[];

xhr.onload = () => {
    //console.log(xhr.response);
    storeData = JSON.parse(xhr.responseText).Stores;

    var selected = document.getElementsByClassName("shows")[0].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category} of storeData) {
            if (selected == category){
                //var div = batData.adocument.createElement('div');
                const Data = content.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("shows")[1].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category} of storeData) {
            if (selected == category){
                //var div = batData.adocument.createElement('div');
                const Data = content2.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("shows")[2].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category} of storeData) {
            if (selected == category){
                //var div = batData.adocument.createElement('div');
                const Data = content3.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("shows")[3].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category} of storeData) {
            if (selected == category){
                //var div = batData.adocument.createElement('div');
                const Data = content4.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("shows")[4].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category} of storeData) {
            if (selected == category){
                //var div = batData.adocument.createElement('div');
                const Data = content5.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                list.push(Data);
            }
            
        }
    }
    selection1 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        document.getElementById("nav2").style.color = "darkorange";
        document.getElementById("nav3").style.color = "darkorange";
        document.getElementById("nav4").style.color = "darkorange";
        document.getElementById("nav").style.color = "darkorange";
        document.getElementById("nav1").style.color = "red";
        storeData = JSON.parse(xhr.responseText).Stores;
        //var selected = document.getElementsByClassName("tvshows").id;
        //console.log(selected);
        if(storeData) {
            for(const {pic,title,subcategory} of storeData) {
                if (subcategory == "tvshows"){
                    //var div = batData.adocument.createElement('div');
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection2 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        document.getElementById("nav1").style.color = "darkorange";
        document.getElementById("nav3").style.color = "darkorange";
        document.getElementById("nav4").style.color = "darkorange";
        document.getElementById("nav").style.color = "darkorange";
        document.getElementById("nav2").style.color = "red";
        storeData = JSON.parse(xhr.responseText).Stores;
        //var selected = document.getElementsByClassName("tvshows").id;
        //console.log(selected);
        if(storeData) {
            for(const {pic,title,subcategory} of storeData) {
                if (subcategory == "movies"){
                    //var div = batData.adocument.createElement('div');
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection3 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        document.getElementById("nav2").style.color = "darkorange";
        document.getElementById("nav1").style.color = "darkorange";
        document.getElementById("nav4").style.color = "darkorange";
        document.getElementById("nav").style.color = "darkorange";
        document.getElementById("nav3").style.color = "red";
        storeData = JSON.parse(xhr.responseText).Stores;
        //var selected = document.getElementsByClassName("tvshows").id;
        //console.log(selected);
        if(storeData) {
            for(const {pic,title,subcategory} of storeData) {
                if (subcategory == "kids"){
                    //var div = batData.adocument.createElement('div');
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection4 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        document.getElementById("nav2").style.color = "darkorange";
        document.getElementById("nav3").style.color = "darkorange";
        document.getElementById("nav1").style.color = "darkorange";
        document.getElementById("nav").style.color = "darkorange";
        document.getElementById("nav4").style.color = "red";
        storeData = JSON.parse(xhr.responseText).Stores;
        //var selected = document.getElementsByClassName("tvshows").id;
        //console.log(selected);
        if(storeData) {
            for(const {pic,title,subcategory} of storeData) {
                if (subcategory == "popular"){
                    //var div = batData.adocument.createElement('div');
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <a class="play" href="youtube.com">Play</a>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
            document.getElementById("nav2").style.color = "darkorange";
            document.getElementById("nav3").style.color = "darkorange";
            document.getElementById("nav4").style.color = "darkorange";
            document.getElementById("nav1").style.color = "darkorange";
       }
    }
}

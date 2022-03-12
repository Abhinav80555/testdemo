// step 01 ; create an XHR object
var request = new XMLHttpRequest();
// step 02:request a connection(which data you need to recieve)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.open("GET","https://www.anapioficeandfire.com/api/books/1");

// step 03: sending a connection request
request.send();
// sttep 04: once the data sucessfully received
// from the server(200)
request.onload=function(){
    var data=JSON.parse(request.response);
    var res= data.filter((element)=>element.region=== "Asia"); 
    // var res2=res.map((ele)=>ele.population);
    var res3=res.reduce((sum,cv)=>sum+cv.population,0);
    console.log(res3);
    // console.log(data[0].capital);
    // console.log(data[1].currencies);
    // for(var i = 0;i<data.length;i++){
    // console.log(data[i].name);
    // console.log(`name:${data[i].name} capital:${data[i].capital}`)
    // console.log(`flag:${data[i].flag}`);
    // console.log(`name:${data[i].name} Lat:${data[i].latlng[0]} long ${data[i].latlng[1]} `)
    // console.log(`name:${data.authors} ispn:${data.isbn} publisher:${data.publisher}`)

    // }
}

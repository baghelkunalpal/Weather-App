const API_KEY = "d510f7cde5745ecf20d5e3cd7fddcacf";
async function getMyLocation(){
    try{

        let cityName = "Goa";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data= await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Here some error founded: ",error);
    }
}


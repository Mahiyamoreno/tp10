 // javascript for tp 10

    //add some code to wait for the DOM
    document.addEventListener("DOMContentLoaded", function() {
    
    //code to load API 
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', options)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#tempF span").innerHTML = response.current.temp_f;
	    return response; 
	})
	.catch(err => console.error(err));
    
} ) ; 
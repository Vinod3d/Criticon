var btn = document.querySelectorAll(".schedule>button");
var topic = document.querySelectorAll(".topic");

//adding eventlistner into btns
btn.forEach(function(e,i){	
	
	e.addEventListener("click",function(){
		
		topic.forEach((e,j)=>{
			if(i==j){
				e.classList.add("active");
				e.classList.remove("d-none");
				btn[j].classList.add("active");	
			}
			else{
				e.classList.add("d-none");
				e.classList.remove("active")
				btn[j].classList.remove("active");
			}	
		});
	});
});


// Set the date we're counting down to
var countDownDate = new Date("Sep 3, 2022 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the results
	if(days<=9){
		day.innerHTML=`0${days}`;
	}
	else{
		day.innerHTML=`${days}`;
	}
	
	if(hours<=9){
		hour.innerHTML=`0${hours}`;
	}
	else{
		hour.innerHTML=`${hours}`;
	}
	
	if(minutes<=9){
		minute.innerHTML=`0${minutes}`;
	}
	else{
		minute.innerHTML=`${minutes}`;
	}
	
	if(seconds<=9){
		second.innerHTML=`0${seconds}`;
	}
	else{
		second.innerHTML=`${seconds}`;
	}
	
	// If the count down is over, write some text 
	if (distance < 0) {
	clearInterval(x);
	document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);






//accessing JSON data

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function(){
	const dList = JSON.parse(this.responseText);
	console.log(dList);
	
	//displaying international doctors
	for(let i = 0;i<dList.dInternational.length;i++){
		//console.log(dList.dInternational[i]);
		
		internationalDoc.innerHTML+=`
			<div class="col-md-6 py-3 col-xl-3 col-lg-4 col-md-6 col-12">
				<div class="doctor-card">
					<img src="img/${dList.dInternational[i].pic}" alt="" class="">
					<h6 class="">${dList.dInternational[i].dName}</h6>
					<p>
						${dList.dInternational[i].des}
					</p>
				</div><!--ends doctor card-->
			</div>
		`;	
	};
	//displaying national doctors
	for(let i=0;i<dList.dNational.length;i++){
		nationalDoc.innerHTML+=`
			<div class=" py-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
				<div class="doctor-card">
					<img src="img/${dList.dNational[i].pic}" alt="" class="">
					<h6 class="">${dList.dNational[i].dName}</h6>
					<p>
						${dList.dNational[i].des}
					</p>
				</div><!--ends doctor card-->
			</div>
		`;
	};
	
	
};
xmlhttp.open("GET","http://localhost/criticon/js/custom.json");
xmlhttp.send();

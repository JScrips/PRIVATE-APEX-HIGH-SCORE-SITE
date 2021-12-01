const testButton = document.querySelector('.test');
const dummyText = document.querySelector('.dummyText')
const today = formatDate()
;

testButton.addEventListener('click', getData)

function getData(){
fetch('https://calendarific.com/api/v2/holidays?&api_key=aa5ae3a9a0433eac37b99e348a1e59af70485410&country=US&year=2021',)
.then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
    
let holidayArray = parseHolidays(data);



}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
})
};


function formatDate(){
	let date = new Date();
	
	let formatted = date.toJSON().slice(0,10)
	console.log(formatted)
	return formatted;
}
console.log(today)


function parseHolidays(data){
let holidays = data.response.holidays
console.log(holidays)
for(let i =0; i < holidays.length; i++){
	if( holidays[i]['date']['iso'] == today){
		dummyText.innerHTML += holidays[i].name + ', '
	}
}
	dummyText.innerHTML += ' are the holiday(s) today.'
}

	// dummyText.innerHTML= data





// for(let i =0; i< data.length; i++){
//    console.log(data[0]);
//     let individualArray = [];
//     individualArray.push(data[i].global.name);
//     individualArray.push(data[i].global.rank.rankName)
//     individualArray.push(data[i].legends.selected.LegendName)
//     individualArray.push(data[i].total.kda)
//     individualArray.push(data[i].total.kills)
//     console.log(individualArray);

// }



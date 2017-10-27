'use strict';

var war = [];
var store = [];
var time = [];

function Store(storeName, minCustOne, maxCustOne, aveCookieOne) {
  this.storeName = storeName;
  this.minCustOne = minCustOne;
  this.maxCustOne = maxCustOne;
  this.aveCookieOne = aveCookieOne;
  this.totalCookies = 0;
  this.time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}
console.log(time);

var firstAndPike = new Store('1st & Pike', 23, 65, 6.3);
var seatacAirport = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitalHill = new Store('Capitol Hill', 20, 38, 2.8);
var alki = new Store('Alki', 2, 16, 4.6);

store.push(firstAndPike);
store.push(seatacAirport);
store.push(seattleCenter);
store.push(capitalHill);
store.push(alki);


var tableHead = document.getElementById('tablehead');
var data = document.createElement('tr');
var tr = '';
for (var i = 0; i < alki.time.length; i++) {
  tr = tr + '<th>' + alki.time[i] + '</th>';
}

data.innerHTML = tr;
tableHead.appendChild(data);

for (var s = 0; s < store.length; s++) {
  war.push(
    '<td>' + store[s].storeName + '</td>' +
    '<td>' + store[s].storeName + '</td>' +
    '<td>' + store[s].storeName + '</td>' +
    '<td>' + store[s].storeName + '</td>'
  );
}

var table = document.getElementById('store');
// var warTwo = document.createElement('tr');
// var th = '';
for (var w = 6; w < store.storeName; w++) {
  tr = tr + '<th>' + store.storeName[w] + '</th>';
  war.push(
    '<th>' + store[w].storeName + '</th>' +
    '<th>' + store[w].minCustOne + '</th>' +
    '<th>' + store[w].maxCustOne + '</th>' +
    '<th>' + store[w].aveCookieOne + '</th>' +
    '<th>' + store[w].totalCookies + '</th>'
  );
}

war.innerHTML = tr;
tr.appendChild(data);

console.log(table);

var newRow;

for (var j = 0; j < war.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
console.log(newRow);

Store.prototype.aveCustOne = function() {
  var min = Math.ceil(this.minCustOne);
  var max = Math.floor(this.maxCustOne);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

console.log(store);

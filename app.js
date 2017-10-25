'use strict';

var form = document.getElementById('sample_for');
var table = document.getElementById('store_table');
var data = [];

function Store(storeName, minCust, maxCust, aveCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCustOne = maxCustOne;
  this.aveCookie = aveCookie;
}

function formData(event) {
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var aveCookie = event.target.aveCookie.value;

  data.push(new Store(storeName, minCust, maxCust, aveCookie));
  createTable();
  // form.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].storeName + '</td>' + '<td>' + data[i].minCust + '</td>' + '<td>' + data[i].maxCust + '</td>' + '<td>' + data[i].aveCookie + '</td>';
  }

  table.appendChild(row);
}

form.addEventListener('calculate', formData);
// form.addEventHandler('calculate', formData);
console.log(form.addEventListener, formData);

// day 2 code start!!!!!!!!!!!!!!!!!!!
// var war = [];
// var store = [];
// var time = [];
//
// function Store(storeName, minCustOne, maxCustOne, aveCookieOne) {
//   this.storeName = storeName;
//   this.minCustOne = minCustOne;
//   this.maxCustOne = maxCustOne;
//   this.aveCookieOne = aveCookieOne;
//   this.totalCookies = 0;
//   this.time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// }
// console.log(store);
//
// var firstAndPike = new Store('1st & Pike', 23, 65, 6.3);
// var seatacAirport = new Store('Seatac Airport', 3, 24, 1.2);
// var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
// var capitalHill = new Store('Capitol Hill', 20, 38, 2.8);
// var alki = new Store('Alki', 2, 16, 4.6);
//
// store.push(firstAndPike);
// store.push(seatacAirport);
// store.push(seattleCenter);
// store.push(capitalHill);
// store.push(alki);
//
//
// var tableHead = document.getElementById('tablehead');
// var data = document.createElement('tr');
// var tr = '';
// for (var i = 0; i < alki.time.length; i++) {
//   tr = tr + '<th>' + alki.time[i] + '</th>';
// }
//
// data.innerHTML = tr;
// tableHead.appendChild(data);
//
// for (var s = 0; s < store.length; s++) {
//   war.push(
//     '<td>' + store[s].storeName + '</td>' +
//     '<td>' + store[s].storeName + '</td>' +
//     '<td>' + store[s].storeName + '</td>' +
//     '<td>' + store[s].storeName + '</td>'
//   );
// }
//
// var table = document.getElementById('store');
// var warTwo = document.createElement('tr');
// var th = '';
// for (var w = 6; w < store.storeName; w++) {
//   tr = tr + '<th>' + store.storeName[w] + '</th>';
//   war.push(
//   '<th>' + store[w].storeName + '</th>' +
//   '<th>' + store[w].minCustOne + '</th>' +
//   '<th>' + store[w].maxCustOne + '</th>' +
//   '<th>' + store[w].aveCookieOne + '</th>' +
//   '<th>' + store[w].totalCookies + '</th>'
//   );
// }

// war.innerHTML = tr;
// tr.appendChild(data);

// console.log(table);

// var newRow;

// for (var j = 0; j < war.length; j++) {
//   newRow = document.createElement('tr');
//   newRow.innerHTML = data[j];
//   table.appendChild(newRow);
// }
// console.log(newRow);

// Store.prototype.aveCustOne = function() {
//   var min = Math.ceil(this.minCustOne);
//   var max = Math.floor(this.maxCustOne);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// };

// console.log(store);


// day 2 code end!!!!!!!!!!!!!!!!!!!!



// var storeOne = {
//   storeName: '1st & Pike ',
//   minCustOne: 23,
//   maxCustOne: 65,
//   aveCookieOne: 6.3,
//   totalCookies: 'total',
//   time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
//   aveCustOne: function() {
//     var min = Math.ceil(this.minCustOne);
//     var max = Math.floor(this.maxCustOne);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//
// };
// console.log(storeOne.aveCustOne());
//
// for(var i = 0; i < storeOne.time.length; i++) {
//   // var total = i + storeOne.time.length;
//   var totalCookies = Math.round(storeOne.aveCookieOne) * storeOne.aveCustOne();
//   console.log(storeOne.time[i], storeOne.aveCustOne(), totalCookies);
// };
// // store one end
//
// // store two start
// var storeTwo = {
//   storeName: 'SeaTac Airport',
//   minCustOne: 3,
//   maxCustOne: 24,
//   aveCookieOne: 1.2,
//   totalCookies: 'Total',
//   time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
//   store.prototype.aveCustOne = function() {
//     var min = Math.ceil(this.minCustOne);
//     var max = Math.floor(this.maxCustOne);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//
// };
// console.log(storeTwo.aveCustOne());
//
// for(var o = 0; o < storeTwo.time.length; o++) {
//   // var total = i + storeOne.time.length;
//   var totalCookiesTwo = Math.round(storeTwo.aveCookieOne) * storeTwo.aveCustOne();
//   console.log(storeTwo.time[o], storeTwo.aveCustOne(), totalCookiesTwo);
// };
// // end store two
//
// // start store threee
// var storeThree = {
//   storeName: 'Seattle Center',
//   minCustOne: 11,
//   maxCustOne: 38,
//   aveCookieOne: 3.7,
//   totalCookies: 'Total',
//   time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
//   aveCustOne: function() {
//     var min = Math.ceil(this.minCustOne);
//     var max = Math.floor(this.maxCustOne);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//
// };
// console.log(storeThree.aveCustOne());
//
// for(var p = 0; p < storeThree.time.length; p++) {
//   // var total = i + storeOne.time.length;
//   var totalCookiesThree = Math.round(storeThree.aveCookieOne) * storeThree.aveCustOne();
//   console.log(storeThree.time[p], storeThree.aveCustOne(), totalCookiesThree);
// };
// // end store three
//
// // start store four
// var storeFour = {
//   storeName: 'Capitol Hill',
//   minCustOne: 20,
//   maxCustOne: 38,
//   aveCookieOne: 2.8,
//   totalCookies: 'Total',
//   time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
//   aveCustOne: function() {
//     var min = Math.ceil(this.minCustOne);
//     var max = Math.floor(this.maxCustOne);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//
// };
// console.log(storeFour.aveCustOne());
//
// for(var k = 0; k < storeFour.time.length; k++) {
//   // var total = i + storeOne.time.length;
//   var totalCookiesFour = Math.round(storeFour.aveCookieOne) * storeFour.aveCustOne();
//   console.log(storeFour.time[k], storeFour.aveCustOne(), totalCookiesFour);
// };
// // end store four
//
// // start store five
// var storeFive = {
//   storeName: 'Alki',
//   minCustOne: 2,
//   maxCustOne: 16,
//   aveCookieOne: 4.6,
//   totalCookies: 'Total',
//   time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
//   aveCustOne: function() {
//     var min = Math.ceil(this.minCustOne);
//     var max = Math.floor(this.maxCustOne);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//
// };
// console.log(storeFive.aveCustOne());
//
// for(var w = 0; w < storeFive.time.length; w++) {
//   // var total = i + storeOne.time.length;
//   var totalCookiesFive = Math.round(storeFive.aveCookieOne) * storeFive.aveCustOne();
//   console.log(storeFive.time[w], storeFive.aveCustOne(), totalCookiesFive);
// };
// // end store five
//
// // dom for store one
// function domOne() {
//   var container = document.createElement('div');
//
//   container.innerHTML = '<p>' + storeOne.storeName + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for(var u = 0; u < storeOne.time.length; u++) {
//     listArr.push('<li>' + 'At ' + storeOne.time[u] + ' there are ' + storeOne.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
//   }
//   var fullList = listArr.join('');
//   list.innerHTML = fullList;
//   document.body.appendChild(list);
// }
//
// domOne();
// // end of dom for store one
//
// // dom for store two
// function domTwo() {
//   var container = document.createElement('div');
//
//   container.innerHTML = '<p>' + storeTwo.storeName + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for(var u = 0; u < storeTwo.time.length; u++) {
//     listArr.push('<li>' + 'At ' + storeTwo.time[u] + ' there are ' + storeTwo.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
//   }
//   var fullList = listArr.join('');
//   list.innerHTML = fullList;
//   document.body.appendChild(list);
// }
//
// domTwo();
// // end of dom for store two
//
// // dom for store three
// function domThree() {
//   var container = document.createElement('div');
//
//   container.innerHTML = '<p>' + storeThree.storeName + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for(var u = 0; u < storeThree.time.length; u++) {
//     listArr.push('<li>' + 'At ' + storeThree.time[u] + ' there are ' + storeOne.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
//   }
//   var fullList = listArr.join('');
//   list.innerHTML = fullList;
//   document.body.appendChild(list);
// }
//
// domThree();
// // end of dom for store three
//
// // dom for store four
// function domFour() {
//   var container = document.createElement('div');
//
//   container.innerHTML = '<p>' + storeFour.storeName + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for(var u = 0; u < storeFour.time.length; u++) {
//     listArr.push('<li>' + 'At ' + storeFour.time[u] + ' there are ' + storeFour.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
//   }
//   var fullList = listArr.join('');
//   list.innerHTML = fullList;
//   document.body.appendChild(list);
// }
//
// domFour();
// // end of dom for store four
//
// // dom for store five
// function domFive() {
//   var container = document.createElement('div');
//
//   container.innerHTML = '<p>' + storeFive.storeName + '</p>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for(var u = 0; u < storeFive.time.length; u++) {
//     listArr.push('<li>' + 'At ' + storeFive.time[u] + ' there are ' + storeFive.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
//   }
//   var fullList = listArr.join('');
//   list.innerHTML = fullList;
//   document.body.appendChild(list);
// }

// domFive();
// end of dom for store five

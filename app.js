'use strict';
var storeOne = {
  storeName: '1st & Pike ',
  minCustOne: 23,
  maxCustOne: 65,
  aveCookieOne: 6.3,
  totalCookies: 'total',
  time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
  aveCustOne: function() {
    var min = Math.ceil(this.minCustOne);
    var max = Math.floor(this.maxCustOne);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

};
console.log(storeOne.aveCustOne());

for(var i = 0; i < storeOne.time.length; i++) {
  // var total = i + storeOne.time.length;
  var totalCookies = Math.round(storeOne.aveCookieOne) * storeOne.aveCustOne();
  console.log(storeOne.time[i], storeOne.aveCustOne(), totalCookies);
};
// store one end

// store two start
var storeTwo = {
  storeName: 'SeaTac Airport',
  minCustOne: 3,
  maxCustOne: 24,
  aveCookieOne: 1.2,
  totalCookies: 'Total',
  time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
  aveCustOne: function() {
    var min = Math.ceil(this.minCustOne);
    var max = Math.floor(this.maxCustOne);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

};
console.log(storeTwo.aveCustOne());

for(var o = 0; o < storeTwo.time.length; o++) {
  // var total = i + storeOne.time.length;
  var totalCookiesTwo = Math.round(storeTwo.aveCookieOne) * storeTwo.aveCustOne();
  console.log(storeTwo.time[o], storeTwo.aveCustOne(), totalCookiesTwo);
};
// end store two

// start store threee
var storeThree = {
  storeName: 'Seattle Center',
  minCustOne: 11,
  maxCustOne: 38,
  aveCookieOne: 3.7,
  totalCookies: 'Total',
  time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
  aveCustOne: function() {
    var min = Math.ceil(this.minCustOne);
    var max = Math.floor(this.maxCustOne);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

};
console.log(storeThree.aveCustOne());

for(var p = 0; p < storeThree.time.length; p++) {
  // var total = i + storeOne.time.length;
  var totalCookiesThree = Math.round(storeThree.aveCookieOne) * storeThree.aveCustOne();
  console.log(storeThree.time[p], storeThree.aveCustOne(), totalCookiesThree);
};
// end store three

// start store four
var storeFour = {
  storeName: 'Capitol Hill',
  minCustOne: 20,
  maxCustOne: 38,
  aveCookieOne: 2.8,
  totalCookies: 'Total',
  time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
  aveCustOne: function() {
    var min = Math.ceil(this.minCustOne);
    var max = Math.floor(this.maxCustOne);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

};
console.log(storeFour.aveCustOne());

for(var k = 0; k < storeFour.time.length; k++) {
  // var total = i + storeOne.time.length;
  var totalCookiesFour = Math.round(storeFour.aveCookieOne) * storeFour.aveCustOne();
  console.log(storeFour.time[k], storeFour.aveCustOne(), totalCookiesFour);
};
// end store four

// start store five
var storeFive = {
  storeName: 'Alki',
  minCustOne: 2,
  maxCustOne: 16,
  aveCookieOne: 4.6,
  totalCookies: 'Total',
  time: [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '],
  aveCustOne: function() {
    var min = Math.ceil(this.minCustOne);
    var max = Math.floor(this.maxCustOne);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

};
console.log(storeFive.aveCustOne());

for(var w = 0; w < storeFive.time.length; w++) {
  // var total = i + storeOne.time.length;
  var totalCookiesFive = Math.round(storeFive.aveCookieOne) * storeFive.aveCustOne();
  console.log(storeFive.time[w], storeFive.aveCustOne(), totalCookiesFive);
};
// end store five

// dom for store one
function domOne() {
  var container = document.createElement('div');

  container.innerHTML = '<p>' + storeOne.storeName + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for(var u = 0; u < storeOne.time.length; u++) {
    listArr.push('<li>' + 'At ' + storeOne.time[u] + ' there are ' + storeOne.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

domOne();
// end of dom for store one

// dom for store two
function domTwo() {
  var container = document.createElement('div');

  container.innerHTML = '<p>' + storeTwo.storeName + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for(var u = 0; u < storeTwo.time.length; u++) {
    listArr.push('<li>' + 'At ' + storeTwo.time[u] + ' there are ' + storeTwo.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

domTwo();
// end of dom for store two

// dom for store three
function domThree() {
  var container = document.createElement('div');

  container.innerHTML = '<p>' + storeThree.storeName + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for(var u = 0; u < storeThree.time.length; u++) {
    listArr.push('<li>' + 'At ' + storeThree.time[u] + ' there are ' + storeOne.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

domThree();
// end of dom for store three

// dom for store four
function domFour() {
  var container = document.createElement('div');

  container.innerHTML = '<p>' + storeFour.storeName + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for(var u = 0; u < storeFour.time.length; u++) {
    listArr.push('<li>' + 'At ' + storeFour.time[u] + ' there are ' + storeFour.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

domFour();
// end of dom for store four

// dom for store five
function domFive() {
  var container = document.createElement('div');

  container.innerHTML = '<p>' + storeFive.storeName + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for(var u = 0; u < storeFive.time.length; u++) {
    listArr.push('<li>' + 'At ' + storeFive.time[u] + ' there are ' + storeFive.aveCustOne() + ' customers per hour and sold average of  ' + totalCookies + ' per hour ', '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

domFive();
// end of dom for store five

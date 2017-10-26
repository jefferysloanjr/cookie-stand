'use strict';

var form = document.getElementById('sample_form');
var table = document.getElementById('store_table');
var data = [];

function Store(storeName, minCust, maxCust, aveCookie, totalCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCustOne = maxCustOne;
  this.aveCookie = aveCookie;
  this.totalCookies = totalCookies;
}

function formData(event) {
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var aveCookie = event.target.aveCookie.value;
  var totalCookies = event.target.totalCookies.value;
  data.push(new Store(storeName, minCust, maxCust, aveCookie, totalCookies));
  createTable();
  form.reset();
}

function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].storeName + '</td>' +
    '<td>' + data[i].minCust + '</td>' +
    '<td>' + data[i].maxCust + '</td>' +
    '<td>' + data[i].aveCookie + '</td>' +
    '<td>' + data[i].totalCookies + '</td>';
  }

  table.appendChild(row);
}

aveCust = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

form.addEventListener('calculate', formData);

console.log('FORM', form);

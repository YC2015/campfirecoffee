var time = ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];


function StoreLocation (name, minCustomerPerHr, maxCustomerPerHr, cupsPerCustomer, toGoPoundsPerCustomer) {
//properties
  this.name = name;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.cupsPerCustomer = cupsPerCustomer;
  this.toGoPoundsPerCustomer = toGoPoundsPerCustomer;
  this.randomNumberOfCustomersPerHr = [];
  this.sumOfRandomNumbersOfCustomersPerHr = 0;
  this.projectedCupsPerHr = [];
  this.projectedCupsPerHrInLbs = [];
  this.projectedToGoLbsPerHr = [];
  this.totalBeansPerHr = [];
  this.employeesPerHr = [];
  this.totalDailyProjectedCups = 0;
  this.totalDailyProjectedLbs = 0;
  this.totalDailyBeans = 0;
};

//methods
StoreLocation.prototype.randomNumberOfCustomers = function(min, max) {
  for ( var i = 0; i < time.length; i++){
    var hourlyCustomer = Math.floor(Math.random() * (max - min + 1) ) + min;
    this.randomNumberOfCustomersPerHr.push(hourlyCustomer);
  }
};

StoreLocation.prototype.projectedCupsSoldPerHr = function(customer) {
  for ( var i = 0; i < time.length; i++){
    var hourlyCups = Math.ceil(this.cupsPerCustomer * customer[i]);
    this.projectedCupsPerHr.push(hourlyCups);
  }
};

StoreLocation.prototype.projectedCupsSoldPerHrInLbs = function(z) {
  for (var i = 0; i < time.length; i++){
    var hourlyCupsLbs = Math.ceil(z[i] / 16);
    this.projectedCupsPerHrInLbs.push(hourlyCupsLbs);
  }
};

StoreLocation.prototype.projectedToGoLbsSoldPerHr = function(customers) {
  for (var i = 0; i < time.length; i++){
    var hourlyToGoLbs = Math.ceil(this.toGoPoundsPerCustomer * customers[i]);
    this.projectedToGoLbsPerHr.push(hourlyToGoLbs);
  }
};

StoreLocation.prototype.totalAmountOfBeansPerHr = function(a,b) {
  for (var i = 0; i < time.length; i++){
    var hourlyTotalBeans = Math.ceil((a[i] / 16) + b[i]);
    this.totalBeansPerHr.push(hourlyTotalBeans);
  }
};

StoreLocation.prototype.numberOfEmployees = function(c){
  for (var i = 0; i < time.length; i++){
    var hourlyEmployees = Math.ceil((c[i] * 2) / 60 );
    this.employeesPerHr.push(hourlyEmployees);
  }
};

StoreLocation.prototype.totalDailyProjectedCups = function(cups){
  for (var i = 0; i < time.length; i++){
    var companyTotalProjectedCups = this.totalDailyProjectedCups += cups[i];
    companyTotalProjectedCups;
    return this.companyTotalProjectedCups;
  }
};

StoreLocation.prototype.allmethods = function() {

};


var pikePlaceMarket = new StoreLocation ('Pike Place Market', 14, 35, 1.2, 0.34);
pikePlaceMarket.randomNumberOfCustomers(pikePlaceMarket.minCustomerPerHr, pikePlaceMarket.maxCustomerPerHr);
pikePlaceMarket.projectedCupsSoldPerHr(pikePlaceMarket.randomNumberOfCustomersPerHr);
pikePlaceMarket.projectedCupsSoldPerHrInLbs(pikePlaceMarket.projectedCupsPerHr);
pikePlaceMarket.projectedToGoLbsSoldPerHr(pikePlaceMarket.randomNumberOfCustomersPerHr);
pikePlaceMarket.totalAmountOfBeansPerHr(pikePlaceMarket.projectedCupsPerHr, pikePlaceMarket.projectedToGoLbsPerHr);
pikePlaceMarket.numberOfEmployees(pikePlaceMarket.randomNumberOfCustomersPerHr);
pikePlaceMarket.totalDailyProjectedCups(pikePlaceMarket.projectedCupsPerHr);

/*var PikePlaceMarket = {
  name: 'Pike Place Market',
  hrs : 13,
  time: ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  minCustomerPerHr : 14,
  maxCustomerPerHr : 35,
  cupsPerCustomer : 1.2,
  toGoPoundsPerCustomer : 0.34,
  randomNumberOfCustomersPerHr: [ ],
  sumOfRandomNumbersOfCustomersPerHr:0,
  projectedCupsPerHr: [],
  projectedCupsPerHrInLbs: [],
  projectedLbsPerCustomer: [],
  totalBeansPerHr: [],
  employeesPerHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomNumberOfCustomers: function(minCustomerPerHr, maxCustomerPerHr) {
    return Math.floor(Math.random() * (maxCustomerPerHr - minCustomerPerHr + 1) ) + minCustomerPerHr;
  },

  projectedCupsSoldPerHr: function(customers) {
    return Math.ceil(this.cupsPerCustomer * customers);
  },

  projectedCupsSoldPerHrInLbs: function(z) {
    return Math.ceil(z / 16);
  },

  projectedToGoLbsSoldPerHr: function(customers) {
    return Math.ceil(this.toGoPoundsPerCustomer * customers);
  },

  totalAmountOfBeansPerHr: function(a,b) {
    return Math.ceil((a / 16) + b);
  },

  numberOfEmployees: function(c){
    return Math.ceil((c * 2) / 60 );
  }

};

for ( var i = 0; i < time.length; i++) {

  //Hourly Totals
  var hourlyCustomer = PikePlaceMarket.randomNumberOfCustomers(PikePlaceMarket.minCustomerPerHr, PikePlaceMarket.maxCustomerPerHr);
  PikePlaceMarket.randomNumberOfCustomersPerHr.push(hourlyCustomer);

  var hourlyCups = PikePlaceMarket.projectedCupsSoldPerHr(PikePlaceMarket.randomNumberOfCustomersPerHr[i]);
  PikePlaceMarket.projectedCupsPerHr.push(hourlyCups);

  var hourlyCupsLbs = PikePlaceMarket.projectedCupsSoldPerHrInLbs(PikePlaceMarket.randomNumberOfCustomersPerHr[i]);
  PikePlaceMarket.projectedCupsPerHrInLbs.push(hourlyCupsLbs);

  var hourlyToGoLbs = PikePlaceMarket.projectedToGoLbsSoldPerHr(PikePlaceMarket.randomNumberOfCustomersPerHr[i]);
  PikePlaceMarket.projectedLbsPerCustomer.push(hourlyToGoLbs);

  var hourlyTotalBeans = PikePlaceMarket.totalAmountOfBeansPerHr(PikePlaceMarket.projectedCupsPerHr[i], PikePlaceMarket.projectedLbsPerCustomer[i]);
  PikePlaceMarket.totalBeansPerHr.push(hourlyTotalBeans);

  var hourlyEmployees = PikePlaceMarket.numberOfEmployees(PikePlaceMarket.randomNumberOfCustomersPerHr[i]);
  PikePlaceMarket.employeesPerHr.push(hourlyEmployees);

  //Daily Totals
  PikePlaceMarket.totalDailyProjectedCups += PikePlaceMarket.projectedCupsPerHr[i];
  PikePlaceMarket.totalDailyProjectedLbs += PikePlaceMarket.projectedLbsPerCustomer[i];
  PikePlaceMarket.totalDailyBeans += PikePlaceMarket.totalBeansPerHr[i];

  PikePlaceMarket.sumOfRandomNumbersOfCustomersPerHr += PikePlaceMarket.randomNumberOfCustomersPerHr[i];
};

//Company Totals
var companyTotalProjectedCups = PikePlaceMarket.totalDailyProjectedCups;
companyTotalProjectedCups;
var companyTotalProjectedLbs = PikePlaceMarket.totalDailyProjectedLbs;
companyTotalProjectedLbs;
var companyTotalBeans = PikePlaceMarket.totalDailyBeans;
companyTotalBeans;

//Adding to Data.html
var x = document.getElementById('storelocation');
var child = document.createElement('p');
child.textContent = PikePlaceMarket.name;
var list = document.createElement ('ul');
x.appendChild(child);

for ( var h = 0; h < PikePlaceMarket.hrs; h++) {
  var bullets = document.createElement ('li');
  bullets.textContent = PikePlaceMarket.time[h] + ': ' + PikePlaceMarket.totalBeansPerHr[h] + ' lbs ' + '[' + PikePlaceMarket.randomNumberOfCustomersPerHr[h] + ' customers, ' + PikePlaceMarket.projectedCupsPerHr[h] + ' (' + PikePlaceMarket.projectedCupsPerHrInLbs[h] + ' lbs) ' + PikePlaceMarket.totalBeansPerHr[h] + ' lbs to-go]';
  list.appendChild(bullets);
}

var morebullets = document.createElement ('li');
morebullets.textContent = 'Total customers at ' + PikePlaceMarket.name + ': ' + PikePlaceMarket.sumOfRandomNumbersOfCustomersPerHr;
list.appendChild(morebullets);

var morebulletscups = document.createElement ('li');
morebulletscups.textContent = 'Total cups sold at ' + PikePlaceMarket.name + ': ' + PikePlaceMarket.totalDailyProjectedCups;
list.appendChild(morebulletscups);

var morebulletstogo = document.createElement ('li');
morebulletstogo.textContent = 'Total to-go pounds sold at ' + PikePlaceMarket.name + ': ' + PikePlaceMarket.totalDailyProjectedLbs;
list.appendChild(morebulletstogo);

var morebulletstotalpounds = document.createElement ('li');
morebulletstotalpounds.textContent = 'Total pounds of beans needed at ' + PikePlaceMarket.name + ': ' + PikePlaceMarket.totalDailyBeans;
list.appendChild(morebulletstotalpounds);

x.appendChild(list);

//Capitol Hill

var capitolHill = {
  name: 'Capitol Hill',
  hrs : 13,
  time: ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  minCustomerPerHr : 12,
  maxCustomerPerHr : 28,
  cupsPerCustomer : 3.2,
  toGoPoundsPerCustomer : 0.03,
  randomNumberOfCustomersPerHr: [],
  sumOfRandomNumbersOfCustomersPerHr:0,
  projectedCupsPerHr: [],
  projectedCupsPerHrInLbs: [],
  projectedLbsPerCustomer: [],
  totalBeansPerHr: [],
  employeesPerHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomNumberOfCustomers: function(minCustomerPerHr, maxCustomerPerHr) {
    return Math.floor(Math.random() * (maxCustomerPerHr - minCustomerPerHr + 1) ) + minCustomerPerHr;
  },

  projectedCupsSoldPerHr: function(customers) {
    return Math.ceil(this.cupsPerCustomer * customers);
  },

  projectedCupsSoldPerHrInLbs: function(z) {
    return Math.ceil(z / 16);
  },

  projectedToGoLbsSoldPerHr: function(customers) {
    return Math.ceil(this.toGoPoundsPerCustomer * customers);
  },

  totalAmountOfBeansPerHr: function(a,b) {
    return Math.ceil((a / 16) + b);
  },

  numberOfEmployees: function(c){
    return Math.ceil((c * 2) / 60 );
  }

};

for ( var j = 0; j < capitolHill.hrs; j++) {

  //Hourly Totals
  var capitolHillhourlyCustomer = capitolHill.randomNumberOfCustomers(capitolHill.minCustomerPerHr, capitolHill.maxCustomerPerHr);
  capitolHill.randomNumberOfCustomersPerHr.push(capitolHillhourlyCustomer);

  var captiolHillhourlyCups = capitolHill.projectedCupsSoldPerHr(capitolHill.randomNumberOfCustomersPerHr[j]);
  capitolHill.projectedCupsPerHr.push(captiolHillhourlyCups);

  var capitolHillhourlyCupsLbs = capitolHill.projectedCupsSoldPerHrInLbs(capitolHill.randomNumberOfCustomersPerHr[j]);
  capitolHill.projectedCupsPerHrInLbs.push(capitolHillhourlyCupsLbs);

  var capitolHillhourlyToGoLbs = capitolHill.projectedToGoLbsSoldPerHr(capitolHill.randomNumberOfCustomersPerHr[j]);
  capitolHill.projectedLbsPerCustomer.push(capitolHillhourlyToGoLbs);

  var capitolHillhourlyTotalBeans = capitolHill.totalAmountOfBeansPerHr(capitolHill.projectedCupsPerHr[j], capitolHill.projectedLbsPerCustomer[j]);
  capitolHill.totalBeansPerHr.push(capitolHillhourlyTotalBeans);

  var capitolHillhourlyEmployees = capitolHill.numberOfEmployees(capitolHill.randomNumberOfCustomersPerHr[j]);
  capitolHill.employeesPerHr.push(capitolHillhourlyEmployees);

  //Daily Totals
  capitolHill.totalDailyProjectedCups += capitolHill.projectedCupsPerHr[j];
  capitolHill.totalDailyProjectedLbs += capitolHill.projectedLbsPerCustomer[j];
  capitolHill.totalDailyBeans += capitolHill.totalBeansPerHr[j];

  capitolHill.sumOfRandomNumbersOfCustomersPerHr += capitolHill.randomNumberOfCustomersPerHr[j];
};

//Company Totals
var capitolHillcompanyTotalProjectedCups = capitolHill.totalDailyProjectedCups;
capitolHillcompanyTotalProjectedCups;
var capitolHillcompanyTotalProjectedLbs = capitolHill.totalDailyProjectedLbs;
capitolHillcompanyTotalProjectedLbs;
var capitolHillcompanyTotalBeans = capitolHill.totalDailyBeans;
capitolHillcompanyTotalBeans;

//Adding to Data.html
var capitolHillx = document.getElementById('storelocation');
var capitolHillChild = document.createElement('p');
capitolHillChild.textContent = capitolHill.name;
var capitolHillList = document.createElement ('ul');
capitolHillx.appendChild(capitolHillChild);

for ( var w = 0; w < capitolHill.hrs; w++) {
  var capitolHillBullets = document.createElement ('li');
  capitolHillBullets.textContent = capitolHill.time[w] + ': ' + capitolHill.totalBeansPerHr[w] + ' lbs ' + '[' + capitolHill.randomNumberOfCustomersPerHr[w] + ' customers, ' + capitolHill.projectedCupsPerHr[w] + ' (' + capitolHill.projectedCupsPerHrInLbs[w] + ' lbs) ' + capitolHill.totalBeansPerHr[w] + ' lbs to-go]';
  capitolHillList.appendChild(capitolHillBullets);
}

var capitolHillmorebullets = document.createElement ('li');
capitolHillmorebullets.textContent = 'Total customers at ' + capitolHill.name + ': ' + capitolHill.sumOfRandomNumbersOfCustomersPerHr;
capitolHillList.appendChild(capitolHillmorebullets);

var capitolHillmorebulletscups = document.createElement ('li');
capitolHillmorebulletscups.textContent = 'Total cups sold at ' + capitolHill.name + ': ' + capitolHill.totalDailyProjectedCups;
capitolHillList.appendChild(capitolHillmorebulletscups);

var capitolHillmorebulletstogo = document.createElement ('li');
capitolHillmorebulletstogo.textContent = 'Total to-go pounds sold at ' + capitolHill.name + ': ' + capitolHill.totalDailyProjectedLbs;
capitolHillList.appendChild(capitolHillmorebulletstogo);

var capitolHillmorebulletstotalpounds = document.createElement ('li');
capitolHillmorebulletstotalpounds.textContent = 'Total pounds of beans needed at ' + capitolHill.name + ': ' + capitolHill.totalDailyBeans;
capitolHillList.appendChild(capitolHillmorebulletstotalpounds);

capitolHillx.appendChild(capitolHillList);

// Seattle Public Library

var SPL = {
  name: 'Seattle Public Library',
  hrs : 13,
  time: ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  minCustomerPerHr : 9,
  maxCustomerPerHr : 45,
  cupsPerCustomer : 2.6,
  toGoPoundsPerCustomer : 0.02,
  randomNumberOfCustomersPerHr: [],
  sumOfRandomNumbersOfCustomersPerHr:0,
  projectedCupsPerHr: [],
  projectedCupsPerHrInLbs: [],
  projectedLbsPerCustomer: [],
  totalBeansPerHr: [],
  employeesPerHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomNumberOfCustomers: function(minCustomerPerHr, maxCustomerPerHr) {
    return Math.floor(Math.random() * (maxCustomerPerHr - minCustomerPerHr + 1) ) + minCustomerPerHr;
  },

  projectedCupsSoldPerHr: function(customers) {
    return Math.ceil(this.cupsPerCustomer * customers);
  },

  projectedCupsSoldPerHrInLbs: function(z) {
    return Math.ceil(z / 16);
  },

  projectedToGoLbsSoldPerHr: function(customers) {
    return Math.ceil(this.toGoPoundsPerCustomer * customers);
  },

  totalAmountOfBeansPerHr: function(a,b) {
    return Math.ceil((a / 16) + b);
  },

  numberOfEmployees: function(c){
    return Math.ceil((c * 2) / 60 );
  }

};

for ( var c = 0; c < SPL.hrs; c++) {

  //Hourly Totals
  var SPLhourlyCustomer = SPL.randomNumberOfCustomers(SPL.minCustomerPerHr, SPL.maxCustomerPerHr);
  SPL.randomNumberOfCustomersPerHr.push(SPLhourlyCustomer);

  var SPLhourlyCups = SPL.projectedCupsSoldPerHr(SPL.randomNumberOfCustomersPerHr[c]);
  SPL.projectedCupsPerHr.push(SPLhourlyCups);

  var SPLhourlyCupsLbs = SPL.projectedCupsSoldPerHrInLbs(SPL.randomNumberOfCustomersPerHr[c]);
  SPL.projectedCupsPerHrInLbs.push(SPLhourlyCupsLbs);

  var SPLhourlyToGoLbs = SPL.projectedToGoLbsSoldPerHr(SPL.randomNumberOfCustomersPerHr[c]);
  SPL.projectedLbsPerCustomer.push(SPLhourlyToGoLbs);

  var SPLhourlyTotalBeans = SPL.totalAmountOfBeansPerHr(SPL.projectedCupsPerHr[c], SPL.projectedLbsPerCustomer[c]);
  SPL.totalBeansPerHr.push(SPLhourlyTotalBeans);

  var SPLhourlyEmployees = SPL.numberOfEmployees(SPL.randomNumberOfCustomersPerHr[c]);
  SPL.employeesPerHr.push(SPLhourlyEmployees);

  //Daily Totals
  SPL.totalDailyProjectedCups += SPL.projectedCupsPerHr[c];
  SPL.totalDailyProjectedLbs += SPL.projectedLbsPerCustomer[c];
  SPL.totalDailyBeans += SPL.totalBeansPerHr[c];

  SPL.sumOfRandomNumbersOfCustomersPerHr += SPL.randomNumberOfCustomersPerHr[c];
};

//Company Totals
var SPLcompanyTotalProjectedCups = SPL.totalDailyProjectedCups;
SPLcompanyTotalProjectedCups;
var SPLcompanyTotalProjectedLbs = SPL.totalDailyProjectedLbs;
SPLcompanyTotalProjectedLbs;
var SPLcompanyTotalBeans = SPL.totalDailyBeans;
SPLcompanyTotalBeans;

//Adding to Data.html
var SPLx = document.getElementById('storelocation');
var SPLChild = document.createElement('p');
SPLChild.textContent = SPL.name;
var SPLList = document.createElement ('ul');
SPLx.appendChild(SPLChild);


for ( var b = 0; b < SPL.hrs; b++) {
  var SPLBullets = document.createElement ('li');
  SPLBullets.textContent = SPL.time[b] + ': ' + SPL.totalBeansPerHr[b] + ' lbs ' + '[' + SPL.randomNumberOfCustomersPerHr[b] + ' customers, ' + SPL.projectedCupsPerHr[b] + ' (' + SPL.projectedCupsPerHrInLbs[b] + ' lbs) ' + SPL.totalBeansPerHr[b] + ' lbs to-go]';
  SPLList.appendChild(SPLBullets);
}

var SPLmorebullets = document.createElement ('li');
SPLmorebullets.textContent = 'Total customers at ' + SPL.name + ': ' + SPL.sumOfRandomNumbersOfCustomersPerHr;
SPLList.appendChild(SPLmorebullets);

var SPLmorebulletscups = document.createElement ('li');
SPLmorebulletscups.textContent = 'Total cups sold at ' + SPL.name + ': ' + SPL.totalDailyProjectedCups;
SPLList.appendChild(SPLmorebulletscups);

var SPLmorebulletstogo = document.createElement ('li');
SPLmorebulletstogo.textContent = 'Total to-go pounds sold at ' + SPL.name + ': ' + SPL.totalDailyProjectedLbs;
SPLList.appendChild(SPLmorebulletstogo);

var SPLmorebulletstotalpounds = document.createElement ('li');
SPLmorebulletstotalpounds.textContent = 'Total pounds of beans needed at ' + SPL.name + ': ' + SPL.totalDailyBeans;
SPLList.appendChild(SPLmorebulletstotalpounds);

SPLx.appendChild(SPLList);


// South Lake Union
var SLU = {
  name: 'South Lake Union',
  hrs : 13,
  time: ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  minCustomerPerHr : 5,
  maxCustomerPerHr : 18,
  cupsPerCustomer : 1.3,
  toGoPoundsPerCustomer : 0.04,
  randomNumberOfCustomersPerHr: [],
  sumOfRandomNumbersOfCustomersPerHr:0,
  projectedCupsPerHr: [],
  projectedCupsPerHrInLbs: [],
  projectedLbsPerCustomer: [],
  totalBeansPerHr: [],
  employeesPerHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomNumberOfCustomers: function(minCustomerPerHr, maxCustomerPerHr) {
    return Math.floor(Math.random() * (maxCustomerPerHr - minCustomerPerHr + 1) ) + minCustomerPerHr;
  },

  projectedCupsSoldPerHr: function(customers) {
    return Math.ceil(this.cupsPerCustomer * customers);
  },

  projectedCupsSoldPerHrInLbs: function(z) {
    return Math.ceil(z / 16);
  },

  projectedToGoLbsSoldPerHr: function(customers) {
    return Math.ceil(this.toGoPoundsPerCustomer * customers);
  },

  totalAmountOfBeansPerHr: function(a,b) {
    return Math.ceil((a / 16) + b);
  },

  numberOfEmployees: function(c){
    return Math.ceil((c * 2) / 60 );
  }

};

for ( var d = 0; d < SLU.hrs; d++) {

  //Hourly Totals
  var SLUhourlyCustomer = SLU.randomNumberOfCustomers(SLU.minCustomerPerHr, SLU.maxCustomerPerHr);
  SLU.randomNumberOfCustomersPerHr.push(SLUhourlyCustomer);

  var SLUhourlyCups = SLU.projectedCupsSoldPerHr(SLU.randomNumberOfCustomersPerHr[d]);
  SLU.projectedCupsPerHr.push(SLUhourlyCups);

  var SLUhourlyCupsLbs = SLU.projectedCupsSoldPerHrInLbs(SLU.randomNumberOfCustomersPerHr[d]);
  SLU.projectedCupsPerHrInLbs.push(SLUhourlyCupsLbs);

  var SLUhourlyToGoLbs = SLU.projectedToGoLbsSoldPerHr(SLU.randomNumberOfCustomersPerHr[d]);
  SLU.projectedLbsPerCustomer.push(SLUhourlyToGoLbs);

  var SLUhourlyTotalBeans = SLU.totalAmountOfBeansPerHr(SLU.projectedCupsPerHr[d], SLU.projectedLbsPerCustomer[d]);
  SLU.totalBeansPerHr.push(SLUhourlyTotalBeans);

  var SLUhourlyEmployees = SLU.numberOfEmployees(SLU.randomNumberOfCustomersPerHr[d]);
  SLU.employeesPerHr.push(SLUhourlyEmployees);

  //Daily Totals
  SLU.totalDailyProjectedCups += SLU.projectedCupsPerHr[d];
  SLU.totalDailyProjectedLbs += SLU.projectedLbsPerCustomer[d];
  SLU.totalDailyBeans += SLU.totalBeansPerHr[d];

  SLU.sumOfRandomNumbersOfCustomersPerHr += SLU.randomNumberOfCustomersPerHr[d];
};

//Company Totals
var SLUcompanyTotalProjectedCups = SLU.totalDailyProjectedCups;
SLUcompanyTotalProjectedCups;
var SLUcompanyTotalProjectedLbs = SLU.totalDailyProjectedLbs;
SLUcompanyTotalProjectedLbs;
var SLUcompanyTotalBeans = SLU.totalDailyBeans;
SLUcompanyTotalBeans;

//Adding to Data.html
var SLUx = document.getElementById('storelocation');
var SLUChild = document.createElement('p');
SLUChild.textContent = SLU.name;
var SLUList = document.createElement ('ul');
SLUx.appendChild(SLUChild);

for ( var e = 0; e < SLU.hrs; e++) {
  var SLUBullets = document.createElement ('li');
  SLUBullets.textContent = SLU.time[e] + ': ' + SLU.totalBeansPerHr[e] + ' lbs ' + '[' + SLU.randomNumberOfCustomersPerHr[e] + ' customers, ' + SLU.projectedCupsPerHr[e] + ' (' + SLU.projectedCupsPerHrInLbs[e] + ' lbs) ' + SLU.totalBeansPerHr[e] + ' lbs to-go]';
  SLUList.appendChild(SLUBullets);
}

var SLUmorebullets = document.createElement ('li');
SLUmorebullets.textContent = 'Total customers at ' + SLU.name + ': ' + SLU.sumOfRandomNumbersOfCustomersPerHr;
SLUList.appendChild(SLUmorebullets);

var SLUmorebulletscups = document.createElement ('li');
SLUmorebulletscups.textContent = 'Total cups sold at ' + SLU.name + ': ' + SLU.totalDailyProjectedCups;
SLUList.appendChild(SLUmorebulletscups);

var SLUmorebulletstogo = document.createElement ('li');
SLUmorebulletstogo.textContent = 'Total to-go pounds sold at ' + SLU.name + ': ' + SLU.totalDailyProjectedLbs;
SLUList.appendChild(SLUmorebulletstogo);

var SLUmorebulletstotalpounds = document.createElement ('li');
SLUmorebulletstotalpounds.textContent = 'Total pounds of beans needed at ' + SLU.name + ': ' + SLU.totalDailyBeans;
SLUList.appendChild(SLUmorebulletstotalpounds);

SLUx.appendChild(SLUList);

// Sea-Tac Airport

var SeaTac = {
  name: 'Sea-Tac Airport',
  hrs : 13,
  time: ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  minCustomerPerHr : 28,
  maxCustomerPerHr : 44,
  cupsPerCustomer : 1.1,
  toGoPoundsPerCustomer : 0.41,
  randomNumberOfCustomersPerHr: [],
  sumOfRandomNumbersOfCustomersPerHr:0,
  projectedCupsPerHr: [],
  projectedCupsPerHrInLbs: [],
  projectedLbsPerCustomer: [],
  totalBeansPerHr: [],
  employeesPerHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomNumberOfCustomers: function(minCustomerPerHr, maxCustomerPerHr) {
    return Math.floor(Math.random() * (maxCustomerPerHr - minCustomerPerHr + 1) ) + minCustomerPerHr;
  },

  projectedCupsSoldPerHr: function(customers) {
    return Math.ceil(this.cupsPerCustomer * customers);
  },

  projectedCupsSoldPerHrInLbs: function(z) {
    return Math.ceil(z / 16);
  },

  projectedToGoLbsSoldPerHr: function(customers) {
    return Math.ceil(this.toGoPoundsPerCustomer * customers);
  },

  totalAmountOfBeansPerHr: function(a,b) {
    return Math.ceil((a / 16) + b);
  },

  numberOfEmployees: function(c){
    return Math.ceil((c * 2) / 60 );
  }

};

for ( var f = 0; f < SeaTac.hrs; f++) {

  //Hourly Totals
  var SeaTachourlyCustomer = SeaTac.randomNumberOfCustomers(SeaTac.minCustomerPerHr, SeaTac.maxCustomerPerHr);
  SeaTac.randomNumberOfCustomersPerHr.push(SeaTachourlyCustomer);

  var SeaTachourlyCups = SeaTac.projectedCupsSoldPerHr(SeaTac.randomNumberOfCustomersPerHr[f]);
  SeaTac.projectedCupsPerHr.push(SeaTachourlyCups);

  var SeaTachourlyCupsLbs = SeaTac.projectedCupsSoldPerHrInLbs(SeaTac.randomNumberOfCustomersPerHr[f]);
  SeaTac.projectedCupsPerHrInLbs.push(SeaTachourlyCupsLbs);

  var SeaTachourlyToGoLbs = SeaTac.projectedToGoLbsSoldPerHr(SeaTac.randomNumberOfCustomersPerHr[f]);
  SeaTac.projectedLbsPerCustomer.push(SeaTachourlyToGoLbs);

  var SeaTachourlyTotalBeans = SeaTac.totalAmountOfBeansPerHr(SeaTac.projectedCupsPerHr[f], SeaTac.projectedLbsPerCustomer[f]);
  SeaTac.totalBeansPerHr.push(SeaTachourlyTotalBeans);

  var SeaTachourlyEmployees = SeaTac.numberOfEmployees(SeaTac.randomNumberOfCustomersPerHr[f]);
  SeaTac.employeesPerHr.push(SeaTachourlyEmployees);

  //Daily Totals
  SeaTac.totalDailyProjectedCups += SeaTac.projectedCupsPerHr[f];
  SeaTac.totalDailyProjectedLbs += SeaTac.projectedLbsPerCustomer[f];
  SeaTac.totalDailyBeans += SeaTac.totalBeansPerHr[f];

  SeaTac.sumOfRandomNumbersOfCustomersPerHr += SeaTac.randomNumberOfCustomersPerHr[f];
};

//Company Totals
var SeaTaccompanyTotalProjectedCups = SeaTac.totalDailyProjectedCups;
SeaTaccompanyTotalProjectedCups;
var SeaTaccompanyTotalProjectedLbs = SeaTac.totalDailyProjectedLbs;
SeaTaccompanyTotalProjectedLbs;
var SeaTaccompanyTotalBeans = SeaTac.totalDailyBeans;
SeaTaccompanyTotalBeans;

//Adding to Data.html
var SeaTacx = document.getElementById('storelocation');
var SeaTacChild = document.createElement('p');
SeaTacChild.textContent = SeaTac.name;
var SeaTacList = document.createElement ('ul');
SeaTacx.appendChild(SeaTacChild);

for ( var g = 0; g < SeaTac.hrs; g++) {
  var SeaTacBullets = document.createElement ('li');
  SeaTacBullets.textContent = SeaTac.time[g] + ': ' + SeaTac.totalBeansPerHr[g] + ' lbs ' + '[' + SeaTac.randomNumberOfCustomersPerHr[g] + ' customers, ' + SeaTac.projectedCupsPerHr[g] + ' (' + SeaTac.projectedCupsPerHrInLbs[g] + ' lbs) ' + SeaTac.totalBeansPerHr[g] + ' lbs to-go]';
  SeaTacList.appendChild(SeaTacBullets);
}

var SeaTacmorebullets = document.createElement ('li');
SeaTacmorebullets.textContent = 'Total customers at ' + SeaTac.name + ': ' + SeaTac.sumOfRandomNumbersOfCustomersPerHr;
SeaTacList.appendChild(SeaTacmorebullets);

var SeaTacmorebulletscups = document.createElement ('li');
SeaTacmorebulletscups.textContent = 'Total cups sold at ' + SeaTac.name + ': ' + SeaTac.totalDailyProjectedCups;
SeaTacList.appendChild(SeaTacmorebulletscups);

var SeaTacmorebulletstogo = document.createElement ('li');
SeaTacmorebulletstogo.textContent = 'Total to-go pounds sold at ' + SeaTac.name + ': ' + SeaTac.totalDailyProjectedLbs;
SeaTacList.appendChild(SeaTacmorebulletstogo);

var SeaTacmorebulletstotalpounds = document.createElement ('li');
SeaTacmorebulletstotalpounds.textContent = 'Total pounds of beans needed at ' + SeaTac.name + ': ' + SeaTac.totalDailyBeans;
SeaTacList.appendChild(SeaTacmorebulletstotalpounds);

SeaTacx.appendChild(SeaTacList);*/

var time = ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var storesArray = [];

//Constructor

function StoreLocation (name, minCustomerPerHr, maxCustomerPerHr, cupsPerCustomer, toGoPoundsPerCustomer) {
//Properties
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
  this.totalDailyEmployees = 0;
  this.totalDailyProjectedCups = 0;
  this.totalDailyProjectedLbs = 0;
  this.totalDailyBeans = 0;
  storesArray.push(this);
};

//Methods
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

StoreLocation.prototype.dailyProjectedCups = function(cups){
  for (var i = 0; i < time.length; i++){
    this.totalDailyProjectedCups += cups[i];
  }
};

StoreLocation.prototype.dailyProjectedLbs = function(lbs){
  for (var i = 0; i < time.length; i++){
    this.totalDailyProjectedLbs += lbs[i];
  }
};

StoreLocation.prototype.dailyTotalLbs = function(lbs){
  for (var i = 0; i < time.length; i++){
    this.totalDailyBeans += lbs[i];
  }
};

StoreLocation.prototype.dailyCustomers = function(customers){
  for (var i = 0; i < time.length; i++){
    this.sumOfRandomNumbersOfCustomersPerHr += customers[i];
  }
};

StoreLocation.prototype.dailyemployees = function (employees) {
  for (var i = 0; i < time.length; i++){
    this.totalDailyEmployees += employees[i];
  }
};


StoreLocation.prototype.allmethods = function() {
  this.randomNumberOfCustomers(this.minCustomerPerHr, this.maxCustomerPerHr);
  this.projectedCupsSoldPerHr(this.randomNumberOfCustomersPerHr);
  this.projectedCupsSoldPerHrInLbs(this.projectedCupsPerHr);
  this.projectedToGoLbsSoldPerHr(this.randomNumberOfCustomersPerHr);
  this.totalAmountOfBeansPerHr(this.projectedCupsPerHr, this.projectedToGoLbsPerHr);
  this.numberOfEmployees(this.randomNumberOfCustomersPerHr);
  this.dailyProjectedCups(this.projectedCupsPerHr);
  this.dailyProjectedLbs(this.projectedToGoLbsPerHr);
  this.dailyTotalLbs(this.totalBeansPerHr);
  this.dailyCustomers(this.randomNumberOfCustomersPerHr);
  this.dailyemployees(this.employeesPerHr);
};

//Creating my store location objects

var pikePlaceMarket = new StoreLocation ('Pike Place Market', 14, 35, 1.2, 0.34);
pikePlaceMarket.allmethods();

var capitolHill = new StoreLocation ('Capitol Hill', 12, 28, 3.2, 0.03);
capitolHill.allmethods();

var seattlePublicLibrary = new StoreLocation ('Seattle Public Library', 9, 45, 2.6, 0.02);
seattlePublicLibrary.allmethods();

var southLakeUnion = new StoreLocation ('South Lake Union', 5, 18, 1.3, 0.04);
southLakeUnion.allmethods();

var seaTacAirport = new StoreLocation ('Sea-Tac Airport', 28, 44, 1.1, 0.41);
seaTacAirport.allmethods();


function updateStores() {
  for (elem of storesArray){
    elem.allmethods();
  }
}

// Creating Table Beans Needed By Location Each Day


var table = document.getElementById('beanstable');
var total = 'Daily Location Total';

function makeheadertime(timearray) {
  var tableheader1 = document.createElement('th');
  table.appendChild(tableheader1);
  var tableheader2 = document.createElement('th');
  tableheader2.textContent = total;
  table.appendChild(tableheader2);

  for ( var h = 0; h < time.length; h++) {
    var tableheader3 = document.createElement('th');
    tableheader3.textContent = timearray[h];
    table.appendChild(tableheader3);
  }
}

makeheadertime(time);

function makeRowBeans(obj) {
  var row = document.createElement('tr');

  var cell1 = document.createElement('td');
  cell1.textContent = obj.name;
  row.appendChild(cell1);

  var cell2 = document.createElement('td');
  cell2.textContent = obj.totalDailyBeans;
  row.appendChild(cell2);


  for ( var h = 0; h < time.length; h++) {
    var cell3 = document.createElement('td');
    cell3.textContent = obj.totalBeansPerHr[h];
    row.appendChild(cell3);
  }
  table.appendChild(row);
}

makeRowBeans(pikePlaceMarket);
makeRowBeans(capitolHill);
makeRowBeans(seattlePublicLibrary);
makeRowBeans(southLakeUnion);
makeRowBeans(seaTacAirport);


//Creating Baristas Needed By Location
var table = document.getElementById ('baristatable');
var total = 'Total';
makeheadertime(time);

function makeRowBaristas(obj) {
  var row = document.createElement('tr');

  var cell1 = document.createElement('td');
  cell1.textContent = obj.name;
  row.appendChild(cell1);

  var cell2 = document.createElement('td');
  cell2.textContent = obj.totalDailyEmployees;
  row.appendChild(cell2);


  for ( var h = 0; h < time.length; h++) {
    var cell3 = document.createElement('td');
    cell3.textContent = obj.employeesPerHr[h];
    row.appendChild(cell3);
  }
  table.appendChild(row);
}

makeRowBaristas(pikePlaceMarket);
makeRowBaristas(capitolHill);
makeRowBaristas(seattlePublicLibrary);
makeRowBaristas(southLakeUnion);
makeRowBaristas(seaTacAirport);

// Form section


// Event handler
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);


  var name = event.target.name.value;
  var minCustomerPerHr = parseFloat(event.target.minimum.value);
  var maxCustomerPerHr = parseFloat(event.target.maximum.value);
  var cupsPerCustomer = parseFloat(event.target.cups.value);
  var toGoPoundsPerCustomer = parseFloat(event.target.togo.value);

  var newStore = new StoreLocation(name, minCustomerPerHr, maxCustomerPerHr, cupsPerCustomer, toGoPoundsPerCustomer);
  newStore.allmethods();

  makeRowBeans(newStore);
}

// Event listener
form.addEventListener('submit', handleFormSubmit);

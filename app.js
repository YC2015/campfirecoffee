var PikePlaceMarket = {
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

for ( var i = 0; i < PikePlaceMarket.hrs; i++) {

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


x.appendChild(list);

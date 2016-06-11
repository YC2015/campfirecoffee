var PikePlaceMarket = {
  hrs : 13,
  minCustomerPerHr : 14,
  maxCustomerPerHr : 35,
  cupsPerCustomer : 1.2,
  toGoPoundsPerCustomer : 0.34,
  randomNumberOfCustomersPerHr: [ ],
  projectedCupsPerHr: [],
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


};

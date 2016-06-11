var PikePlaceMarket = {
  hrs : 13,
  minCustomerperHr : 14,
  maxCustomerperHr : 35,
  cupspercustomer : 1.2,
  togopoundspercustomer : 0.34,
  RandomNumberofCustomersperHr: [ ],
  ProjectedCupsperHr: [],
  ProjectedLbsperCustomer: [],
  TotalBeansperHr: [],
  totalDailyProjectedCups: 0,
  totalDailyProjectedLbs:0,
  totalDailyBeans:0,

  randomnumberofcustomers: function(minCustomerperHr, maxCustomerperHr) {
    return Math.floor(Math.random() * (maxCustomerperHr - minCustomerperHr + 1) ) + minCustomerperHr;
  },

  projectedcupssoldperhr: function(customers) {
    return Math.ceil(this.cupspercustomer * customers);
  },

  projectedtogolbssoldperhr: function(customers) {
    return Math.ceil(this.togopoundspercustomer * customers);
  },

  totalamountofbeansperhr: function(a,b) {
    return Math.ceil(a + b);
  }

};

for ( var i = 0; i < PikePlaceMarket.hrs; i++) {

  //Hourly Totals
  var hourlycustomer = PikePlaceMarket.randomnumberofcustomers(PikePlaceMarket.minCustomerperHr, PikePlaceMarket.maxCustomerperHr);
  PikePlaceMarket.RandomNumberofCustomersperHr.push(hourlycustomer);

  var hourlycups = PikePlaceMarket.projectedcupssoldperhr(PikePlaceMarket.RandomNumberofCustomersperHr[i]);
  PikePlaceMarket.ProjectedCupsperHr.push(hourlycups);

  var hourlytogolbs = PikePlaceMarket.projectedtogolbssoldperhr(PikePlaceMarket.RandomNumberofCustomersperHr[i]);
  PikePlaceMarket.ProjectedLbsperCustomer.push(hourlytogolbs);

  var hourlytotalbeans = PikePlaceMarket.totalamountofbeansperhr(PikePlaceMarket.ProjectedCupsperHr[i], PikePlaceMarket.ProjectedLbsperCustomer[i]);
  PikePlaceMarket.TotalBeansperHr.push(hourlytotalbeans);

//Daily Totals
  PikePlaceMarket.totalDailyProjectedCups += PikePlaceMarket.ProjectedCupsperHr[i];
  PikePlaceMarket.totalDailyProjectedLbs += PikePlaceMarket.ProjectedLbsperCustomer[i];
  PikePlaceMarket.totalDailyBeans += PikePlaceMarket.TotalBeansperHr[i];

};


//return PikePlaceMarket.TotalDailyProjectedCupsperHr;

/*

  totalamountofbeansperday:
  // totalamountofbeansperhour * #of hours
  // total amount at this location
  numberofemployees: function() {
  // calculation, include method for rounding
  }
};

// method to calculate total storewide totals from all locations*/

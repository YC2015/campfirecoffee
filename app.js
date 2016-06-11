var PikePlaceMarket = {
  hrs : 13,
  minCustomerperHr : 14,
  maxCustomerperHr : 35,
  cupspercustomer : 1.2,
  togopoundspercustomer : 0.34,
  RandomNumberofCustomersperHr: [ ],
  ProjectedCupsperHr: [],
  ProjectedLbsperCustomer: [],

  randomnumberofcustomers: function(minCustomerperHr, maxCustomerperHr) {
    return Math.floor(Math.random() * (maxCustomerperHr - minCustomerperHr + 1) ) + minCustomerperHr;
  },

  projectedcupssoldperhr: function(customers) {
    return Math.ceil(this.cupspercustomer * customers);
  },

  projectedtogolbssoldperhr: function(customers) {
    return Math.ceil(this.togopoundspercustomer * customers);
  }

};

for ( var i = 0; i < PikePlaceMarket.hrs; i++) {
  var hourlycustomer = PikePlaceMarket.randomnumberofcustomers(PikePlaceMarket.minCustomerperHr, PikePlaceMarket.maxCustomerperHr);
  PikePlaceMarket.RandomNumberofCustomersperHr.push(hourlycustomer);

  var hourlycups = PikePlaceMarket.projectedcupssoldperhr(PikePlaceMarket.RandomNumberofCustomersperHr[i]);
  PikePlaceMarket.ProjectedCupsperHr.push(hourlycups);

  var hourlytogolbs = PikePlaceMarket.projectedtogolbssoldperhr(PikePlaceMarket.RandomNumberofCustomersperHr[i]);
  PikePlaceMarket.ProjectedLbsperCustomer.push(hourlytogolbs);
}


/*

  projectedcupssoldperhour: function () {
    cupspercustomer * randomnumberofcustomers;
  },
  projectedpoundssoldperhour: function () {
    togopoundspercustomer * randomnumberofcustomers;
  },
  totalamountofbeansperhour: function () {
    projectedpoundssoldperhour + projectedcupssoldperhour;
  },
  totalamountofbeansperday:
  // totalamountofbeansperhour * #of hours
  // total amount at this location
  numberofemployees: function() {
  // calculation, include method for rounding
  }
};

// method to calculate total storewide totals from all locations*/

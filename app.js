var PikePlaceMarket = {
  hrs : 15,
  minCustomerperHr : 14,
  maxCustomerperHr : 35,
  cupspercustomer : 1.2,
  togopoundspercustomer : 0.34,
  RandomNumberofCustomersperHr: [ ],

  randomnumberofcustomers: function(minCustomerperHr, maxCustomerperHr) {
    return Math.floor(Math.random() * (maxCustomerperHr - minCustomerperHr + 1) ) + minCustomerperHr;
  }

};

for ( var i = 1; i < PikePlaceMarket.hrs; i++) {
  var hourlycustomer = PikePlaceMarket.randomnumberofcustomers(PikePlaceMarket.minCustomerperHr, PikePlaceMarket.maxCustomerperHr);
  PikePlaceMarket.RandomNumberofCustomersperHr.push(hourlycustomer);
}

/*
  randomnumberofcustomers: function (minCustomerperHr, maxCustomerperHr){
    return Math.floor( Math.random() * ( maxCustomerperHr - minCustomerperHr + 1)) + minCustomerperHr;
  },
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

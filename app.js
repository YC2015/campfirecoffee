
// object model for all store locations
var storeLocation = {
};

//started working through a specific locaton so I could focus on numbers more easily
//calculations based on per hour (not sure how to incorporate hours just yet)
//have to incorporate 16 cups = 1lbs of coffee
var PikePlaceMarket = {
  minCustomerperHr: 14,
  maxCustomerperHr: 35,
  cupspercustomer: 1.2,
  togopoundspercustomer: 0.34,
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

//Need to figure out how to create my array for the data page

// method to calculate total storewide totals from all locations

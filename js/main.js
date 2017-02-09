// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  urlRoot: "/api/vehicles",

  validate: function(attrs){
    if (!attrs.registrationNumber)
      return "Registration Number is required.";
  },

  start: function(){
    console.log("Vehicle started");
  }
});

var Car = Vehicle.extend({
  registrationNumber: 98765,
  start: function(){
    console.log("Car with registration number ", this.get('registrationNumber'), " started");
  }
})

var car = new Car({
  registrationNumber: "XLI887",
  color: "Blue"
});

car.start();

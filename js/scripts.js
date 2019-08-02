//business logic
function Oder(pizzaSize, crust, toppings,numberOfPiza,derivery) {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings ;
    this.numberOfPiza = numberOfPiza;
    this.derivery = derivery;
  } 
  function resetFields() {
      $("select#size").val("");
      $("select#crust").val("");
      $("select#topp").val("");
      $("input#number").val("");
      $("select#delive").val("");
  }
  // user interface logic
  $(document).ready(function() {
  
    // $("#add-address").click(function() {
    //   $("#new-addresses").append('<div class="new-address">' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-street">Street</label>' +
    //                                  '<input type="text" class="form-control new-street">' +
    //                                '</div>' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-city">City</label>' +
    //                                  '<input type="text" class="form-control new-city">' +
    //                                '</div>' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-state">State</label>' +
    //                                  '<input type="text" class="form-control new-state">' +
    //                                '</div>' +
    //                              '</div>');
    // });
  
    $("div#form").submit(function(event) {
      event.preventDefault();
  
      var inputtedPizzaSize = $("select#size").val();
      var inputtedCrust = $("select#crust").val();
      var inputtedToppings = $("select#crust").val();
      var inputtedNumberOfPiza = $("select#number").val();
      var inputtedDerivery = $("select#delive").val();
      var newOrder = new Order(inputtedPizzaSize, inputtedCrust, inputtedToppings, inputtedNumberOfPiza, inputtedDerivery);
  
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
        newContact.addresses.push(newAddress)
      });
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
      });
  
      resetFields();
  
    });
  });
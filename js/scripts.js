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
      var inputtedToppings = $("select#topp").val();
      var inputtedNumberOfPiza = $("input#number").val();
      var inputtedDerivery = $("select#delive").val();
      var newOrder = new Order(inputtedPizzaSize, inputtedCrust, inputtedToppings, inputtedNumberOfPiza, inputtedDerivery);
  
      $("#form").each(function() {
        var  inputtedPizzaSize = $(this).find("select#size").val();
        var inputtedCrust = $(this).find("select#crust").val();
        var inputtedToppings = $(this).find("select#topp").val();
        var inputtedNumberOfPiza = $(this).find("input#number").val();
        var inputtedDerivery = $(this).find("select#delive").val();
        var newOrder = new Order(inputtedPizzaSize, inputtedCrust, inputtedToppings, inputtedNumberOfPiza, inputtedDerivery);
        newOrder.push(newOrder)
      });
  
      $("p#contacts").append("<span class='contact'>" + newOrder() + "</span>");
  
      $(".contact").last().click(function() {
        $("#show-order").show();
        // $("#show-order h2").text(newContact.fullName());
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
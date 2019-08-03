//business logic
function Order(pizzaSize, crust, toppings,numberOfPiza,derivery) {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings ;
    this.numberOfPiza = numberOfPiza;
    this.derivery = derivery;
  } 

  function Orders(pizzaSize2, crust2, toppings2,numberOfPiza2,derivery2) {
    this.pizzaSize1 = pizzaSize2;
    this.crust1 = crust2;
    this.toppings1 = toppings2 ;
    this.numberOfPiza1 = numberOfPiza2;
    this.derivery1 = derivery2;
  }
  Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.pizzaSize + " " +this.crust+ " " + this.toppings + " " +this.numberOfPiza+" "+this.derivery;
    }      
  Orders.prototype.fullOrders=function(){
        return this.pizzaSize1 + " " + this.crust1 + " " +this.toppings1+ " " + this.numberOfPiza1 + " " +this.derivery1;
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
  
    $("#button2").click(function() {
      $("#form").append('<div class="new-address">' +
                                   '<label>Pizza size</label>' +
                                     ' <select class="browser-default custom-select mb-4" id="size">' +' <option value="1" selected>Small</option>'+
                                     '<option value="2">Medium</option>'+'<option value="3">Large</option>'+ '</select>'+
                                     '<label>Crust</label>'+'<select class="browser-default custom-select mb-4" id="crust">'+
                                    '<option value="1"  selected>Cheese Filled</option>'+
                                    '<option value="2"> Crispy</option>'+
                                    '<option value="3">Deep</option>'+
                                    '<option value="4">Detroit</option>'+
                                    '<option value="5">Flatbread</option>'+
                                    '<option value="6"> Gluten-free</option>'+
                                    '<option value="7">Neo-Neapolitan</option>'+
                                    '<option value="8">Romana</option>'+
                                    '<option value="9">Stuffed</option>'+
                                    '<option value="10">Whole Wheat </option>'+'</select>'+'<label>Toppings</label>'+
                                    '<select class="browser-default custom-select mb-4" id="topp">'+
                                        '<option value="1"  selected>Black Olive</option>'+
                                        '<option value="2">Extra Cheese</option>'+
                                        '<option value="3"> Green Pepper</option>'+
                                        '<option value="4">Mashroom</option>'+
                                        '<option value="5">Bacon</option>'+
                                        '<option value="6">Onion</option>'+
                                        '<option value="7">Sausage</option>'+
                                        '<option value="8">Pepperoni</option>'+
                                        '<option value="9">Tomatoes</option>'+
                                        '<option value="10">Chiken</option>'+
                                        '<option value="11">Beef</option>'+
                                        '<option value="12">Pineapple</option>'+
                                    '</select>'+'<label>Number of Pizza</label>'+
                                    '<input type="number" name="quantity" min="1" id="number"> <br> <br>'+
                                    '<label>Delivery Option</label>'+
                                    '<select class="browser-default custom-select mb-4" id="delive">'+
                                        '<option value="1" >Yes</option>'+
                                        '<option value="2">No</option>'+
                                    '</select>');
    });
  
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
        var newOrder1 = new Order(inputtedPizzaSize, inputtedCrust, inputtedToppings, inputtedNumberOfPiza, inputtedDerivery);
        newOrder.push(newOrder1)
      });
  
      $("p#contacts").append("<span class='contact'>" + newOrder.fullOrder() + "</span>");
  
      $(".contact").last().click(function() {
        $("#show-order").show();
        $("#show-order h2").text(newOrder.fullOrder());
        $(".pizza-size").text(newOrder.pizzaSize);
        $(".crust").text(newOrder.crust);
        $(".toppings").text(newOrder.toppings );
        $(".number-of").text(newOrder.numberOfPiza);
        $(".option").text(newOrder.derivery);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
      });
  
      resetFields();
  
    });
  });
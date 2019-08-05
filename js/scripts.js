//business logic
function Order(pizzaSize, crust, toppings, pizzaSizeP, crustP,toppingsP,derivery) {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings ;
    this.pizzaSizeVal= pizzaSizeP;
    this.crustVal = crustP;
    this.toppingsVal= toppingsP;

    // this.NumberOfPiza = numberOfPiza;
    this.derivery = derivery;
  } 
  Order.prototype.fullOrder=function(){
    return this.pizzaSizeVal  +this.crustVal + this.toppingsVal;
    }
    // var delivery =1500
    // Order.prototype.pizzacost = function(){
    //   return this.fullOrder() + delivery;
    // }      
  // Orders.prototype.fullOrders=function(){
  //       return this.pizzaSize1 + " " + this.crust1 + " " +this.toppings1+ " " + this.numberOfPiza1 + " " +this.derivery1;
  //     }
  function resetFields() {
      $("select#size3").val("");
      $("select#crust3").val("");
      $("select#topping3").val("");
      $("input#number3").val("");
      $("select#delive3").val("");
  }
  // user interface logic
  $(document).ready(function() {
  
    $("#button2").click(function() {
      $("#forms").append('<div class="new-address">' +
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
  // $("#tot").hide();
  // $("#deliver").hide();
  // $("#totcost").hide();
    $("#button1").click(function(event) {
      event.preventDefault();
  
      var inputtedPizzaSize = $("#size3 option:selected").text();
      var inputtedCrust = $("#crust3 option:selected").text();
      var inputtedToppings = $("#topping3 option:selected").text();
      var inputtedPizzaSizeP = parseInt($("#size3 option:selected").val());
      var inputtedCrustP = parseInt($("#crust3 option:selected").val());
      var inputtedToppingsP = parseInt($("#topping3 option:selected").val());
      // var inputtedNumberOfPiza = $("input#number3").val();
      var inputtedDerivery = $("#delive3 option:selected").text();
      var newOrder = new Order(inputtedPizzaSize, inputtedCrust, inputtedToppings,inputtedPizzaSizeP,inputtedCrustP,inputtedToppingsP,inputtedDerivery,);
      
  
        $("#show-order").show();
        console.log(newOrder.pizzaSizeVal+ newOrder.crustVal+ newOrder.toppingsVal+ newOrder.derivery);
        // $("#show-order h2").text(newOrder.fullOrder());
        $(".pizza-size").text(newOrder.pizzaSize);
        $(".crust").text(newOrder.crust);
        $(".toppings").text(newOrder.toppings );
        // $(".number-of").text(newOrder.NumberOfPiza);
        $(".option").text(newOrder.derivery);
        $(".cost").text(newOrder.fullOrder());
        
        });
      });
  
      resetFields();
          
    
  // });
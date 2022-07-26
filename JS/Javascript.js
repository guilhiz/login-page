 let inputs = document.getElementsByClassName("input-form");
 for (let input of inputs) { 
      input.addEventListener("blur", function() {
        console.log("entrou function");
        if(input.value.trim() != "") {
            console.log("entrou if");
             input.classList.add("has-val");
        } else { 
            console.log("não entro no if");
            input.classList.remove("has-val");
        }
      });
 }
    console.log("tudobem");
 

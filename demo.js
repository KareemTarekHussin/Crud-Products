var productName= document.getElementById("productName");
var productCategory= document.getElementById("productCategory");
var productPrice= document.getElementById("productPrice");
var productDescription= document.getElementById("productDescription");
var tbody = document.getElementById("tbody");
var newBtn = document.getElementById("newBtn")
var pnamealert = document.getElementById("pnamealert")
var pnamenum = document.getElementById("pnamenum")
var allData = document.getElementById("allData")




if(localStorage.getItem('productData')== null){
    productList =[];

}
else{
var productList = JSON.parse(localStorage.getItem("productData"));
displayProduct()
}









function crateProduct(){
   
  if(productValidate() && productCategory.value !="" && productPrice.value !="" && productDescription.value !=""){
    if (newBtn.innerHTML.includes("add product")) {
    
        var  product ={
            pname: productName.value,
            pcategory: productCategory.value,
            pprice: productPrice.value,
            pdescriptionn:productDescription.value
        
        
            }
        
            
            productList.push(product)
        
            localStorage.setItem("productData",JSON.stringify(productList ) );
            
            // console.log(product)
            // console.log(productList)
            displayProduct()
            // clearForm()
      }
    
      else{
        newProduct();
      }
    
    
      displayProduct()
  }

  else{
    allData.classList.remove("d-none")
  }




    
}

function clearForm(){
    productName.value =""
    productCategory.value=""
    productPrice.value=""
    productDescription.value=""


}

function displayProduct(){
    
var trs=""
    for( var i =0; i<productList.length; i++){


      trs +=` <tr>
     <td>${i}</td>
     <td>${productList[i].pname}</td>
     <td>${productList[i].pcategory}</td>
     <td>${productList[i].pprice}</td>
     <td>${productList[i]. pdescriptionn}</td>
     <td>
         <button onclick="updateProduct(${i})" class="btn btn-outline-warning">  <i class="fa-solid fa-pen"></i>  </button>
     </td>
     <td>
        
         <button onclick="deleteProducte(${i})" class="btn btn-outline-danger">   <i class="fa-sharp fa-solid fa-trash"></i> </button>
     </td>
 </tr>`
 

    }

    // console.log(trs);
    tbody.innerHTML=trs;
}

function searchProduct(){

    var searchInput = document.getElementById("searchInput")
    // console.log(searchInput.value);
    var trs=""
    for(var i=0; i<productList.length; i++){

        if(productList[i].pname.includes (searchInput.value)){

          
        trs +=` <tr>
        <td>${i}</td>
        <td>${productList[i].pname}</td>
        <td>${productList[i].pcategory}</td>
        <td>${productList[i].pprice}</td>
        <td>${productList[i]. pdescriptionn}</td>
        <td>
            <button class="btn btn-outline-warning">  <i class="fa-solid fa-pen"></i>  </button>
        </td>
        <td>
           
            <button  class="btn btn-outline-danger" >   <i class="fa-sharp fa-solid fa-trash"></i> </button>
        </td>
    </tr>`
    
   

        }


    }

    tbody.innerHTML= trs;
}
// console.log(productList);
function deleteProducte(indexofproduct){

    // console.log(indexofproduct);
   
    productList.splice(indexofproduct , 1)
    // console.log(productList)

    localStorage.setItem("productData", JSON.stringify(productList))
    displayProduct();
}



var globalIndex =0;

function updateProduct(index) {

    // globalIndex =index;
   
   productName.value = productList[index].pname
   productCategory.value = productList[index].pcategory
   productPrice.value = productList[index].pprice
   productDescription.value = productList[index].pdescriptionn

   newBtn.innerHTML = "update product"


}

console.log(globalIndex)
function newProduct() {
    productList[globalIndex].pname = productName.value
    productList[globalIndex].pcategory = productCategory.value
    productList[globalIndex].pprice = productPrice.value
    productList[globalIndex].pdescriptionn = productDescription.value

    localStorage.setItem("productData", JSON.stringify(productList))

    clearForm()
}


 function productValidate() {

    var pnameRegex = /^[A-Z][a-z]{3,10}[0-9]{0,4}$/;

    // var pNAME = productName.value;
    // console.log(productName.value)

    // console.log(pNAME)

   

    if ( /^[A-Z]/.test(productName.value) == false) {

        productName.classList.add("is-valid")
        productName.classList.remove("is-invalid")
        pnamealert.classList.add("d-none")
        allData.classList.add("d-none")
        return true;
    }

    else if(/^[A-Z][a-z]{3,10}/.test(productName.value)){

        productName.classList.add("is-valid")
        productName.classList.remove("is-invalid")
        pnamenum.classList.add("d-none")
        allData.classList.add("d-none")
        return true;
  
     
     





    }
    else{
        pnamealert.classList.remove("d-none")
        productName.classList.add("is-invalid")
        productName.classList.remove("is-valid")
        return false;
    }

    
 }

productName.addEventListener('blur',  productValidate)



const elForm=document.querySelector(".js-form");
const elInputLink=document.querySelector(".js-link");
const elInputName=document.querySelector(".js-name ");
const elInputNumber=document.querySelector(".js-number");
const elUl=document.querySelector(".js-ul");
let newpost=[]
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    newpost.push({inpLink: elInputLink.value,inputName:elInputName.value,inputNumber:elInputNumber.value})
    newFuncsiya();
    elInputLink.value="";
    elInputName.value="";
    elInputNumber.value="";
});
function newFuncsiya(){
    elUl.innerHTML = newpost.map((item,index) => {
        return ` 
        <li class="card flex-wrap me-5 mb-3" style="width: 12rem;">           
            <img src="${item.inpLink}" class="card-img-top" alt="rasm nomi">
            <div class="card-body">
            <h5 class="card-title">${item.inputName}</h5>
            <p class="card-text">${item.inputNumber}</p>          
            <p>Post:${index + 1}</p>
            <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
            </div> 
            </li>`  
    }).join("");
} 
newFuncsiya();
function deleteItem(index) {
    newpost.splice(index, 1)
    newFuncsiya()
}
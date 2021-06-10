var siteNameInput = document.getElementById("siteName");
var SiteURLInpyt = document.getElementById("SiteURL");
var  myNote =  document.getElementById('notic');
var  myNot =  document.getElementById('notice');
var modelError2 = document.getElementById('modelError2');
var modelError = document.getElementById('modelError');
var siteNameInputMoadal = document.getElementById("siteNameModal");
var SiteURLInpytModal = document.getElementById("SiteURLModal");

var bookMakerArr ;

if(localStorage.getItem("bookMaker")==null)
{
var bookMakerArr=[];
}
else
{
  bookMakerArr = JSON.parse(localStorage.getItem("bookMaker"));
displayname();
}
function addBookMaker(){
    if(checkInputs() == false )
    {
        if(siteNameInput.value =="")
        {
            myNote.textContent ='Name is required';
       
        }
        if(SiteURLInpyt.value =="")
        {
             myNot.textContent ='url is required';
           
        }
    }
    else
    {
        var bookMaker =
        {
            name : siteNameInput.value ,
            url  :  SiteURLInpyt.value,
        }
       bookMakerArr.push(bookMaker);
       localStorage.setItem("bookMaker",JSON.stringify(bookMakerArr) );
        displayname();
        clearForm();
    }
   
}
   
function displayname(){
    var cartoona =``
    for ( var i=0 ; i<bookMakerArr.length ; i++)
    {
        cartoona += `
        <tr>
        <td class=" font-weight-bold  m-5">  ${bookMakerArr[i].name } </td>
        <td> <button onclick="addHttp()"  class="btn btn-outline-warning ml-5   "> Visite </button></td>
        <td> <button onclick="getRowData(${i})"  class="btn btn-outline-info bg-info m-2 " > <a href="#" data-toggle="modal"  data-target="#exampleModal">Update</a>
        </button></td>
        <td> <button onclick="deletename(${i})" class="btn btn-outline-danger bg-danger m-2"> delete </button></td>
        </tr>
        `
    }
   document.getElementById("tableBody").innerHTML = cartoona;
 
}
function clearForm(){
    siteNameInput.value ="";
    SiteURLInpyt.value="";
}
 function checkInputs(){
if ( siteNameInput.value == "" ||  SiteURLInpyt.value ==""){
    return false;
}
else{
    return true
}
}

function deletename(index){
    bookMakerArr.splice(index,1);
    localStorage.setItem("bookMaker",JSON.stringify(bookMakerArr) );
    displayname();
}
function addHttp( url) {

 location.href='https://'+ url ;

}
var updateIndex;
function getRowData(index){
    console.log(bookMakerArr[index]);  
    siteNameInputMoadal.value=bookMakerArr[index].name;
    SiteURLInpytModal.value=bookMakerArr[index].url;
    updateIndex = index;
    console.log(updateIndex);

}
function updateForm(){
    var bookMakerModal =
        {
           name : siteNameInputMoadal.value,
            url: SiteURLInpytModal.value, 
        }
        bookMakerArr.splice(updateIndex,1,bookMakerModal);

       localStorage.setItem("bookMaker",JSON.stringify(bookMakerArr) );
        displayname();
        clearForm();
}

siteNameInput.addEventListener("keydown",function(){
    myNote.style.display="none";
})
SiteURLInpyt.addEventListener("keydown",function(){
    myNot.style.display="none";
})

// window.addEventListener('DOMContentLoaded', function(){
//     var checkboxes=document.querySelectorAll('input[type="checkbox]')
//     var maxAllowed=3;

//     checkboxes.forEach(function(checkbox){
//         checkbox.addEventListener('change',function(){
//             var checkedCount=document.querySelectorAll('input[type="checkbox"]:checked').length;
//             if(checkedCount>maxAllowed){
//                 this.checked=false;
//             }
//             if(checkedCount==maxAllowed){
//                 checkboxes.forEach(function(otherCheckbox){
//                     if(!otherCheckbox.checked){
//                         otherCheckbox.disabled=true;
//                     }
//                 });
//                 updateLable("Maximum Selected Checkboxes Reached");
//             }
//             else{
//                 checkboxes.forEach(function(otherCheckbox){
//                     otherCheckbox.disabled=false;
//                 });
//                 updateLable("");
//             }
//         });
//     });
//     function updateLable(message){
//         var label=document.getElementById('messagelabel');
//         label.textContent=message;
//     }
// });

function countCheckboxes(){
    var a = document.forms["main"];
    var x = a.querySelectorAll('input[type="checkbox"]:checked');
    var choose = document.getElementById('choose');
    choose.textContent= `Kies ${x.length} uit 5`;
    // console.log(`Kies ${x.length} uit 5`);
}
// choose.textContent= x.length;

console.log('hi');
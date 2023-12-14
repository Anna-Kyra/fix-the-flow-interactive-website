let cijfer = document.querySelector('output')
let goal = document.querySelectorAll("input[type='checkbox']")

let bereken = function() {
    let totaal = 0;

    let geselecteerdeGoals = document.querySelectorAll('input[type="checkbox"]:checked');
    let nietGoals = document.querySelectorAll('input[type="checkbox"]:not(:checked)');

    geselecteerdeGoals.forEach(function(item) {
        totaal = totaal += 1;
    });

    cijfer.innerHTML = totaal;
}


goal.forEach(function(){
    this.addEventListener('click', function(){
        bereken();

        let geselecteerdeGoals = document.querySelectorAll('input[type="checkbox"]:checked');
        let nietGoals = document.querySelectorAll('input[type="checkbox"]:not(:checked)');

        let max = 5;

        if(geselecteerdeGoals.length >= max) {
            nietGoals.forEach(function(otherCheckbox){
                if(!otherCheckbox.checked){
                    otherCheckbox.disabled = true;
                    otherCheckbox.required = false;
                }
            });
            console.log(nietGoals.length + "<")
        } else {
            nietGoals.forEach(function(otherCheckbox){
                    otherCheckbox.disabled = false;
                    otherCheckbox.required = true;
            });
            console.log(nietGoals.length + ">")
        }
    });
});
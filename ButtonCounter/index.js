let display = document.getElementById('display');
let counter = 0;
function appendToDisplay(){ 
    counter++;
    if(counter === 69){ 
        counter = "nice";
        console.log('nice');
        display.value = counter;
    }
    display.value = counter;

    if(counter === 'nice'){ 
        counter = 69;
    }

    if(counter === 1001){ 
        alert("you did it");
        counter = 0;
    }
}
const counters = document.querySelectorAll('.counter'); // here use queryselectorall because here all div classes are same
counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target') //using classname.getAttribute we will access the attribute data. eg=> data-target="500"
    //  + use for convert the string to a number
        // console.log(typeof targetCount);//for checking the data is string or integer

        const startingCount = Number(counter.innerHTML); //string to integer conversion

        const increment = targetCount / 100; //this is for how incrementing the data.
   
        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + increment)}`;

            setTimeout(updateCounter,30); //change every 50ms.
        }
        else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter(); 
})




// String data to integer
// there are several ways to achive it.

// 1.using the unary plus operator
// var n = +str;

// 2.The number constractor
// var n = Number(str);

// 3.The parseFloat function:
// var n = parseFloat(str);


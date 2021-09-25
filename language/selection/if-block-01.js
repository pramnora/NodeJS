//*** Function declarations...

function ifTest(x){
    if (x==1){
        console.log("x=1");
    } else if (x==2){
        console.log("x=2");
    } else {
        console.log("x NOT 1/x NOT 2");
    }
}

//*** Variable declarations...

a = 1; b = 2; c = 3;

//*** Main program...

ifTest(a);
ifTest(b);
ifTest(c);

//*** Output...
//x=1
//x=2
//x NOT 1/x NOT 2

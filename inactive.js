const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

var x = 1 
// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    if (x == 1 || x== 2 ){ 
    inactiveFirstStage()
    }
    
    if (x == 3 || x == 4 ){
    inactiveSecondStage()
    }
    
    if (x== 5 || x == 6 ){
    inactiveThirdStage = () 
    }
    
    x++ ;
    x = (x%7)+1 
}, 1000);

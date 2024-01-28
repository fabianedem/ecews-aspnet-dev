

    /*
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
      }
      
      
      alert( getLastDayOfMonth(2015, 1) ); // 31
      */

     
      




var lastDay;
var year;
var month = 0;
var yearTest;
var lastDayOfMonth;
var day;
var activeLastDay;
var activeFirstDay;

// Get last day of the month
var lastday = function(y,m){
    return  new Date(y, m +1, 0).getDate();
    }


    year = 2024; 
   // month = 1;
    lastDay = lastday(year,month);
    //alert(lastDay);

// An Array of Months
   let months =  ["January", "February","March","April","May","June","July","August","September","October","November","December"];

// An Array of Days
 
   
   


//Initialize Calendar

function initialize_calendar(){



    month = 0;
    echoDate()
    checkDay();

    lastDay = lastday(year,month);

    //Clear Date Container
    clear();


     if (activeFirstDay == "Sunday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 0;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}

      if (activeFirstDay == "Monday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 1;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}

    if (activeFirstDay == "Tuesday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 1;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}
    
    if (activeFirstDay == "Wednesday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 3;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}


    if (activeFirstDay == "Thursday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 4;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}


    if (activeFirstDay == "Friday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 5;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}

    if (activeFirstDay == "Saturday"){
        for (let i = 1; i <= lastDay; i++) {
            var j = i + 6;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;
      }}
  
}


function clear(){
  for (let i = 1; i <= 42; i++) {

    day = "day" + i ;
    document.getElementById(day).innerHTML = ""; 
  }

}


function echoDate(){
  document.getElementById("calendar_month").value = months[month];
  document.getElementById("calendar_year").value = year;
}


//Last day of the month based on date Check
function checkDay(){

 const CurrentWeekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthPick = document.getElementById("calendar_month").value;
  var dayPickLast = lastDay;
  var dayPickFirst = 1;
  var yearPick = document.getElementById("calendar_year").value;
  var dateDateLast = monthPick + " " + dayPickLast + ", " + yearPick;
  var dateDateFirst = monthPick + " " + dayPickFirst + ", " + yearPick;
  const dd = new Date(dateDateLast);
  const dd1 = new Date(dateDateFirst);
  let activeLastDayIndex = dd.getDay();
  let activeFirstDayIndex = dd1.getDay();
  activeLastDay = CurrentWeekDay[activeLastDayIndex];
  activeFirstDay = CurrentWeekDay[activeFirstDayIndex];

 //alert(dateDateLast + "  " + " LAST DAY: " + activeLastDay + "  &  " + dateDateFirst + "  " + "First Day: " + activeFirstDay);
 
 //alert(activeFirstDay);
 
}





//Add Months
   function addMonth(){
    
   

    if (month < 11){

        month += 1;
        //alert(months[month]);

        echoDate()
        checkDay();

        lastDay = lastday(year,month);

        //Clear Date Container
        clear();

        
        if (activeFirstDay == "Sunday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 0;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}


          if (activeFirstDay == "Tuesday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 1;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}


          if (activeFirstDay == "Wednesday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 2;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}


          if (activeFirstDay == "Thursday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 4;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}


          if (activeFirstDay == "Friday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 5;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}


          if (activeFirstDay == "Saturday"){

        for (let i = 1; i <= lastDay; i++) {

            var j = i + 6;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i; 
            
           
          }}
          
       


    } else if( month=11){

        month = 0;
        year += 1;
       //alert(months[month]);
       echoDate()
       checkDay();
       lastDay = lastday(year,month);  
       
       //Clear Date Container
       clear();

    if (activeFirstDay == "Sunday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 0;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}
      

    if (activeFirstDay == "Monday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 1;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}


    if (activeFirstDay == "Tuesday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 2;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}

    if (activeFirstDay == "Wednesday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 3;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}


    if (activeFirstDay == "Thursday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 4;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}


    if (activeFirstDay == "Friday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 5;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}


    if (activeFirstDay == "Saturday"){
        for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 6;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

      }}



    

    



    }}


    /*
    for (let i = 1; i <= lastDay; i++) {

        day = "day" + i ;
       // document.getElementById(day).innerHTML = i;
       document.write(lastDay)
     
      }

      */

    


//Subtract Months
   function subtractMonth(){

   

    if (month > 0){

        month -= 1;
        //alert(months[month]);
        echoDate()
        checkDay();
        lastDay = lastday(year,month);

        //Clear Date Container
        clear();

    if (activeFirstDay == "Sunday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 0;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}

    if (activeFirstDay == "Monday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 1;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}

    if (activeFirstDay == "Tuesday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 2;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}


    if (activeFirstDay == "Wednesday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 3;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}


    if (activeFirstDay == "Thursday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 4;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}

    if (activeFirstDay == "Friday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 5;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}  

    if (activeFirstDay == "Sunday"){ 
      for (let i = 1; i <= lastDay; i++) {
        
            var j = i + 6;
            day = "day" + j ;
            document.getElementById(day).innerHTML = i;

        
          }}

        

    } else if( month >= 0){

        month = 11;
        year -= 1
        //alert(months[month]);
        echoDate()
        checkDay();
        lastDay = lastday(year,month);

        //Clear Date Container
        clear();

    
    if (activeFirstDay == "Sunday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 0;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}

    if (activeFirstDay == "Monday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 1;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}


    if (activeFirstDay == "Tuesday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 2;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}


    if (activeFirstDay == "Wednesday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 3;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}



    if (activeFirstDay == "Thursday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 4;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}
    
    if (activeFirstDay == "Friday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 5;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}

    
    if (activeFirstDay == "Saturday"){ 
      for (let i = 1; i <= lastDay; i++) {
      
          var j = i + 6;
          day = "day" + j ;
          document.getElementById(day).innerHTML = i;
         
      
        }}
        
        
    }

   }

   



   //SET COLOUR TO ELEMENT ON-CLICK
   //document.getElementById("myP").style.color = "magenta";
/*
   function engageButtons( ){
    
    var clicked = true;

    if (clicked){

      document.getElementById("day1").style.backgroundColor = "green";
      clicked = false;

   } else {

    document.getElementById("day1").style.backgroundColor = "#e6ffe6"
    clicked = true;
   }

  }

  */

  //ENGAGE BUTTON

  function toggleClass(tagname){
    const day1 = document.getElementById('day1');
    day1.classList.toggle(tagname.value );
};

function toggleClass2(tagname){
  const day2 = document.getElementById('day2');
  day2.classList.toggle(tagname.value );
};


function toggleClass3(tagname){
  const day3 = document.getElementById('day3');
  day3.classList.toggle(tagname.value );
};

function toggleClass4(tagname){
  const day4 = document.getElementById('day4');
  day4.classList.toggle(tagname.value );
};

function toggleClass5(tagname){
  const day5 = document.getElementById('day5');
  day5.classList.toggle(tagname.value );
};

function toggleClass6(tagname){
  const day6 = document.getElementById('day6');
  day6.classList.toggle(tagname.value );
};

function toggleClass7(tagname){
  const day7 = document.getElementById('day7');
  day7.classList.toggle(tagname.value );
};

function toggleClass8(tagname){
  const day8 = document.getElementById('day8');
  day8.classList.toggle(tagname.value );
};

function toggleClass9(tagname){
  const day9 = document.getElementById('day9');
  day9.classList.toggle(tagname.value );
};

function toggleClass10(tagname){
  const day10 = document.getElementById('day10');
  day10.classList.toggle(tagname.value );
};

function toggleClass11(tagname){
  const day11 = document.getElementById('day11');
  day11.classList.toggle(tagname.value );
};

function toggleClass12(tagname){
  const day12 = document.getElementById('day12');
  day12.classList.toggle(tagname.value );
};

function toggleClass13(tagname){
  const day13 = document.getElementById('day13');
  day13.classList.toggle(tagname.value );
};

function toggleClass14(tagname){
  const day14 = document.getElementById('day14');
  day14.classList.toggle(tagname.value );
};


function toggleClass15(tagname){
  const day15 = document.getElementById('day15');
  day15.classList.toggle(tagname.value );
};

function toggleClass16(tagname){
  const day16 = document.getElementById('day16');
  day16.classList.toggle(tagname.value );
};


function toggleClass17(tagname){
  const day17 = document.getElementById('day17');
  day17.classList.toggle(tagname.value );
};

function toggleClass18(tagname){
  const day18 = document.getElementById('day18');
  day18.classList.toggle(tagname.value );
};

function toggleClass19(tagname){
  const day19 = document.getElementById('day19');
  day19.classList.toggle(tagname.value );
};

function toggleClass20(tagname){
  const day20 = document.getElementById('day20');
  day20.classList.toggle(tagname.value );
};

function toggleClass21(tagname){
  const day21 = document.getElementById('day21');
  day21.classList.toggle(tagname.value );
};

function toggleClass22(tagname){
  const day22 = document.getElementById('day22');
  day22.classList.toggle(tagname.value );
};

function toggleClass23(tagname){
  const day23 = document.getElementById('day23');
  day23.classList.toggle(tagname.value );
};

function toggleClass24(tagname){
  const day24 = document.getElementById('day24');
  day24.classList.toggle(tagname.value );
};


function toggleClass25(tagname){
  const day25 = document.getElementById('day25');
  day25.classList.toggle(tagname.value );
};

function toggleClass26(tagname){
  const day26 = document.getElementById('day26');
  day26.classList.toggle(tagname.value );
};

function toggleClass27(tagname){
  const day27 = document.getElementById('day27');
  day27.classList.toggle(tagname.value );
};

function toggleClass28(tagname){
  const day28 = document.getElementById('day28');
  day28.classList.toggle(tagname.value );
};

function toggleClass29(tagname){
  const day29 = document.getElementById('day29');
  day29.classList.toggle(tagname.value );
};

function toggleClass30(tagname){
  const day30 = document.getElementById('day30');
  day30.classList.toggle(tagname.value );
};

function toggleClass31(tagname){
  const day31 = document.getElementById('day31');
  day31.classList.toggle(tagname.value );
};

function toggleClass32(tagname){
  const day32 = document.getElementById('day32');
  day32.classList.toggle(tagname.value );
};

function toggleClass33(tagname){
  const day33 = document.getElementById('day33');
  day33.classList.toggle(tagname.value );
};

function toggleClass34(tagname){
  const day34 = document.getElementById('day34');
  day34.classList.toggle(tagname.value );
};


function toggleClass35(tagname){
  const day35 = document.getElementById('day35');
  day35.classList.toggle(tagname.value );
};

function toggleClass36(tagname){
  const day36 = document.getElementById('day36');
  day36.classList.toggle(tagname.value );
};

function toggleClass37(tagname){
  const day37 = document.getElementById('day37');
  day37.classList.toggle(tagname.value );
};

function toggleClass38(tagname){
  const day38 = document.getElementById('day38');
  day38.classList.toggle(tagname.value );
};

function toggleClass39(tagname){
  const day39 = document.getElementById('day39');
  day39.classList.toggle(tagname.value );
};

function toggleClass40(tagname){
  const day40 = document.getElementById('day40');
  day40.classList.toggle(tagname.value );
};

function toggleClass41(tagname){
  const day41 = document.getElementById('day41');
  day41.classList.toggle(tagname.value );
};

function toggleClass42(tagname){
  const day42 = document.getElementById('day42');
  day42.classList.toggle(tagname.value );
};

/*
  clicked = true;
    $(document).ready(function(){
        $("day1").click(function(){
            if(clicked){
                $(this).css('background-color', 'red');
                clicked  = false;
            } else {
                $(this).css('background-color', 'blue');
                clicked  = true;
            }   
        });
    });

*/

/*
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});

*/











  /*
  const CurrentWeekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthPick = document.getElementById("calendar_month").value;
  var dayPick = lastDay;
  var yearPick = document.getElementById("calendar_year").value;
  var dateDate = monthPick + " " + dayPick + ", " + yearPick;
  const dd = new Date(dateDate);
  let activeLastDayIndex = dd.getDay();

  document.write(dateDate + "  " +  CurrentWeekDay[activeLastDayIndex]);
  */

/*
//calendar_Weekly_Days
const CurrentWeekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//"July 16, 2024"
var monthPick = document.getElementById("calendar_month").value;
var dayPick = lastDay;
var yearPick = document.getElementById("calendar_year").value;
var dateDate = monthPick + " " + dayPick + ", " + yearPick;
const dd = new Date(dateDate);
let activeLastDay = dd.getDay();
document.write(dateDate + "  " +  CurrentWeekDay[activeLastDay]);
*/

/*
const CurrentWeekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//"July 16, 2024"
var monthPick = "March";
var dayPick = "31";
var yearPick = "2024";
var dateDate = monthPick + " " + dayPick + "," + yearPick;

const dd = new Date(dateDate);
let activeLastDay = dd.getDay();

document.getElementById("demo").innerHTML = CurrentWeekDay[activeLastDay];

*/

  
   
 
  



//Test if the month is Feburary and test for leap year
/*
if (month = 1){


    //GET last day of the month on Function call
    lastDay = lastday(year,month);
    alert(lastDay);
    //Divide year by 4
    yearTest = year/4;

    //Check if the year is a Leap year or Not 
    if ( Number.isInteger(yearTest)){

        //if a leap year, LET Feburary Last date = lastdate + 1
       // lastDay = lastDay
      
       
    } 

} else{

    lastDay = lastday(year,month);

}
   
    
//alert(yearTest + " => " + year + " It is a Leap year " + lastDay);

 */


/*
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});

*/

//document.getElementById("try").style.backgroundColor='red';
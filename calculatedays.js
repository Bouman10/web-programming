function calculateDays() {


 var fromDate = document.getElementByid('dtFrom')
 var toDate = document.getElementByid('dtTo')


 var date1 = new Date(fromDate.value);
 var date2 = new Date(toDate.value);



 var FromDate = document.getElementByid('fromDate');
 var time1 = fromTime.options[fromTime.selectedIndex].value;




 if (date2  <  date1)
 	alert('Applied To date cannot be less than applied from date');

 else if ((date1.getDate() == date2.getDate()) &&
 	     (date1.getMonth() == date2.getMonth()) &&
 	     (date1.getYear() == date2.getYear())) {

      if (time1 == time2)
      	    optDays.value = 0.5;
      else
      optDays.value = 1;	
    }
    else {
    	var oneDay = 1000*60*60*24;
        
        var date1MS = date1.getTime();
        var date2MS = date2.getTime();

        var dateDifference = date2MS - date1MS;

        var daysBetween = Math.round(dateDifference/oneDay);

        optDays.value = daysBetween
    }
}

  
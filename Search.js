/* This function searches for the employee name is an array and initializes a boolean variable based on the search result */

function searchEmployee() {

	// Declaration of variables

	var empWindow = window.document;
	var name=null;
	var i=0;

	// Create and iniatialize a two-dimentional array

	var employee = new Array (6);
	employee[0] = new Array ('Bouman','Abubakar Abdulhakeem', 9000);
	employee[1] = new Array ('Feesah','Abdulhakeem Nafeesah', 10000);
	employee[2] = new Array ('A.K','Abdulrazak Abdulhakeem', 25000);
	employee[3] = new Array ('Babban yaya','Abdulhakeem Ahmed', 5000000);
	employee[4] = new Array ('Ejan Nla','Abdulhakeem Shefiu', 4500000);
    employee[5] = new Array ('Conceptz','Abdullahi Abdulhakeem')
	// Get the value from the search text b0x
  name = employeeSearch.value;

	// while loop is used to tranverse in the employee array

	while (i < employee.length)
	{
		// The if condition compares values in the first column of the row
		// with the value stored in the name variable

		if (employee[i][1] == name)
		{
			flag = 'y' ;
			break;
		}
		else{
			flag = 'n';
		}
		i++;
	


	
	
		} // End of the while loop

// A dynamic table is created to display the searched result

   empWindow.write ('<H2> <center> Employees List </center></H2> <br/>');
   empWindow.write('<Table style="border: 1px solid #0000A0; Width: 70%; margin-left: 90px;">');
   empWindow.write('<TR>');
   empWindow.write('<TD style="border: 1px solid #0000A0; background-color: #FFEFFF;"> <B> EMPLOYEE CODE </B> </TD>');
    empWindow.write('<TD style="border: 1px solid #0000A0; background-color: #FFEFFF;"> <B> EMPLOYEE NAME </B> </TD>');
    empWindow.write('<TD style="border: 1px solid #0000A0; background-color: #FFEFFF;"> <B> EMPLOYEE SALARY($) </B> </TD>');
    empWindow.write('</TR>');
    
    if (flag == 'y') 
    {
    	empWindow.write('<TR>');
    	empWindow.write('<TD style="border: 1px solid #0000A0 background-color: #FFEFFF;">' + employee[i] [0] + '</TD>');
    	empWindow.write('<TD style="border: 1px solid #0000A0; background-color: #FFEFFF;">' + employee[i] [1] + '</TD>');
    	empWindow.write('<TD style="border: 1px solid #0000A0; background-color: #FFEFFF;">' + employee[i] [2] + '</TD>'); 
    	empWindow.write('</TR>');                                     
                                      

    } 
   if (flag == 'n') 
   {
   	empWindow.write('<TR>');
   	empWindow.write('<TD colspan="3" style="border: 1px solid #0000A0; background-color: #FFEFFF;"> Employee Not Found</TD>');
   	empWindow.write ('</TR>');                   
   }                    
} 
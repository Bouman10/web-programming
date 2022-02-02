function displayLeaveDetails(){
	
    var leaveObj = new Object();

    var leaveForm = document.getElementById('frmLeave');

    var x = document.getElementById('sltEmployeeNumber');
    var empid = x.options[x.selectedIndex].text;

    leaveObj.employeeId = empid;
    leaveObj.employeeName =
    document.getElementById('frmLeave').elements['txtEmployeeName'].value
    ;
    leaveObj.leaveType = 
    document.getElementById('frmLeave').elements['sltLeaveType'].value
    ;
    leaveObj.fromDate = 
    document.getElementById('frmLeave').elements['dateInput1'].value
    ;
    leaveObj.toDate =
    document.getElementById('frmLeave').elements['dateInput2'].value
    ;
    leaveObj.reason = 
    document.getElementById('frmLeave').elements['txtReason'].value
    ;
    leaveObj.approver =
    document.getElementById('frmLeave').elements['approveName'].value
    ;
    var leaveWindow = window.document;
    leaveWindow.write( '<h2><center>Leave Application Details</center></h2><br/>');
    leaveWindow.write('<table style="border: 1px solid #0000A0";width: 70% margin-left:90px;>');
    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b>EMPLOYEE ID:</b></td>');
    leaveWindow.write('<td>'+leaveObj.employeeId +'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b>EMPLOYEE NAME:</b></td>');
    leaveWindow.write('<td>'+leaveObj.employeeName+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b>LEAVE TYPE:</b></td>');
    leaveWindow.write('<td>'+leaveObj.leaveType+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b> APPLIED FROM DATE:</b></td>');
    leaveWindow.write('<td>'+leaveObj.fromDate+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b> APPLIED TO DATE:</b></td>');
    leaveWindow.write('<td>'+leaveObj.toDate+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b>REASON:</b></td>');
    leaveWindow.write('<td>'+leaveObj.reason+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('<tr>');
    leaveWindow.write('<td style="font: 1px solid #0000A0;"><b>APPROVER NAME:</b></td>');
    leaveWindow.write('<td>'+leaveObj.approver+'</td>');
    leaveWindow.write('</tr>');

    leaveWindow.write('</table>')

}
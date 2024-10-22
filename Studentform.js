
         var data1=document.getElementById("name")
         var data2=document.getElementById("age")
         
        
         var tbod=document.getElementById("tablebody")
         function change(){
            //Name
            var newrow=document.createElement("tr")
            var newdata1=document.createElement("td")
            newdata1.textContent=data1.value
            //Age
            newrow.append(newdata1)
            var newdata2=document.createElement("td")
            newdata2.textContent=data2.value
            newrow.append(newdata2)
            //phone number
            var data3=document.getElementById("phone")
            var newdata3=document.createElement("td")
            newdata3.textContent=data3.value
            newrow.append(newdata3)
            //Email
            var data4=document.getElementById("email")
            var newdata4=document.createElement("td")
            newdata4.textContent=data4.value
            newrow.append(newdata4)

            
            //Gender
            var data5 = document.querySelectorAll('input[name="gender"]');
            var value = '';
            for (var i = 0; i < data5.length; i++) {
                if (data5[i].checked) {
                    value = data5[i].value;
                    break; // Exit the loop once the checked radio is found
                }
            }

            var newdata5 = document.createElement("td");
            newdata5.textContent = value; // Add the selected gender value
            newrow.append(newdata5);

            //Courses

            var data6=document.querySelectorAll('input[name="courses"]')
            var selectedCourses=[]
            for(j=0;j<data5.length;j++){
                if(data5[j].checked){
                    selectedCourses.push(data5[j].value)
                }
            }
           
            var selectedCourses = [];
            var courseCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            for (var j = 0; j < courseCheckboxes.length; j++) {
                if (courseCheckboxes[j].checked) {
                    selectedCourses.push(courseCheckboxes[j].nextSibling.nodeValue.trim());
                }
            }
            var newdata6 = document.createElement("td");
            newdata6.textContent = selectedCourses.join(", "); // Join selected courses
            newrow.append(newdata6);


           

            // Get the uploaded file
            var fileInput = document.getElementById('resume');
            var file = fileInput.files[0];
            var newdata7 = document.createElement("td");
            if (file) {
                var downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(file);
                downloadLink.textContent = 'Download';
                downloadLink.download = file.name;
                newdata7.appendChild(downloadLink);
            } else {
                newdata7.textContent = 'No file uploaded';
            }
            newrow.append(newdata7);

            tbod.append(newrow)

            // Clear the input fields after saving
            data1.value = '';
            data2.value = '';
            data3.value = '';
            data4.value=' ';
            for (var k = 0; k < data5.length; k++) {
                data5[k].checked = false; // Uncheck radio buttons
            }
            for (var l = 0; l < courseCheckboxes.length; l++) {
                courseCheckboxes[l].checked = false; // Uncheck checkboxes
            }
            fileInput.value = ''; 
         }
      
      
      
    
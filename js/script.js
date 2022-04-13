// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let empTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount');
 

// for (let i = 1; i < empTable.rows.length; i++) {
//     // empTable[i].value;
//     let countText = document.createTextNode(empTable[i].value);
//     count.appendChild(countText);
// }

// let countText = document.createTextNode(empTable.rows.length);
// let countText = document.createTextNode(empTable.find('tr').length);


// output.textContent = empTable.rows.length;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id =        document.getElementById('id').value;
    let name =      document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email =     document.getElementById('email').value;
    let department =document.getElementById('department').value;
    let addForm = document.getElementById('addForm');

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDeleteBtn = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID =        document.createTextNode(id);
    let textName =      document.createTextNode(name);
    let textExtension = document.createTextNode(extension);
    let textEmail =     document.createTextNode(email);
    let textDepartment =document.createTextNode(department);
   
    cellID.appendChild(textID);
    cellName.appendChild(textName);
    cellExtension.appendChild(textExtension); 
    cellEmail.appendChild(textEmail);
    cellDepartment.appendChild(textDepartment);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    deleteBtn.className = 'btn bg-danger text-white';
    cellDeleteBtn.appendChild(deleteBtn);

    
    // RESET THE FORM
    addForm.reset();
    // const resetForm = () => {
    //     id.focus();
    //     name.reset();
    //     extension.reset();
    //     email.reset();
    //     department.reset();
    // }

    // addForm.addEventListener('click', resetForm);



    // SET FOCUS BACK TO THE ID TEXT BOX
    addForm.id.focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    // 
   
//     let count=0;

//     for(var i=1; i < empTable.rows.length; i++)
// {
//     // for(var j=0;j<empTable.rows[i].cells.length;j++)
    
//         if(empTable.rows[i].innerHTML!=null)
//         {
//             count++;
//         } 
//             let countText = document.createTextNode(count);
//             empCount.appendChild(countText);
//         }
// for (var i=1; i< empTable.rows.length; i--) {
//         if (deleteBtn.clicked) {
//             count--;
//         }
//         let countText = document.createTextNode(count);
//             empCount.appendChild(countText);
//         }
    
    
    

    // let count = 0;
    //     for (let i = 0; i < empTable.rows.length; i++) {
    //     count++
    //     let countText = document.createTextNode(count-1);
    //     empCount.appendChild(countText);;
    // }
    // function countRows(rows)
    // for (let i = 1; i < empTable.rows.length; i++) {
    // return countRows;
    
    //     let countText = document.createTextNode(rows-1);
    // empCount.appendChild(countText);
    // }


    let rows = empTable.rows.length;
    let countText = document.createTextNode(rows-1);
    empCount.appendChild(countText);

    function count() {
        if (deleteBtn.clicked) {
            rows - 1;
            let countText = document.createTextNode(rows-1);
            empCount.appendChild(countText);
        }
    }
    


    // function count() {
    //     let totalRowCount = 0;
    //     let rowCount = 0;
    //     let rows = empTable.getElementsByTagName('tr');
    //     for (let i = 1; i < rows.length; i++) {
    //         totalRowCount++;
    //         if(rows[i].getElementsByTagName('td').lenght > 0) {
    //             rowCount++;
    //         }
    //     }
    //     let countText = document.createTextNode(totalRowCount);
    //     empCount.appendChild(countText);
    // }
    
    
        });

// DELETE EMPLOYEE

empTable.addEventListener('click', (e) => {
    if(confirm('Are you sure you want to delete employee?')) {
        if(e.target.classList.contains('btn')){
            const btn = e.target;
            btn.closest('tr').remove();
        }
         
        // empTable.deleteRow(e.currentTarget.tr);
        // empTable.removeChild(e.target.parentElement);
    }
// let td = e.target.parentNode;
// let tr = td.parentNode;
// tr.parentNode.deleteRow(tr);
    })


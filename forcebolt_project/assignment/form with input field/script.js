
let name_input=document.querySelector("#name");
let fathername_input=document.querySelector("#fathername");
let mobilenumber_input=document.querySelector("#mobilenumber");
let address_input=document.querySelector("#address");
let email_input= document.querySelector("#email");
let form=document.querySelector("#submit");
let table_data_list=document.querySelector("#person-data");

form.addEventListener("click",(e)=>{
    e.preventDefault();

    const task_tr=document.createElement("tr");
    //name
    let name=name_input.value;
    const task_td_name=document.createElement("td");
    const task_td_name_input=document.createElement("input");
    task_td_name_input.classList.add('text');
    task_td_name_input.value=name;
    task_td_name_input.setAttribute('readonly','readonly');
    task_td_name.appendChild(task_td_name_input);

    //fatername
    let fathername=fathername_input.value;
    const task_td_fathername=document.createElement("td");
    const task_td_fathername_input=document.createElement('input');
    task_td_fathername_input.classList.add('text');
    task_td_fathername_input.value=fathername;
    task_td_fathername_input.setAttribute('readonly','readonly');
    task_td_fathername.appendChild(task_td_fathername_input);
    
    //mobilenumber
    let mobilenuber=mobilenumber_input.value;
    const task_td_mobilenumber=document.createElement("td");
    const task_td_mobilenumber_input=document.createElement('input');
    task_td_mobilenumber_input.classList.add('text');
    task_td_mobilenumber_input.value=mobilenuber;
    task_td_mobilenumber_input.setAttribute('readonly','readonly');
    task_td_mobilenumber.appendChild(task_td_mobilenumber_input);
    //address
    let address=address_input.value;
    const task_td_address=document.createElement("td");
    const task_td_address_input=document.createElement("textarea");
    task_td_address_input.type="text";
    task_td_address_input.cols='30';
    task_td_address_input.rows='3';
    task_td_address_input.value=address;
    task_td_address_input.setAttribute('readonly','readonly');
    task_td_address.appendChild(task_td_address_input);
    //email
    let email=email_input.value;
    const task_td_email=document.createElement("td");
    const task_td_email_input=document.createElement("input");
    task_td_email_input.type="email";
    task_td_email_input.value=email;
    task_td_email_input.setAttribute('readonly','readonly');
    task_td_email.appendChild(task_td_email_input);
    //edit
    const task_td_action=document.createElement("td");

    const task_edit_el=document.createElement("button");
    task_edit_el.classList.add('edit');
    task_edit_el.innerText="edit";
    task_td_action.appendChild(task_edit_el);
    task_edit_el.addEventListener("click",(e)=>{
        if(task_edit_el.innerText.toLowerCase()=='edit'){
            task_edit_el.innerText="Save";
            task_td_name_input.removeAttribute('readonly');
            task_td_fathername_input.removeAttribute('readonly');
            task_td_mobilenumber_input.removeAttribute('readonly');
            task_td_address_input.removeAttribute('readonly');
            task_td_email_input.removeAttribute('readonly');
            
        }
        else{
            task_edit_el.innerText="edit";
            task_td_name_input.setAttribute('readonly',"readonly");
            task_td_fathername_input.setAttribute('readonly',"readonly");
            task_td_mobilenumber_input.setAttribute('readonly',"readonly");
            task_td_address_input.setAttribute('readonly',"readonly");
            task_td_email_input.setAttribute('readonly',"readonly");
            
        }
    })
    // delete
    const task_delete_el=document.createElement("button");
    task_delete_el.classList.add('delete');
    task_delete_el.innerText="delete";
    task_td_action.appendChild(task_delete_el);
    task_delete_el.addEventListener('click',(e)=>{
        table_data_list.removeChild(task_tr);
    })
    
    task_tr.appendChild(task_td_name);
    task_tr.appendChild(task_td_fathername);
    task_tr.appendChild(task_td_mobilenumber);
    task_tr.appendChild(task_td_address);
    task_tr.appendChild(task_td_email);
    task_tr.appendChild(task_td_action);
    
    table_data_list.appendChild(task_tr);
    
})
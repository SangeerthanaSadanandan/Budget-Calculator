var family="";

function signup(){

    House_Num = h_num.value;
    Owner_Name = o_name.value;
    No_Members = no_members.value;
    Password = reg_pass.value;
    Re_password = re_pass.value;
    balance = 0; 
    if(House_Num=="" || Owner_Name=="" || No_Members=="" || Password=="" || Re_password==""){
        alert("Please fill all fields");
    }
    else{
        family={
            House_Num,
            Owner_Name,
            No_Members,
            Password,
            balance
        }
        
        if(House_Num in localStorage){
            alert("Account Already Exist");
        }
        else if(Password===Re_password){
            
            localStorage.setItem(House_Num,JSON.stringify(family));
            alert("Registered Successfully");
            window.location="index.html";
        }
        else{
            alert("Password didnt match");
            console.log(Password); 
            console.log(Re_password);
        }
    }
    
}

function Login(){
    HouseNum = hnum.value; 
    loginPassword =pass.value;
    if(HouseNum=="" || loginPassword==""){
        alert("Please Enter House number and Password")
    }
    else if(HouseNum in localStorage){
        family = JSON.parse(localStorage.getItem(HouseNum));
        if(family.Password==loginPassword){
            alert("Login Successfull");
            flag=1;
            sessionStorage.setItem('OName',family.Owner_Name);
            sessionStorage.setItem('hnum',family.House_Num);
            sessionStorage.setItem('nom',family.No_Members);
            sessionStorage.setItem('pas',family.Password);
            sessionStorage.setItem('balance',family.balance);
            window.location.href = "home.html";
        }
        else{
            alert("Incorrect Passsword");
        }
    }
    else{
        alert(`${HouseNum} is not present`);
    }
}


//home page

Owner_Name = sessionStorage.getItem('OName');
House_Num = sessionStorage.getItem('hnum');
No_Members = sessionStorage.getItem('nom');
Password = sessionStorage.getItem('pas');
balance = sessionStorage.getItem('balance');
family = JSON.parse(localStorage.getItem(House_Num));
getBal(balance);

    function Add(){
        
        var credit_type= c_type.value;
        var credit_money=parseFloat(c_money.value);
        if(credit_type=="" || credit_money==""){
            alert("Please Enter Description and Income")
        }
        else{
            balance = sessionStorage.getItem('balance');
            console.log(`Balance Before : ${balance}`);
            balance=parseFloat(balance)+credit_money;
            sessionStorage.setItem('balance',balance);
            console.log(balance);
            family={
                House_Num,
                Owner_Name,
                No_Members,
                Password,
                balance
            }
            localStorage.setItem(House_Num,JSON.stringify(family));
            getBal(balance);

            var table = document.getElementById("intable");

            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(2);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            // Add some text to the new cells:
            cell1.innerHTML = credit_type;
            cell2.innerHTML = credit_money;
            cell3.innerHTML = balance;

            
        }
    }
    function Ex(){
        var expense_type=ex_type.value;
        var expense_money=parseFloat(ex_money.value);
        if(expense_type=="" || expense_money==""){
            alert("Please Fill the Description and Expense...");
        }
        else{
            balance = sessionStorage.getItem('balance');
            balance=parseFloat(balance)-expense_money;
            sessionStorage.setItem('balance',balance);
            family={
                House_Num,
                Owner_Name,
                No_Members,
                Password,
                balance
            }
            localStorage.setItem(House_Num,JSON.stringify(family));
            getBal(balance);
            var table = document.getElementById("extable");

            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(2);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)

            // Add some text to the new cells:
            cell1.innerHTML = expense_type;
            cell2.innerHTML = expense_money;
            cell3.innerHTML = balance;
        }
}

function getBal(balance){
    
    if(balance>2000){
        bal.innerHTML=`<h3 style=" color :green"> Your Savings is : <p style="padding-top:10px">Rs. ${balance}/-</p> </h3>`;
        alt.innerHTML =``;
    }
    else{
            bal.innerHTML=`<h3 style=" color :red"> Your Savings is : <p style="padding-top:10px">Rs. ${balance}/-</p> </h3>`;
            alt.innerHTML =`<p style="color:red;">Hey ${Owner_Name}, please Control Your Expenditure......</p>`;
        }    
    }

    function Logout(){
        const response = confirm("Are you sure you want to Logout?");
        if(response){
            window.location="index.html";
        }
    }
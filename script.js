var form= document.getElementById('main');


form.addEventListener('submit', saveToLocalStorage);


function saveToLocalStorage(e){
    e.preventDefault();

    var emailId= document.getElementById('exampleInputEmail1').value;
    

    var password= document.getElementById('exampleInputPassword1').value;

    let myobj= {
        email: emailId,
        password: password
    };

    let myobj_string= JSON.stringify(myobj);

    
    

    localStorage.setItem('myobj',myobj_string);
    

    
}
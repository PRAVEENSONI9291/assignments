var form= document.getElementById('main');


form.addEventListener('submit', saveToLocalStorage);


function saveToLocalStorage(e){
    e.preventDefault();

    var emailId= document.getElementById('exampleInputEmail1').value;
    

    var password= document.getElementById('exampleInputPassword1').value;
    

    localStorage.setItem('email',emailId);
    localStorage.setItem('password',password);
}
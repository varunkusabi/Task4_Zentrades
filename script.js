function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Email validation
    let st=0;
    for(let i=0;i<username.length;i++){
        if(username[i]=='@' && st==0){
            st=1;
        }
        if(username[i]=='.' && st==1){
            st=2;
        }
    }
    if(st!=2){
        alert('Invalid email address!');
        return;
    }
    
    // Password validation   
    for(let i=0;i<password.length;i++){
        if(!((password[i]<='Z' && password[i]>='A') || (password[i]<='z' && password[i]>='a') || (password[i]=='@') || (password[i]<='9' && password[i]>='0') )){
            alert('Password should not contain any special character other than @ and must contain an uppercase letter and a number!');
            return;
        }
    }
    let cp=0,nm=0;
    for(let i=0;i<password.length;i++){
        if(password[i]<='9' && password[i]>='0'){
            nm=1;
        }
        if(password[i]<='Z' && password[i]>='A'){
            cp=1;
        }
    }
    if(cp==0 || nm==0){
        alert('Password should not contain any special character other than @ and must contain an uppercase letter and a number!');
        return;
    }

    if (password === 'SmartServTest@123') {
        window.location.href = "dashboard.html";
    } else {
        alert('Incorrect password. Please try again.');
    }
}

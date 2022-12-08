login=()=>{
    var form = document.getElementById('form')
    var username = document.getElementById('username').value
    var characters = ['!','@',"#","$","%","^","&","*","(",")","_","-","+","=","`","~","'",'"',"[","{","}","]",":",";","|",'/',"?","<",",",">","."]
    var characters_length = characters.length
    var username_length = username.length
    for(let i=0;i<username_length;i++){
        for(var j=0;j<characters_length;j++){
            if(username[i]==characters[j]){
                var check=1;
                break;
            }
            else{
                var check=0;
            }
        }
        if(check==1){
            break
        }
    }
    if(check==1){
        document.getElementById('error').innerHTML = 'invalid character '+characters[j]+' !'
        return false
    }
    else{
        document.getElementById('error').innerHTML=''
        return true
    }
}
password_check=()=>{
    var num = [0,1,2,3,4,5,6,7,8,9]
    var password = document.getElementById('password').value
    for(let i=0; i<password.length; i++){
        for(let j=0; j<num.length; j++){
            if(password[i]==num[j]){
                var check = 1
                break
            }
        }
        if(check==1){
            break
        }
    
    }
    if(check==1){
        document.getElementById('password_error').innerHTML=''
        return true
    }
    else{
        document.getElementById('password_error').innerHTML='at least one number needed !'
        return false
    }
}


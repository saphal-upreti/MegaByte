login=()=>{
    var characters = ['!','@',"#","$","%","^","&","*","(",")","_","-","+","=","`","~","'",'"',"[","{","}","]",":",";","|",'/',"?","<",",",">","."]
    var username=document.getElementById('username')
    var username_value = username.value
    /*for (let i=0;i<username_value.length;i++){
        for(let j=0;j<characters.length;j++){
            if(username_value[i]!=characters[j]){
                return true
            }
            else{
                return false
            }
            
        }
    }*/
    console.log(username_value)
}



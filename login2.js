function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if((username==="ananya"&&password==="ananya")||(username==="vinay"&&password==="vinay")||(username==="qwe"&&password==="qwe"))
    {
        alert("login successful");
        return false;
    }
    if(username!=="ananya"|| username!=="vinay"||username!=="qwe")
    {
        alert("username incorrect");
document.write('username incorrect');
    }
    if(password!=="ananya"|| password!=="vinay"||password!=="qwe")
    {
        alert("password incorrect");
        document.write('password incorrect');
    }
    
}
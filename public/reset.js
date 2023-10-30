document.getElementById("resetpass").addEventListener("submit", (e)=>{
    e.preventDefault();
    let reser={
     oldpassword : document.getElementById("oldpassword").value,
     newpassword : document.getElementById("newpassword").value
    }
    console.log(reser);

     try {
        fetch("http://localhost:8090/user/reset",{
        method: "PATCH",
        headers : {"Content-Type":"application/json"},
        body: JSON.stringify(reser)
        })
        .then((res)=> res.json)
        .then((data)=> console.log(data))
     } catch (error) {
        console.log(error.message)
     }
})
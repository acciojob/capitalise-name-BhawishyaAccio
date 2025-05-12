//your JS code here. If required.
let ans=document.getElementById("fname");
ans.addEventListener("blur",()=>
	{
        console.log("object")
		ans.value=ans.value.toUpperCase()
        console.log(ans.value)
	})
console.log(ans.value)

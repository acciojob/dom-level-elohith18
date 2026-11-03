//your JS code here. If required.
const res=document.getElementById("level")
        let val=res.parentElement
        let count=1
        while(val){
            count++
            val=val.parentElement
        }
        alert("The level of the element is:"+count)
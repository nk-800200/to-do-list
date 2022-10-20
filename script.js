function addtask(){
         let taskInput=document.getElementById("input"); 
         let task=taskInput.value;
         taskInput.value="";
         if(task!="")  
         {
            let webtask=localStorage.getItem("locoltask"); 
            let taskobj;
            if(webtask==null)  
            {
               taskobj=[];
            }
            else
            {
               taskobj=JSON.parse(webtask);  
            }
            taskobj.push(task);
            localStorage.setItem("locoltask",JSON.stringify(taskobj));  
            showtask();
         }
}
function showtask()
{
    let btn=document.getElementById("update");
    btn.style.display="none";
    let webtask=localStorage.getItem("locoltask");  
    let taskobj;
    if(webtask==null)    
    {
       taskobj=[];
    }
    else
    {
       taskobj=JSON.parse(webtask);  
    }
    let html="";
    let tasklist=document.getElementById("tasklistbox");  
    taskobj.forEach((item,index)=>{
            html+=`<div  class="task-row mt-3">
            <div class="d1">${item}</div>  
            <div class="d2"> 
               <i class="fa-solid fa-pen-to-square icons" id="icon" id="edit" onclick="Edit(${index})"></i>    
               <i class="fa-sharp fa-solid fa-trash text-danger icons" id="remove" onclick="Delete(${index})"></i>  
            </div> 
         </div>
         `;
    });
    tasklist.innerHTML=html;  
}
function Delete(currIndex)
{
    let webtask=localStorage.getItem("locoltask");    
    let taskobj;
    if(webtask==null)
    {
        taskobj=[];
    }
    else
    {
        taskobj=JSON.parse(webtask);
    }
    taskobj.splice(currIndex,1);    
    localStorage.setItem("locoltask",JSON.stringify(taskobj));  
    showtask();
}
function Edit(index)
{
    let addbtn=document.getElementById("add");
    let uptbtn=document.getElementById("update");  
    uptbtn.style.display="inline"; 
    addbtn.style.display="none"; 
    let input=document.getElementById("input");     
    let webtask=localStorage.getItem("locoltask");  
    let taskobj=JSON.parse(webtask);  
    input.value=taskobj[index];  
    let temp=document.getElementById("t");
    temp.value=index;
}
function Update()
{
   let input=document.getElementById("input");     
   let task=input.value;  
   let addbtn=document.getElementById("add");  
   let uptbtn=document.getElementById("update");  
   let InputTemp=document.getElementById("t");
   let index=InputTemp.value;
   addbtn.style.display="inline";  
   uptbtn.style.display="none";     
   input.value=""; 
   let webtask=localStorage.getItem("locoltask");  
   let taskobj=JSON.parse(webtask);  
   if(task!="")  
   {
     taskobj[index]=task;       
     localStorage.setItem("locoltask",JSON.stringify(taskobj));  
     showtask();
   }
}
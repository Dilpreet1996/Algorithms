window.onload=()=>
{
    
    document.getElementById("btn").style.visibility="hidden";
    
}
/*
 document.onkeydown=function(e)
 {
     if(event.keyCode==123)
     {
         return false;
     }
     if(e.ctrlKey && e.shiftKey && e.keyCode=='I'.charCodeAt(0))
     {
         return false;
     }
     if(e.ctrlKey && e.shiftKey && e.keyCode=='J'.charCodeAt(0))
     {
         return false;

     }
     if(e.ctrlKey &&  e.keyCode=='U'.charCodeAt(0))
     {
         return false;
         
     }
 }
 */

const questions=[
    
    {
        
        question:"what is 10+30 ?",
        options: ["21","20","30","40"],
        answer: "40"
    },
      {
        
        question:"what is 30-10 ?",
        options: ["2","20","30","25"],
        answer: "20"
    },
    {
        
        question:"what is the capital of Punjab?",
        options: ["Batala","Mohali","Chandigarh","Shimla"],
        answer: "Chandigarh"
    },
    {
        
        question:" Which of the following package is used for reading excel data?",
        options: ["xlsx","xlsc","read.sheet","All of the Mentioned"],
        answer: "xlsx"
    },
    {
        question:"Which of the following data is put into a formula to produce commonly accepted results?",
        options: ["Raw","processed","Sunchronized","All of the Mentioned"],
        answer: "processed"
    },
    {
        question:"Which of the following can be used to create sub–samples using a maximum dissimilarity approach ?",
        options: ["minDissim","maxDissim","inmazDissim","All of the Mentioned"],
        answer: "maxDissim"
    },
    {
        question:"Which of the following can be used to impute data sets based only on information in the training set. ?",
        options: ["postProcess","preProcess","inmazDissim","All of the Mentioned","process"],
        answer: "preProcess"
    },
    {
        question:"Which of the following can be used for banking industry ?",
        options: ["athenahealth","bankserve","bankingsol","All of the Mentioned"," cyber threats"],
        answer: "ankserve"
    },
    {
        question:"A service provider reselling an ____ may have the option to offer one module to customize the information.",
        options: ["CaaS","Aaas","Paas","Saas"],
        answer: "Saas"
    },
    {
        question:" _________ as a Service is a cloud computing infrastructure that creates a development environment upon which applications may be build.",
        options: ["Infrastructure","Service","Platform","All of the mentioned"],
        answer: "Platform"
    }
];

    let question_number=0;
let correct=0;
document.addEventListener("DOMContentLoaded", ()=>{

    
    load_question();
    console.log(questions.length);
    totQ();
    

    
});
function load_question()
{
    if(question_number<questions.length)
    {
        document.querySelector("#question").innerHTML=questions[question_number].question;
        const options=document.querySelector("#options");
        options.innerHTML="";
        for(const option of questions[question_number].options)
            {
                console.log(option);
               
            
                         options.innerHTML += '<button class="option">'+option+'</button>';
            }
            display();

    }
    else
    {
        
        


        
        document.getElementById("btn").style.visibility="visible";
            
                
            
        
        
      
     
        
        
        
        
       
    }
    
  
}
function display()
{
    document.querySelectorAll(".option").forEach(option=>{
        option.onclick=()=>{
            
            if(question_number<=questions.length)
            {

            
            if(option.textContent== questions[question_number].answer)
                {
                  
                  correct++;
                  
                 
                
                    
                    corQ();
                    
                }
            }
            else
            {
                alert("All the questions are over");
            }
                
              
               
               
                question_number++;
                load_question();
            
        }
        
    });
}
function totQ()
{
   
    tq.innerHTML=questions.length;
}
function corQ()
{
    cq.innerHTML=correct;
}
function clk()
{
    question_number=0;
    correct=0;
    load_question(); 
    cq.innerHTML="";
    document.getElementById("btn").style.visibility="hidden";
}
var data="";
var enteredvalues="";
var integers="";
function go1()
{
  
  
   
  


if(data=="")
{
    alert("Select either Sorting or Searching Algorithm and Make sure you have entered elements");
}
else if(data=="BubbleSort")
{
 
    bub_sort();
}
else if(data=="SelectionSort")
{
    
    selection_sort();
}

}

function bs()
{
    data="BubbleSort";
    alert("You have selected Bubble sort Algorithm");
 
}
function sc()
{
    data="SelectionSort";
    alert("You have selected Bubble sort Algorithm");
}

 function selection_sort()
 {
     enteredvalues=document.getElementById("enter").value;
     var a1=enteredvalues.split(",");
     var integers=new Array();
    
    

   
    
    for(let i=0;i<a1.length;i++)
    {
        integers[i]=a1[i];
    
    }
     var integers1=integers.map(Number);
     console.log(integers1);
     for(let i=0;i<integers1.length-1;i++)
     {
         var min_idx=i;
         for(let j=i+1;j<integers1.length;j++)
         {
             if(integers1[j]<integers1[min_idx])
             {
                min_idx=j;
                var temp=integers1[min_idx];
                integers1[min_idx]=integers1[i];
                integers1[i]=temp;
             }
         }
     }
     for(var i=0;i<integers1.length;++i)
     {
            console.log(integers1[i]);
     }
  document.getElementById('answer').innerHTML=integers1+" ";
 }

function bub_sort()
{
   
    enteredvalues= document.getElementById("enter").value;
    
var a1=enteredvalues.split(",");
    

    var integers=new Array();
    
    for(let i=0;i<a1.length;i++)
    {
        integers[i]=a1[i];
    
    }
    let c=integers.map(Number);
    console.log(integers+"--"+c)
   
    for(let i=0;i<c.length;i++)
    {
        for(let j=1;j<c.length;j++)
        {
            if(c[j-1]>c[j])
            {
                var temp=c[j-1];
                c[j-1]=c[j];
                c[j]=temp;
            }
        }
    }
    for(var i=0;i<c.length;i++)
    {
        
        console.log(c[i]);
    }
    document.getElementById('answer').innerHTML=c+" ";
    
   
 
   
   
}


    

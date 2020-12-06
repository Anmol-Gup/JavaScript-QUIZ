function myfun()
{
    let count=0;
    let q1=document.querySelectorAll('input[name="output"]')
    let q2=document.querySelectorAll('input[name="comment"]')
    let q3=document.querySelectorAll('input[name="ext"]')
    let q4=document.querySelectorAll('input[name="data"]')
    let q5=document.querySelectorAll('input[name="false"]')
    
        for(let i of q1)
        {
            if(i.checked)
            {
                if(i.value=='php')
                {
                    count++;
                    break;
                }
            }   
        }
    
        for(let i of q2)
        {
            if(i.checked)
            {
                if(i.value=='both')
                {
                    count++;
                    break;
                }   
            }
        }
        
        for(let i of q3)
        {
            if(i.checked)
            {
                if(i.value=='out')
                {
                    count++;
                    break;                        
                }    
            }
        }
        for(let i of q4)
        {
            if(i.checked)
            {
                if(i.value=='$')
                {
                    count++;
                    break;
                }   
            }
        }
        for(let i of q5)
        {
            if(i.checked)
            {
                if(i.value=='A')
                {
                    count++;
                    break;
                }
            }  
        }

        if(count==5)
        {
            swal("Good job!", "You clicked the button!", "success");
            swal({
                title: "Well Done!",
                text: "Congrats !! Your Score is "+count,
                icon: "success",
                button: "OK",
            });
        }
        else if(count==4)
        {
            swal({
                title: "Good Job!",
                text: "Your Score is "+count+'.',
                icon: "success",
                button: "Try Again",
            });
        }
        else if(count==3)
        {
            swal({
                title: "Nice Try!",
                text: "Your Score is "+count+'.',
                icon: "success",
                button: "Try Again",
            });
        }
        else if(count>=1 && count<=2)
        {
            swal({
                title: "Try Again!",
                text: "Your Score is "+count+'.',
                icon: "warning",
                button: "Try Again",
            });
        }
        else
        {
            swal({
                title: "Oops!",
                text: "Your Score is "+count+'.',
                icon: "error",
                button: "Try Again",
            });
        }
};

function myfun()
{
    let count=0;
    let q1=document.querySelectorAll('input[name="none"]')
    let q2=document.querySelectorAll('input[name="main"]')
    let q3=document.querySelectorAll('input[name="ext"]')
    let q4=document.querySelectorAll('input[name="string"]')
    let q5=document.querySelectorAll('input[name="true"]')
    
        for(let i of q1)
        {
            if(i.checked)
            {
                if(i.value=='none')
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
                if(i.value=='main')
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
                if(i.value=='c')
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
                if(i.value=='string')
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
                if(i.value=='true')
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

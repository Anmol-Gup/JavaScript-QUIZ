function myfun()
{
    let count=0;
    let q1=document.querySelectorAll('input[name="css"]')
    let q2=document.querySelectorAll('input[name="link"]')
    let q3=document.querySelectorAll('input[name="style"]')
    let q4=document.querySelectorAll('input[name="style2"]')
    let q5=document.querySelectorAll('input[name="comment"]')
    
        for(let i of q1)
        {
            if(i.checked)
            {
                if(i.value=='css')
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
                if(i.value=='link')
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
                if(i.value=='style')
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
                if(i.value=='style2')
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
                if(i.value=='comment')
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

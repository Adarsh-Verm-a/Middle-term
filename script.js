        document.querySelector(".mt").addEventListener("click", ()=>{
            let a = document.querySelector(".a").value;
            let b = document.querySelector(".b").value;
            let c = document.querySelector(".c").value;
            let middleTerm1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
        let middleTerm2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);  
        console.log(-middleTerm1);
        console.log(-middleTerm2);   
        document.querySelector(".result1").value= (-middleTerm1) +"+"+ (-middleTerm2)+"="+b;  
        document.querySelector(".result2").value= (-middleTerm1) +"*"+ (-middleTerm2)+"="+a*c;  

        });
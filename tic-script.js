        let r11=document.getElementById("r11");
        let r12=document.getElementById("r12");
        let r13=document.getElementById("r13");
        let r21=document.getElementById("r21");
        let r22=document.getElementById("r22");
        let r23=document.getElementById("r23");
        let r31=document.getElementById("r31");
        let r32=document.getElementById("r32");
        let r33=document.getElementById("r33");
        let statement=document.getElementById("display");

        let player=0;
        r11.addEventListener("click",function(){
            if(player===0){
                if(r11.value===""){
                    r11.value="O";
                    player=1;
                    checkwin();
                }
                
            }
            else{
                if(r11.value===""){
                    r11.value="X";
                    player=0;
                    checkwin();
                }
            }
        });

        r12.addEventListener("click",function(){
            if(player===0){
                if(r12.value===""){
                r12.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r12.value===""){
                r12.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r13.addEventListener("click",function(){
            if(player===0){
                if(r13.value===""){
                r13.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r13.value===""){
                r13.value="X";
                player=0;
                checkwin();
                }
            }
            
        });
        
        r21.addEventListener("click",function(){
            if(player===0){
                if(r21.value===""){
                r21.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r21.value===""){
                r21.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r22.addEventListener("click",function(){
            if(player===0){
                if(r22.value===""){
                r22.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r22.value===""){
                r22.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r23.addEventListener("click",function(){
            if(player===0){
                if(r23.value===""){
                r23.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r23.value===""){
                r23.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r31.addEventListener("click",function(){
            if(player===0){
                if(r31.value===""){
                r31.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r31.value===""){
                r31.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r32.addEventListener("click",function(){
            if(player===0){
                if(r32.value===""){
                r32.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r32.value===""){
                r32.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        r33.addEventListener("click",function(){
            if(player===0){
                if(r33.value===""){
                r33.value="O";
                player=1;
                checkwin();
                }
            }
            else{
                if(r33.value===""){
                r33.value="X";
                player=0;
                checkwin();
                }
            }
            
        });

        document.getElementById("restart").addEventListener("click",function(){
            r11.value="";
            r12.value="";
            r13.value="";
            r21.value="";
            r22.value="";
            r23.value="";
            r31.value="";
            r32.value="";
            r33.value="";
            player=0;
            document.getElementById("display").innerHTML="Start with Player 'O'";
            let check=document.getElementsByTagName("input");
            for(let i=0;i<check.length;i++){
                check[i].disabled = false;
            }
        });

        function gameover(){
            let check=document.getElementsByTagName("input");
            for(let i=0;i<check.length;i++){
                check[i].disabled = true;
            }
        };

        function checkwin(){
            //one
            if((r11.value===r12.value && r11.value===r13.value) && r11.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r11.value===r12.value && r11.value===r13.value) && r11.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //two
            else if((r11.value===r21.value && r11.value===r31.value) && r11.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r11.value===r21.value && r11.value===r31.value) && r11.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //three
            else if((r11.value===r22.value && r11.value===r33.value) && r11.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r11.value===r22.value && r11.value===r33.value) && r11.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //four
            else if((r12.value===r22.value && r12.value===r32.value) && r12.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r12.value===r22.value && r12.value===r32.value) && r12.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //five
            else if((r13.value===r23.value && r13.value===r33.value) && r13.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r13.value===r23.value && r13.value===r33.value) && r13.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //six
            else if((r21.value===r22.value && r21.value===r23.value) && r21.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r21.value===r22.value && r21.value===r23.value) && r21.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //seven
            else if((r31.value===r32.value && r31.value===r33.value) && r31.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r31.value===r32.value && r31.value===r33.value) && r31.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
            //eight
            else if((r31.value===r22.value && r31.value===r13.value) && r31.value==="O"){
                document.getElementById("display").innerHTML="Player O won";
                gameover();
            }
            else if((r31.value===r22.value && r31.value===r13.value) && r31.value==="X"){
                document.getElementById("display").innerHTML="Player X won";
                gameover();
            }
        } 
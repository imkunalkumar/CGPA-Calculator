function calc()
            {
			var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,n7=0,n8=0;
                 n1 = parseFloat(document.getElementById('n1').value);
                 n2 = parseFloat(document.getElementById('n2').value);
                 n3 = parseFloat(document.getElementById('n3').value);
                 n4 = parseFloat(document.getElementById('n4').value);
				 n5 = parseFloat(document.getElementById('n5').value);
                
				var oper = document.getElementById('dept').value;
                
                if(oper === 'c')
                {
                    var res=((n1*24)+(n2*26)+(n3*24)+(n4*24)+(n5*23))/120;
				document.getElementById('result').value = res;
                }
                
                if(oper === 'e')
                {
                    var res=((n1*24)+(n2*26)+(n3*24)+(n4*24)+(n5*23))/120;
				document.getElementById('result').value = res;
                }
                
                if(oper === 'ci')
                {
                    var res=((n1*24)+(n2*26)+(n3*24)+(n4*24)+(n5*23))/120;
				document.getElementById('result').value = res;
                }
                
                if(oper === 'p')
                {
                    var res=((n1*24)+(n2*26)+(n3*24)+(n4*24)+(n5*23))/120;
				document.getElementById('result').value = res;
                }
				  
            }

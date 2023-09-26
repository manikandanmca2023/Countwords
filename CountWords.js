var paragarph="Photography is a process that helps in defining the procedure to create stationary or moving pictures using photographic lens in a camera. It works by recording rays on a sensitive medium that can be an electronic sensor, or a photographic film."
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')

paragarph=paragarph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){//its code for counting which word accure highest time;
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}
		}
		
		newarray.push([paragarph[i],count]);
		count=1;
	}
}

for(let k=0;k<newarray.length;k++){//its code for decending the array based on count
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var textarray=newarray.slice(0,5);
var text=""

for(let z=0;z<textarray.length;z++){//print the top three words along with count;
	console.log(textarray[z]);
	text=text+"<h1>"+textarray[z][0]+"  :  "  +textarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;
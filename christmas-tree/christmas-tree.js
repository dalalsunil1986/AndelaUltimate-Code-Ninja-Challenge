let space = "";
for(i=1;i<=5;i++){
  space="";
  for(j=i; j<5; j++){
    space+=" ";
  }

  for(k=0; k<(i*2)-1; k++){
     space+= '*';
  }
  console.log(space);
}
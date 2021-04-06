//code challenge one 
function avg(arrayOfNum){
    let result=0;
    for (let i=0; i<arrayOfNum.length;i++)
    {
        result=result+arrayOfNum[i];
      
    }
    console.log(result/arrayOfNum.length);
    }
    avg([8,2,2,4]);
//code challenge two 
function addDashes(arrayOfWords){
    const newString=null;
    newString=arrayOfWords.join('-');
    console.log(newString);
    }
    addDashes(['test1', 'test2', 'test3']);
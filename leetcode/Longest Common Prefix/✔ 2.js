const longestCommonPrefix =(strs)=> {
  if(strs===0) return '';
  strs.sort((a,b)=>b.length - a.length);
  const shortest = strs.pop();
  let i=0;
  for(; i<=shortest.length; i+=1){
    const prefix = shortest.substring(0,i+1);
    if(!strs.every(s=>s.startsWith(prefix))) break;
  }
  return shortest.substring(0,i);
  
};

console.log(longestCommonPrefix(["flo","flo","flower"]))
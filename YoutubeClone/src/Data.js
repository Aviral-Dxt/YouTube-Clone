export const API_KEY= 'AIzaSyDuZVRirvu44rmjCxByJkpTRtwoKQ-pN3Q';

  export const  view_count_valueConverter = (value)=>{
        
    if(value>=1000000)
    {
      return  Math.floor(value/1000000)+"M"
    }
    else if(value>10000)
    {
      return  Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }

 }

function App(){

  let b=921.48;let x=[{d:"mon",a:17.45},{d:"tue",a:34.91},{d:"wed",a:52.36},{d:"thu",a:31.07},{d:"fri",a:23.39},{d:"sat",a:43.28},{d:"sun",a:25.48}];let m=0;for(let i=0;i<x.length;i++){if(x[i].a>m){m=x[i].a}}
  
  let t=0;let y="";let k=[];
  for(let j=0;j<x.length;j++){t=x[j].a/m*150;k.push(<div className="ff"><div className="gg" style={{height:t+"px",background:x[j].a===m?"hsl(186,34%,60%)":"hsl(10,79%,65%)"}}></div><p>{x[j].d}</p></div>)} 

  return(<div className="aa"><div className="bb"><div><p>My balance</p><h2>${b}</h2></div><div className="cc"></div></div><div className="dd"><h3>Spending - Last 7 days</h3><div className="ee">{k}</div><hr/><div className="hh"><div><p>Total this month</p><h2>$478.33</h2></div><div className="ii"><b>+2.4%</b><p>from last month</p></div></div></div></div>)
}

export default App

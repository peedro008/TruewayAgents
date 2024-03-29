import { useEffect, useState } from "react";
import axios from "axios"

function ProducerSales ( {aboutProps ,google}) {
  const [chart, setChart] = useState(null);
  const [modify, setModify]= useState([])
  const [quotes, setQuotes]= useState([])
  const [dato, setDato]= useState([])
  const [year, setYear] = useState([])
  const [showLoading, setShowLoading] = useState(true)
  let timer1 = setTimeout(() => setShowLoading(true), 1000)
  
  let userId = aboutProps
  
  useEffect (()=>{
      
      
    axios.get(`https://www.truewayagentbackend.com/getStatus`)
    .then(function(response){
        let paz = response.data

        setModify(paz.filter(e=>e.UserId==userId))
    })
    .catch(error=>{
      console.log(error)  
    })
},[])

useEffect (()=>{
    axios.get(`https://www.truewayagentbackend.com/producerQuotes?UserId=${userId}`)
    .then(function(response){
        setQuotes(response.data)
       
        
        
    })
    .catch(error=>{
      console.log(error)  
    })
},[userId])

useEffect(()=>{
    
    const date =  new Date()
    const DATE =
    date.getFullYear() + ( (date.getMonth() + 1)>9?"-":"-0" )+ (date.getMonth() + 1)+"-" + date.getDate()
    const Ymodify = modify.filter(e=>e.date.substring(0,4)==DATE.substring(0,4))
    const Yquotes = quotes.filter(e=>e.date.substring(0,4)==DATE.substring(0,4))
    let m0 = 0
    let m1 = 0
    let m2 = 0
    let m3 = 0
    let m4 = 0
    let m5 = 0
    let m6 = 0
    let m7 = 0
    let m8 = 0
    let m9 = 0
    let m10 = 0
    let m11 = 0
    let pm0 = 0
    let pm1 = 0
    let pm2 = 0
    let pm3 = 0
    let pm4 = 0
    let pm5 = 0
    let pm6 = 0
    let pm7 = 0
    let pm8 = 0
    let pm9 = 0
    let pm10 = 0
    let pm11 = 0
   
    Ymodify.map((e)=>{
        if(e.date.substring(5,7)=="01"){
           if(e.Status=="Sold"){
               m0=m0+1
           }
        } 
        else if(e.date.substring(5,7)=="02"){
            if(e.Status=="Sold"){
                m1=m1+1
            }
        } 
        else if(e.date.substring(5,7)=="03"){
            if(e.Status=="Sold"){
                m2=m2+1
            }
        } 
         else if(e.date.substring(5,7)=="04"){
            if(e.Status=="Sold"){
                m3=m3+1
            }
        } 
         else if(e.date.substring(5,7)=="05"){
            if(e.Status=="Sold"){
                m4=m4+1
            }
        } 
         else if(e.date.substring(5,7)=="06"){
            if(e.Status=="Sold"){
                m5=m5+1
            }
        } 
        else if(e.date.substring(5,7)=="07"){
            if(e.Status=="Sold"){
                m6=m6+1
            }
        }
        else if(e.date.substring(5,7)=="08"){
            if(e.Status=="Sold"){
                m7=m7+1
            }
        }
        else if(e.date.substring(5,7)=="09"){
            if(e.Status=="Sold"){
                m8=m8+1
            }
        }
        else if(e.date.substring(5,7)=="10"){
            if(e.Status=="Sold"){
                m9=m9+1
            }
        }
        else if(e.date.substring(5,7)=="11"){
            if(e.Status=="Sold"){
                m10=m10+1
            }
        }
        else if(e.date.substring(5,7)=="12"){
            if(e.Status=="Sold"){
                m11=m11+1
            }
        }
    })
    Yquotes.map((e)=>{
        if(e.date.substring(5,7)=="01"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                pm0=pm0+1
            }
         } 
         else if(e.date.substring(5,7)=="02"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm1=pm1+1
             }
         } 
         else if(e.date.substring(5,7)=="03"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm2=pm2+1
             }
         } 
          else if(e.date.substring(5,7)=="04"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm3=pm3+1
             }
         } 
          else if(e.date.substring(5,7)=="05"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm4=pm4+1
             }
         } 
          else if(e.date.substring(5,7)=="06"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm5=pm5+1
             }
         } 
         else if(e.date.substring(5,7)=="07"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm6=pm6+1
             }
         }
         else if(e.date.substring(5,7)=="08"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm7=pm7+1
             }
         }
         else if(e.date.substring(5,7)=="09"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm8=pm8+1
             }
         }
         else if(e.date.substring(5,7)=="10"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm9=pm9+1
             }
         }
         else if(e.date.substring(5,7)=="11"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm10=pm10+1
             }
         }
         else if(e.date.substring(5,7)=="12"){
            if(e.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status=="Quoted"){
                 pm11=pm11+1
             }
         }
    }) 
    setYear([[m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11],[pm0,pm1,pm2,pm3,pm4,pm5,pm6,pm7,pm8,pm9,pm10,pm11]])

},[quotes, modify])
useEffect(()=>{
    if(year[0]){
    let pes = []
        console.log(year)
    
      year[0].map((e, index)=>{
        
        pes.push([`${index+1}`, e , year[1][index]])
      })
      setDato(pes)}
  }, [year])

  useEffect(() => {
    setTimeout(()=>{
    if (google && !chart&& dato.length) {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Sold Quotes', "color:#6F52ED");
      data.addColumn('number', 'Unsold Quotes',"color:#FF7A00");
      data.addRows(dato);
      
      // Set chart options
      var options = {'title':'Quotes sold per month',
                     'width':800,
                     "height": 220,
                     fontSize:12,
                     
                     titleTextStyle: {
                        marginBottom: "20px",
                        fontName: "Gilroy-Regular",
                        fontSize: "16", 
                        marginLeft:"-10px"
                    },
                     "colors": ["#6F52ED","#FF7A00"],
                     backgroundColor:"#EBEFF2",
                     bar: { groupWidth: "20%"}

                    };
      
      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.ColumnChart(document.getElementById('producerSales'));
      newChart.draw(data, options);
      
      setChart(newChart);
    }}, 1000)
  }, [ chart, dato]);
  
  return (
    <>
      {!google && <p>asssad</p>}
     
      <div id="producerSales" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default ProducerSales;



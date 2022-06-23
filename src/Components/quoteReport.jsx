
import React from "react";
import "../Css/css.css"

import { NavLink } from "react-router-dom";
import  ModifyModal  from "../Controllers/modifyModal";
import { BsChevronLeft, BsInfoCircle } from "react-icons/bs";


import Select from 'react-select'
import close from "../assets/close.svg";

import {AiOutlineDelete, AiOutlineCloseCircle} from "react-icons/ai"

import Modal from 'react-responsive-modal';

const QuoteReportComponent=({
    handleDelete,
deleteClient,
handleDeleteModal,
filterSubmit,
closeCloud,
modify,
categories,
companies,
clients,
dealers,
locations,
filterCheck,
setFilterCheck,
filterValues,
setFilterValues,
userRole,
open,
deleteConf,
deletedOne,
open1,
setDeleteConf,
setDeletedOne,
setOpen1,
setOpen,
quote,
quotes,
quotesFil,
pes,
openFilter,
setQuote,
setQuotes,
setQuotesFil,
setPes,
setOpenFilter,
columns,
onCloseModal,
onCloseModal1,
producers
})=>{
    
    return(
        <div className="genericDiv1">
             
             <div className="genericHeader">
                <p className="genericTitle">Quote reports</p>
                
            </div>
         <div className="REPcontrol">
        
         <div className="REPDate">
             
          
           
         {
                 filterValues.dateFrom&&filterValues.dateTo&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">From:&nbsp;<strong>{filterValues.dateFrom}</strong></p>
                     <p className="cloudFilterText"style={{marginLeft:"5px"}}>To:&nbsp;<strong>{filterValues.dateTo}</strong></p>
                     
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,dateFrom:null, dateTo:null})}}/>
                     </div>
             }
             {
                 filterValues.ClientId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Client name:{clients.find(c => c.id ==  filterValues.ClientId).name}
                     
                     </p>
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,ClientId:null})}}/>
                     </div>
             }
             {
                 filterValues.ClientTel&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Client phone:{clients.find(c => c.id ==  filterValues.ClientTel).tel}
                     </p>
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,ClientTel:null})}}/>
                     </div>
             }
             {
                 filterValues.SoldBy&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Sold By:{producers.find(c => c.id ==  filterValues.ProducerId)?.name}
                     </p>
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,SoldBy:null})}}/>
                     </div>
             }
              {
                 filterValues.ProducerId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Producer name:{producers.find(c => c.id ==  filterValues.ProducerId)?.name}
                    </p>
                    <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,ProducerId:null})}}/>
                    </div>
             }
              {
                 filterValues.LocationId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Location:{locations.find(c => c.id ==  filterValues.LocationId)?.name}
                     </p>
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,LocationId:null})}}/>
                     </div>
             }
              {
                 filterValues.CompanyId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Company:{companies.find(c => c.id ==  filterValues.CompanyId)?.name}
                     </p> 
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,CompanyId:null})}}/>
                     </div>
             }
               {
                 filterValues.CategoryId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Category:{categories.find(c => c.id ==  filterValues.CategoryId)?.name}
                     </p>
                     <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,CategoryId:null})}}/>
                     </div>
             }
              {
                 filterValues.Status&&
                 <div className="cloudFilter"><p className="cloudFilterText">Status:{filterValues.Status}
                </p>
                <img src={close} style={{marginLeft:"5px"}} onClick={()=>{closeCloud({...filterValues,Status:null})}}/>
                </div>
             }
              {
                 filterValues.DealerId&&
                 <div className="cloudFilter">
                     <p className="cloudFilterText">Location:{dealers.find(c => c.id ==  filterValues.DealerId)?.name}
                     </p>
                     <img src={close} style={{marginLeft:"5px"}}onClick={()=>{closeCloud({...filterValues,DealerId:null})}}/>
                     </div>
             }
            
        </div>
        <div className="FilterButtoN" onClick={()=>setOpenFilter(!openFilter)}/>
         

                </div>
           <table class="table1">
      
        <tbody>
            <tr>
            <th scope="col" className="column1"><p   className="REPtype">&nbsp;</p></th>
            <th scope="col" className="column1"><p   className="REPtype">&nbsp;</p></th>
            {columns.clientName&&<th scope="col" className="column1"><p   className="REPtype">Client name</p></th>}
            {columns.clientEmail&&<th scope="col" className="column1"><p className="REPtype">Client E-mail</p></th>}
            {columns.clienTel&&<th scope="col" className="column1"><p className="REPtype">Client phone</p></th>}
            {columns.category&&<th scope="col" className="column1"><p className="REPtype">Category</p></th>}
            {columns.CompanyId&&<th scope="col" className="column1"><p className="REPtype">Company</p></th>}
            {columns.ProducerId&&<th scope="col" className="column1"><p className="REPtype">Producer</p></th>}
            <th scope="col" className="column1"><p className="REPtype">Total</p></th>
            {columns.bound&&<th scope="col" className="column1"><p className="REPtype">Status</p></th>}
            {<th scope="col" className="column1"><p className="REPtype">Date</p></th>}
            {<th scope="col" className="column1"><p className="REPtype">Time</p></th>}
            {columns.down&&<th scope="col" className="column1"><p className="REPtype">Down Payments</p></th>}
            {columns.monthlyPayment&&<th scope="col" className="column1"><p className="REPtype">Monthly Payments</p></th>}
            {columns.dealer&&<th scope="col" className="column1"><p className="REPtype">Dealer Name</p></th>}
            {columns.NSD&&<th scope="col" className="column1"><p className="REPtype">NSD</p></th>}
            {columns.PIP&&<th scope="col" className="column1"><p className="REPtype">PIP</p></th>}
            {columns.MVR&&<th scope="col" className="column1"><p className="REPtype">MVR</p></th>}
            {columns.location&&<th scope="col" className="column1"><p className="REPtype">Location</p></th>}
            {userRole!=="Producer"&&<th scope="col" className="column1"><p   className="REPtype">Delete Quote</p></th>
                }
           
           
           
            </tr>
            
        
            {
                quotesFil.length&&
               quotesFil.sort(function(a,b){return b.id-a.id}).map((e)=>{
                   
                   return (
                        <tr>
                            <td className="ClientName" scope="row"><NavLink style={{display:"flex", justifyContent:"center",textDecoration: "none"}} to={{
                    pathname:("/report/payment/details"),
                    aboutProps:e.id
                }}><BsInfoCircle size={"20px"} /></NavLink></td>
                            <td className="ClientName" scope="row"><div className="editIcon" onClick={()=>modify(e)}></div></td>
                            {columns.clientName&&<td className="ClientName" scope="row"><NavLink style={{textDecoration: 'none', color:"#000"}} to={{pathname:"/report/clientedit",aboutProps:e.Client}}>{e.Client.name}</NavLink></td>}
                            {columns.clientEmail&&<td className="row1" scope="row"><NavLink style={{textDecoration: 'none', color:"#000"}} to={{pathname:"/report/clientedit",aboutProps:e.Client}}>{e.Client.email}</NavLink></td>}
                            {columns.clienTel&&<td className="row1" scope="row"><NavLink style={{textDecoration: 'none', color:"#000"}} to={{pathname:"/report/clientedit",aboutProps:e.Client}}>{e.Client.tel}</NavLink></td>}
                            {columns.category&&<td className="row1" scope="row"><NavLink style={{textDecoration: 'none', color:"#000"}} to={{pathname:"/report/quote",aboutProps:{ID:e.id}}}>{e.Category.name}</NavLink></td>}
                            {columns.CompanyId&&<td className="row1" scope="row">{e.Company.name}</td>}
                            {columns.ProducerId&&<td className="row1" scope="row">{e.User.name}</td>}
                            <td className="row1" scope="row">${parseFloat(e.down)+parseFloat(e.PIPvalue)+parseFloat(e.NSDvalue)+parseFloat(e.MVRvalue)}</td>
                            {columns.bound&&<td className="row1" scope="row">{e.QuoteStatuses?.sort(function (a, b) {return b.id - a.id})[0]?.Status}</td>}
                            <td className="row1" scope="row">{e.date}</td>
                            <td className="row1" scope="row">{e.time.substring(11,16)}</td>
                            {columns.down&&<td className="row1" scope="row">${e.down}</td>}
                            {columns.monthlyPayment&&<td className="row1" scope="row">${e.monthlyPayment}</td>}
                            {columns.dealer&&<td className="row1" scope="row">{e.Dealer?e.Dealer.name:"false"}</td>}
                            {columns.NSD&&<td className="row1" scope="row">${e.NSDvalue}</td>}
                            {columns.PIP&&<td className="row1" scope="row">${e.PIPvalue}</td>}
                            {columns.MVR&&<td className="row1" scope="row">${e.MVRvalue}</td>}
                            {columns.location&&<td className="row1" scope="row">{e.Location.name}</td>}
                            {userRole!=="Producer"&&
                                     <td className="ClientName" scope="row"  >
                                          <div style={{height:"auto",display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center" }}>
                                            <AiOutlineDelete className='deleteIcon' size={"20px"} onClick={()=>{handleDelete(e.id)}}/>
                                            </div>
                                        </td>
                                }
                           </tr>)
               })
               
               
             
    
       






            }

        </tbody>
        </table>
       
<BsChevronLeft color="grey" style={{minWidth:"30px", minHeight:"30px", position:"fixed",zIndex:9, left:"80px",top:"17px", alignSelf:"flex-start"}} onClick={()=>window.history.go(-1)}/>


           






{open&&

    <ModifyModal open={open} onCloseModal={onCloseModal} quoteM={quote}/>

      }


    {openFilter&&  
        <div className="FilterCom">
             <div className="FilterComTitleD">
                <p className="FilterComTitle" >Search</p> 
                <AiOutlineCloseCircle size="20px" style={{color:"#787d84", cursor:"pointer"}} onClick={()=>setOpenFilter(false)}/>
            </div>
            <divider style={{backgroundColor:"#EBEFF2", height:"1px", borderWidth:"0px",  width:"300px" }}/>
           
           
            <div className="FilterComRow">
                <input type={"checkbox"} checked={filterCheck.date} onChange={(e)=>setFilterCheck({
                    date:!filterCheck.date,
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    CompanyId:false,
                    DealerId:false,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText">Date</p>
            </div>
            {
                filterCheck.date&&
                <>
                <p className="REPtype"style={{marginLeft:"15px",color:"black", fontWeight:700}}>From</p>
                <div className="FilterComRow"><input type="date"  onChange={(e)=>setFilterValues({...filterValues, dateFrom:e.target.value})}  className="PAYselect" style={{border:"1px solid #D6E4EC", padding:"5px"}}/></div>
                <p className="REPtype" style={{marginLeft:"15px",color:"black", fontWeight:700}}>to</p>
                <div className="FilterComRow"><input type="date"  onChange={(e)=>setFilterValues({...filterValues, dateTo:e.target.value})}  className="PAYselect" style={{border:"1px solid #D6E4EC", padding:"5px"}}/></div>
                </>
            }
            
            
            <div className="FilterComRow">
                <input type={"checkbox"} checked={filterCheck.ClientId} onChange={(e)=>setFilterCheck({
                    ClientId:!filterCheck.ClientId,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    CompanyId:false,
                    DealerId:false,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText">Client Name</p>
            </div>
            {
                filterCheck.ClientId&&
                <div className="FilterComRow"><Select options={clients.map(e=>({value:e.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, ClientId:e.value})}  className="PAYselect"/></div>
            }
             <div className="FilterComRow">
                <input type={"checkbox"} checked={filterCheck.ClientTel} onChange={(e)=>setFilterCheck({
                    ClientId:false,
                    ClientTel:!filterCheck.ClientTel,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    CompanyId:false,
                    DealerId:false,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText">Client phone</p>
            </div>
            {
                filterCheck.ClientTel&&
                <div className="FilterComRow"><Select options={clients.map(e=>({value:e.id,label:e.tel}))} onChange={(e)=>setFilterValues({...filterValues, ClientTel:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"} checked={filterCheck.SoldBy} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:!filterCheck.SoldBy,
                    ProducerId:false,
                    LocationId:false,
                    DealerId:false,
                    CompanyId:false,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText" >Sold by</p>
            </div>
            {
                filterCheck.SoldBy&&
                <div className="FilterComRow"><Select options={producers.map(e=>({value:e.User.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, SoldBy:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"}checked={filterCheck.ProducerId} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:!filterCheck.ProducerId,
                    LocationId:false,
                    CompanyId:false,
                    DealerId:false,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText">Producer Name</p>
            </div>
            {
                filterCheck.ProducerId&&
                <div className="FilterComRow"><Select options={producers.map(e=>({value:e.UserId,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, ProducerId:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"}checked={filterCheck.LocationId} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:!filterCheck.LocationId,
                    CompanyId:false,
                    CategoryId:false,
                    DealerId:false,
                    Status:false})}/>
                <p className="FilterComText">Location</p>
            </div>
            {
                filterCheck.LocationId&&
                <div className="FilterComRow"><Select options={locations.map(e=>({value:e.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, LocationId:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"}checked={filterCheck.CompanyId} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    DealerId:false,
                    LocationId:false,
                    CompanyId:!filterCheck.CompanyId,
                    CategoryId:false,
                    Status:false})}/>
                <p className="FilterComText">Company</p>
            </div>
            {
                filterCheck.CompanyId&&
                <div className="FilterComRow"><Select options={companies.map(e=>({value:e.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, CompanyId:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"} checked={filterCheck.CategoryId} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    DealerId:false,
                    CompanyId:false,
                    CategoryId:!filterCheck.CategoryId,
                    Status:false})}/>
                <p className="FilterComText">Category</p>
            </div>
            {
                filterCheck.CategoryId&&
                <div className="FilterComRow"><Select options={categories.map(e=>({value:e.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, CategoryId:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow">
                <input type={"checkbox"}checked={filterCheck.Status} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    CompanyId:false,
                    CategoryId:false,
                    DealerId:false,
                    Status:!filterCheck.Status})}/>
                <p className="FilterComText">Status</p>
            </div>
            {
                filterCheck.Status&&
                <div className="FilterComRow"><Select options={[{value:"Sold", label:"Sold"},{value:"Renew down", label:"Renew down"},{value:"Cancelled", label:"Cancelled"},{value:"Re-install", label:"Re-install"},{value:"Quoted", label:"Quoted"}]} onChange={(e)=>setFilterValues({...filterValues, Status:e.value})}  className="PAYselect"/></div>
            }
            <div className="FilterComRow"style={{width:"220px"}}>
                <input type={"checkbox"}checked={filterCheck.DealerId} onChange={(e)=>setFilterCheck({ 
                    ClientId:false,
                    ClientTel:false,
                    SoldBy:false,
                    ProducerId:false,
                    LocationId:false,
                    CompanyId:false,
                    CategoryId:false,
                    Status:false,
                    DealerId:!filterCheck.DealerId})}/>
                <p className="FilterComText">Dealer sale person</p>
            </div>
            {
                filterCheck.DealerId&&
                <div className="FilterComRow"><Select options={dealers.map(e=>({value:e.id,label:e.name}))} onChange={(e)=>setFilterValues({...filterValues, DealerId:e.value})}  className="PAYselect"/></div>
            }
            <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <button onClick={()=>filterSubmit(filterValues)} className="FilterComButton">Apply Filters</button></div>



        </div>}

        <Modal open={open1} onClose={onCloseModal1} center classNames={"modal"} >
                    <div className="modal" style={{minWidth:"250px", alignItems:"center"}}>
                    
                    <AiOutlineDelete color="#FF4545" size={"50px"} style={{alignSelf:"center", marginTop:"25px", marginBottom:"10px"}}/>
                    <p className="modalText">Type "delete" to confirm </p>
                    <input className='AQinput' onChange={(e)=>setDeleteConf(e.target.value)} style={{marginTop:"12px"}}/>
                
                    <button disabled={deleteConf=="delete"?false:true} className="modalButton" onClick={handleDeleteModal}>Continue</button>
                
                    
                    </div>
            </Modal>
    </div>
    )

}
export default QuoteReportComponent



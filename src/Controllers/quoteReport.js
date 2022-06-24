import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment"
import { useSelector } from 'react-redux';
import QuoteReportComponent from "../Components/quoteReport";

const QuoteReport=(props)=>{
    const userRole = useSelector(state=> state.userRole)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(false);
    const onCloseModal = () => setOpen(false);
    const [deleteConf, setDeleteConf] = useState("")
    const [deletedOne, setDeletedOne] = useState(null)
    const [open1, setOpen1] = useState(false);
    const onOpenModal1 = () => setOpen1(false);
    const onCloseModal1 = () => setOpen1(false);
    const [quote, setQuote] = useState({})
    const [quotes, setQuotes]=useState([]) 
    const [quotesFil, setQuotesFil] = useState([])
    const [pes, setPes]=useState([]) 
    const [openFilter, setOpenFilter] = useState(false)
    let columns = props.location.aboutProps
    const producers = useSelector((state) => state.Producers);
    const [filterValues, setFilterValues ] = useState({
        dateFrom:null,
        dateTo:null,
        ClientId:null,
        ClientTel:null,
        SoldBy:null,
        ProducerId:null,
        LocationId:null,
        CompanyId:null,
        CategoryId:null,
        Status:null,
        DealerId:null
    })
    const [filterCheck, setFilterCheck ] = useState({
        date:false,
        ClientId:false,
        ClientTel:false,
        SoldBy:false,
        ProducerId:false,
        LocationId:false,
        CompanyId:false,
        CategoryId:false,
        Status:false,
        DealerId:false
    })


    const categories = useSelector((state) => state.Categories);
    const companies = useSelector((state) => state.Companies);
    const clients = useSelector((state) => state.Clients);
    const dealers = useSelector((state) => state.DealerSalesPersons);
    const locations = useSelector((state) => state.Locations);
   
    useEffect(()=>{
        axios.get(`https://truewayagentbackend.com/quotes`)
            .then(function(response){
                setQuotes(response.data)
                
            
                
            })
           
            .catch(error=>{
              console.log(error)  
            })
    },[])
    
    useEffect(()=>{ 
        filterSubmit(filterValues)
    },[filterValues,quotes])
   const closeCloud = (e)=>{
        setFilterValues(e)
         }
    
    const modify=(e)=>{
        setQuote(e);
        setOpen(true)
    }
    const filterSubmit = (e) => {
       
        let temp = quotes
        if(e.dateFrom&&e.dateTo){
            temp=temp.filter(h=>moment(`${h.date}`).isBetween(`${e.dateFrom}`,`${e.dateTo}`, undefined, '[]'))
        }
        if(e.ClientId){
            temp=temp.filter(h=>h.ClientId==e.ClientId)
        }
        if(e.ClientTel){
            temp=temp.filter(h=>h.ClientId==e.ClientTel)
        }
        if(e.LocationId){
            temp=temp.filter(h=>h.LocationId==e.LocationId)
        }
        if(e.CompanyId){
            temp=temp.filter(h=>h.CompanyId==e.CompanyId)
        }
        if(e.CategoryId){
            temp=temp.filter(h=>h.CategoryId==e.CategoryId)
        }
        if(e.SoldBy){
            temp=temp.filter(h=>h.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].User.id==e.SoldBy)
        }
        if(e.Status){
            temp=temp.filter(h=>h.QuoteStatuses.sort(function(a,b){return b.id-a.id})[0].Status==e.Status)
        }
        if(e.ProducerId){
            temp=temp.filter(h=>h.UserId==e.ProducerId)
        }
        if(e.DealerId){
            temp=temp.filter(h=>h.DealerId==e.DealerId)
        }
        setQuotesFil(temp)
       
     
        
    }
    const handleDeleteModal = (e)=>{
        deleteClient({QuoteId:deletedOne})
        window.history.go(-1)

    }
    const deleteClient = (data) => {
        data&&
        console.log(data)
        fetch(`https://truewayagentbackend.com/deleteQuote`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(data)
            
        })
        .then(async res => { 
            
            try {
            const jsonRes = await res.json();
            
            if (res.status !== 200) {
                console.log("error")
            } else {
               
               console.log(jsonRes)
              
              
                
            }
        } catch (err) {
            console.log(err);
        };
    
    })
      
        .catch(err => {
            console.log(err);
        });
        };
        const handleDelete = (e)=>{
            setDeletedOne(e)
            setOpen1(true)
        }
        let defaultC = {
            clientName: true,
            clientEmail: true,
            clientTel: true,
            CompanyId: true,
            ProducerId: true,
            down: true,
            monthlyPayment: true,
            dealer: true,
            NSD: true,
            PIP: true,
            MVR: true,
            location: true,
            bound: true,
            notes: true,
            renewDown: true,
            creditCardFee: true,
            category: true
        }
    return(
      <QuoteReportComponent
        handleDelete={handleDelete}
        deleteClient={deleteClient}
        handleDeleteModal={handleDeleteModal}
        filterSubmit={filterSubmit}
        closeCloud={closeCloud}
        modify={modify}
        categories={categories}
        companies={companies}
        clients={clients}
        dealers={dealers}
        locations={locations}
        filterCheck={filterCheck}
        setFilterCheck={setFilterCheck}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        userRole={userRole}
        open={open}
        deleteConf={deleteConf}
        deletedOne={deletedOne}
        open1={open1}
        setDeleteConf={setDeleteConf}
        setDeletedOne={setDeletedOne}
        setOpen1={setOpen1}
        setOpen={setOpen}
        quote={quote}
        quotes={quotes}
        quotesFil={quotesFil}
        pes={pes}
        openFilter={openFilter}
        setQuote={setQuote}
        setQuotes={setQuotes}
        setQuotesFil={setQuotesFil}
        setPes={setPes}
        setOpenFilter={setOpenFilter}
        columns={columns?columns:defaultC}
        onCloseModal={onCloseModal}
        onCloseModal1={onCloseModal1}
        producers={producers}
        
      />
    )

}
export default QuoteReport



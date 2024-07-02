import React, { useEffect, useState } from 'react';
import AuctionList from "../components/AuctionList";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`
  height: 1000px;
`




const AuctionLists =() => {
  
  const { keyword } = useParams();
  const[auctionList,setAuctionList]= useState([]);
 
 /* useEffect(()=> {
    axios
    .get(``)
    .then((res)=> {
      setAuctionList(res.data);
    })
    .catch((err)=> {
      console.log(e);
    })
  },[]);*/

  
  return(
      <>
      
      <Container>
      <AuctionList> </AuctionList>
      <div>{keyword}</div>
      </Container>
      </>
  );
};


export default AuctionLists;
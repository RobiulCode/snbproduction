import React from 'react';
import Others from '../Others/Others';
import Navbar from '../Navbar/Navbar';
import Section from '../Sections/Section';
import Data from './../../Data/data';
import Footer from '../Footer/Footer';
import Link from '../../Data/link'


const Home =()=> {

  const section =(Data,name)=> {
    const items = Data.filter((items)=> items.section === name)
    return items
  }
  const biscuits = section(Data,'biscuit')
  const bakerys = section(Data,'bakery')
  const cakes = section(Data,'cake')
  const snackses = section(Data,'snacks')
  const wafers = section(Data,'wafer')
  const lachchas = section(Data,'lachcha')
  
  const {biscuit,cake,wafer,snacks,bakery,lachcha} = Link
    return (
      <div className="space-y-3">
        <Navbar></Navbar>
        <a className='production-link' href="https://docs.google.com/spreadsheets/d/1t0A_-wMTDyAwdZwidG6E5KYkM7k7QsDnks6Q1mRmKVI/edit#gid=389661618" target="_blank" rel="noreferrer">Production History Details</a>
        <div className="grid grid-cols-2 space-x-1 space-y-1 md:grid-cols-6 md:space-x-5 mx-6">
          <Section name="Biscuit" data={biscuits} link={biscuit}></Section>
          <Section name="Bakery" data={bakerys} link={bakery}></Section>
          <Section name="Snacks" data={snackses} link={snacks}></Section>
          <Section name="Cake" data={cakes} link={cake}></Section>
          <Section name="Wafer" data={wafers} link={wafer}></Section>
          <Section name="Lachcha" data={lachchas} link={lachcha}></Section>
        </div>
        <Others></Others>
        <Footer></Footer>
      </div>
    )
}
export default Home;
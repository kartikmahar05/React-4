import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';


const Home = () => {
  return (
  <>
    <div className="txt">
      <div className="child1">
      <h1>YOUR FEET <br/> DESERVE <br /> THE BEST</h1>
      <div className="pr">
    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
    </div>
    </div>
      <div className="child2">
    <img src="images/airjod.jpeg" alt="" height={450} width={750}/>
    </div>
    </div>
    <div className="parent1">
      <div className="child3">
    <Button variant="contained" color="error">Shop Now</Button></div>
    <div className="child4">
    <Button variant="outlined" color="error">
       Category
      </Button>
    </div>
      </div>
      <div className="child5">
        Also Available on
      </div>
      <div className="parent2">
       <div className="child6">
        <a href="https://www.flipkart.com/search?q=nike+shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&p%5B%5D=facets.brand%255B%255D%3DNIKE" >
    <img src="images/flipkart.png" alt="" height={20}/></a>
       </div>
       <div className="child7">
        <a href="https://www.amazon.in/s?k=nike+shoes&crid=15JGYQUXHJCRW&sprefix=nike+sh%2Caps%2C443&ref=nb_sb_ss_inft-rank-pairwise-override-in-t3_2_7">
    <img src="images/amazon.png" alt="" height={20}/></a>
       </div>
      </div>

    
    </>
  )
}

export default Home
import React from 'react'
import about from '../images/about.jpg'
import Icon from '@mui/material/Icon';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function About() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <div className="about-content" style={{width: '475px',marginLeft: "30%"}}>
            
            <div style={{border: "13px white solid"}}>
                <img src={about} alt="image" className="image" style={{width: '450px',height: "250px"}}/>
            </div>
            <div className="about_text" style={{textAlign: 'justify',border: "13px white solid"}} >
                <p  className="para" style={{width: '450px',backgroundColor: 'black',color: 'white',padding: '30px',height: "550px"}}>
                As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively.
                
                In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, such as books, magazines, newspapers, and ‘zines . Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, explore it, find layers of meaning in it, and draw information and conclusions from it, we’re looking at a text.
                </p>
               {/* <TwitterIcon/>
               <FacebookIcon/>
               <InstagramIcon/>
               <LinkedInIcon/> */}
            </div>
           
                   
        </div>
        </div>
    )
}

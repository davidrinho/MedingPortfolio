import React from 'react';
import '../css/Home.css';
import colors from '../constants/theme';
import Pic from '../assets/david.png';
import github from '../assets/gitHub.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagra.png';
import youtube from '../assets/youtube.png';



const Home = () => {
    return (
        <div className="homeContentDiv" style={{backgroundColor: colors["magic mint"]}}>
            <div className="leftDiv">
                <div className="textBox" style={{marginTop: 40, marginLeft: 20}}>
                    <h2 className="leftText" style={{color: colors["dark sea green"]}}>Hello,</h2>
                    <h2 className="leftText" style={{color: colors["dark sea green"], margin: 0}}>I'm David Meding,</h2>
                    <h2 className="leftText" style={{color: colors["dark sea green"], margin: 0}}>I do code and stuff</h2>
                </div>
            </div>
            <div className="rightDiv" style={{backgroundColor: colors["dark sea green"]}}>
            <div className="textBox" style={{textAlign: 'right', marginBottom: 40}}>
                    <h2 className="rightText" style={{color: colors["magic mint"], margin: 0}}>Social Media</h2>
                    <div className="socialMediaDiv">
                        <a href="https://github.com/davidrinho" target="_blank"><img src={github}/></a>
                        <a href="https://www.facebook.com/david.ringborg" target="_blank"><img src={facebook}/></a>
                        <a href="https://www.instagram.com/davidringborg" target="_blank"><img src={instagram}/></a>
                        <a href="https://www.youtube.com/channel/UCLJXFb49RH58-qeSN_jbpgA" target="_blank"><img src={youtube}/></a>
                    </div>
                </div>
            </div>
            <img src={Pic}
                    style={{
                        width: '30vw',
                        height: '30vw',
                        borderRadius: '50%',
                        position: 'absolute',
                        display: 'block',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: 'auto',
                        opacity: '0.5'
                        
                    }}
                />
        </div>
    )
}


export default Home;
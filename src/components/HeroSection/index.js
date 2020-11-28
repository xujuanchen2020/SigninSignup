import React, {useState} from 'react';
import {HeroBg, HeroContainer, VideoBg,
ArrowForward, ArrowRight, HeroBtnWrapper, 
HeroH1, HeroContent, HeroP} from './HeroElement';
import Video from '../videos/video.mp4';
import {Button} from '../ButtonElement';

const Hero = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                autoPlay loop muted src={Video} 
                type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Xujuan Chen
                </HeroH1>
                <HeroP>
                    a graduating student pursuing BS degree of Computer Science at 
                    CUNY Lehman College
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        For More 
                        {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
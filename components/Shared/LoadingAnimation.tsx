import type { NextPage } from 'next'
// importing icons
import LinkedInLogo from "../../public/assets/linkedin_icon.svg"

const LoadingAnimation:NextPage = () => {
  return (
   <>
   <style>{`
   body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f5f5f5;
  }
  
  .container{
    //background: #eaeaea;
    width: $width*2;
    height: $height*2;
    background-size: cover;
    vertical-align: middle;
    margin: 20% auto;
  }
  
  .fa-linkedin{
    display: block;
    font-size: 5em;
    text-align: center;
    color: #0077B5;
  }
  
  .line{
    height: 3px;
    width: 100%;
    background: #e8e8e8;
    margin-top: 30%;
    
    .inner{
      width: 100%;
      height: inherit;
      background: #0077B5;
      animation: slide 2s ease-in-out infinite;
    }
  }
  
  @keyframes slide{
    0%{
      transform-origin: left;
      transform: scalex(0.3);
    }
    25%{
      transform-origin: left;
      transform: scalex(1);
    }
    26%{
      transform-origin: right;
      transform: scalex(1);
    }
    50%{
      transform-origin: right;
      transform: scalex(0.3);
    }
    75%{
      transform-origin: right;
      transform: scalex(1);
    }
    76%{
      transform-origin: left;
      transform: scalex(1);
    }
    100%{
      transform-origin: left;
      transform: scalex(0.3);
    }
  }
   `}</style>
    <div className="w-full h-screen bg-primaryBg">
         <LinkedInLogo/>
    <div className="line">
      <div className="inner"></div>
    </div>
  </div>
   </>
  )
}

export default LoadingAnimation
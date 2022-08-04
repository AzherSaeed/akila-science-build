
import styled from 'styled-components';

const NavBarContainer = styled.div`
  //background: rgba(255, 255, 255, 0.76);
  //box-shadow: 0px -2px 13px rgba(0, 0, 0, 0.27);
  background: transparent;
  margin-top: 30px;
  width: 100%;
  
  @media screen and (max-width : 1024px ){
    padding: 0 20px;
  }
  .navbar {
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    &-logo{
      margin-right: 20px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
 
    }
    
    &-buttons{
      display: flex;
      align-items: center;
      gap: 9px;
      
      @media screen and (max-width : 1200px){
        display: none;
      }
    }

    &-nav--buttons{
      display: flex;
      align-items: center;
      gap: 9px;
    }
    
    @media screen and (min-width: 1200px){
      &-nav--buttons{
        display: none;
      }
    }
   
    
    &-bton{
      &-login{
        background: linear-gradient(90.99deg, #3134DB 0.83%, #009EE1 99.4%);
        border-radius: 22.5px;
        padding: 17px 37px;
        border: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 78.5%;
        color: #FFFFFF;
        cursor: pointer;
      }
      &-register{
        cursor: pointer;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        border-radius: 22.5px;
        border: 1px solid #009EE1;
        border-radius: 24.5px;
        background: none;
        color: white;
        padding: 15px 33px;

        @media screen and (max-width: 1200px){
          color: black !important;
        }
      }
   
    }
  }

  .navbar-outer {
    display: flex;
    align-items: center;
    gap: 2px;
    .navbar-navItem {
      display: flex;
      align-items: center;
      gap: 20px;
      transition: all .3s linear;
      @media screen and (max-width: 1200px) {
        position: absolute;
        left: 0;
        height: auto;
        width: 100%;
        top: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;
        background-color: white;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
        border: 1px solid var(--light-gray2);
        
      }

      a {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 76.69%;
        color: #E3E3E3 !important;
        
        @media screen and (max-width: 1200px){
          color: black !important;
        }

        :hover {
          color: #040363;
          text-decoration: none;
          text-underline-offset: 12px;
        }
      }

      .active{
        color: #040363;
        text-decoration: none;
        text-underline-offset: 12px;
      }
    }
    .toggler-active{
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  .navbar-toggler {
    display: none;
    
    img{
      width: 30px;
    }

    @media screen and (max-width: 1200px) {
      display: block;
    }
  }
`;

export default NavBarContainer;

export const styles = () => ({
  dashboardRoot: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "15vh",
    color: "#000133",
  },
  appBar: {
    background: "#00022E",
  },
  title: {
    margin: "auto",
  },
});

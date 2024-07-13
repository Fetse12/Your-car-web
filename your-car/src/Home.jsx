import background from './assets/Background.png'
function Home(){
    return(
        <>
        <img className='background' src={background} alt='backgroun pic'></img>
        <div className='navbar'> 
            <div className='title'>
                 <h1>Your<span>Car</span></h1>
            </div>
            <div className='nav'>
                <ul><a href="">Home</a></ul>
                <ul><a href="">About</a></ul>
                <ul><a href="">Services</a></ul>
                <ul><a href="">Cars</a></ul>
                <ul><a href="">Contact us</a></ul>
            </div>
               
        </div>
        <div className='headline'>
            <p>Find the perfect car <br />
            for you at YourCar.</p>
        </div>
         
       
        <div className='description'>
            <p>
            We offer a wide range of <br />
                cars that cater to your <br />
                needs and budget. Visit <br />
                us today and drive away <br />
                 with your dream car!
            </p>

        </div>
            
    
        
        </>
        
    );

}

export default Home
import Image from './assets/Group 1127.png'
function About(){
    return(
        <>
        <div className='about'>
            <div className='text'>
            <h1>ABOUT US</h1>
            <h2>About</h2>
            <p>
                YourCar is a luxury car dealership that offers a personalized and 
                first-class experience to its clients. Our team of experienced professionals is dedicated to 
                providing exceptional service and finding the perfect vehicle to match
                our clients' unique preferences and requirements.We have an extensive selection 
                of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the
                highest standards of quality and safety.
            </p>
            <p> 
                At YourCar, we are committed to creating a stress-free and 
                enjoyable car buying experience. We understand that purchasing a luxury 
                car can be a significant investment, which is why we offer flexible financing options 
                to make the process more manageable. Our team is available to answer any questions and 
                provide guidance throughout the entire buying process. We take pride in our outstanding 
                customer service and attention to detail, and we are confident that our clients will be 
                satisfied with their experience at YourCar.
                </p>
          
            </div>
             <img src={Image} ></img>
        </div>
        </>
    );
}

export default About
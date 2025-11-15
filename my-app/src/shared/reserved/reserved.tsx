import './css/reservation.css'; // Import the corresponding CSS
import reservedImage from '../../assets/images/menu images/reserved.png'; // Update path as necessary

function ReservationBanner() {
  return (
    <div className="reservation">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text and Buttons */}
          <div className="col-lg-6 content">
            {/* The span wrapping 'RESERVATION' and the one wrapping 'THIS EVENING...' 
                are unusual. I've left the structure as is but typically 
                you'd use <h5>/<h6> for the small text and <h1> for the title. */}
            <span>RESERVATION</span>
            <span>
              <h1>THIS EVENING WILL BE GREAT!</h1>
            </span>
            <span>
              Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.
            </span>
            
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  {/* The button would typically trigger a modal or redirect */}
                  <a href="/Reservation" id="button-reservation">RESERVATION</a>
                </div>
              </div>
              <div className="col-lg-6">
                {/* The 'a' tag here would be a <Link> component in a real routing setup */}
                <a href="/contact">GET IN TOUCH</a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="col-lg-6">
            <img 
              src={reservedImage} 
              alt="Illustration related to table reservation" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationBanner;
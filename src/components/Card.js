import '../App.css';
import pin from '../Images/Fill 219.png';

const Card = (props) => {
  return (
    <div className="card">
      <div className="photo-cnt">
        <img className="travel-img" src={props.img} alt="travel images" />
      </div>
      <div className="text-cnt">
        <h4>
          <img className="pin" src={pin} alt="red pin" />
          {props.location}
          <a href={props.googlemap}> View on Google Maps</a>
        </h4>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;

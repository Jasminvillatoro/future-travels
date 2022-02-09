import '../App.css';
import pin from '../Images/Fill 219.png';

const Main = (props) => {
  return (
    <main>
      <div className="photo-cnt">
        <img className="travel-img" src={props.img} alt="" />
      </div>
      <div className="text-cnt">
        <h4>
          <img src={pin} alt="" />
          {props.location}
          <a href={props.googlemap}> View on Google Maps</a>
        </h4>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </main>
  );
};

export default Main;

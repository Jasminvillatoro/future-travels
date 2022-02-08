import '../App.css';
import pin from '../Images/Fill 219.png';
import fuji from '../Images/Rectangle 77.png';
const Main = () => {
  return (
    <main>
      <div className="photo-cnt">
        <img src={fuji} alt="" />
      </div>
      <div className="text-cnt">
        <h4>
          <img src={pin} alt="" />
          JAPAN
          <span> View on Google Maps</span>
        </h4>
        <h1>Mount Fuji</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          quidem illo sint mollitia, nesciunt perferendis dicta aliquid optio
          dolore quas, explicabo ullam nam repellendus corporis corrupti
          placeat. In, neque reiciendis! Optio delectus tenetur at animi
          suscipit consequatur repellat dolor veniam deserunt quaerat totam
          harum, molestiae illo, ex sed error accusamus qui quas! Eos quibusdam
          temporibus impedit delectus, sunt numquam dolorum. Quis incidunt fuga
          doloribus quo dolorum saepe id, expedita veritatis? Et maiores quis
          laudantium, dolore animi quisquam porro ratione illum praesentium
          earum vero minima ex adipisci ducimus dolores odio aperiam?
        </p>
      </div>
    </main>
  );
};

export default Main;

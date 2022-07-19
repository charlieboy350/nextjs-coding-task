import { Button, Headings } from "../components";

export default function Home() {
  return (
    <div className="main">
      <div className="inner-wrapper flex-element">
        <div className="title-section">
          <Headings type={}/>
          
          <h5>
            Offer your customers the fastest performance possible with Plume. They’re ready.
          </h5>

          <Button primary={true}>
            Learn more about WiFi 6E
          </Button>
        </div>

        <div className="aside-img">
          <img src={'/assets/asideimg.png'}/>
        </div>
      </div>
    </div>
  );
}

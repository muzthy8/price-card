
import Card from "./card";

function App() {
  let data = [
    {
      plan:"FREE",
      price:"0"
    },
    {
      plan:"PLUS",
      price:"9"
    },
    {
      plan:"PRO",
      price:"49"
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
          <Card data = {data[0]}/>
          <Card data = {data[1]}/>
          <Card data = {data[2]}/>
    </div>
    </div>
</section>
  </>
}

export default App;

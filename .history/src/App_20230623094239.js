
import Card from "./card";

function App() {
  let data = [
    {
      plan:"FREE"
    },
    {
      plan:"PLUS"
    },
    {
      plan:"PRO"
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
          <Card/>
          <Card/>
          <Card/>
    </div>
    </div>
</section>
  </>
}

export default App;

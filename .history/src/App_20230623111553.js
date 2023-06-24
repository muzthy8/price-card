
import Card from "./card";

function App() {
  let data = [
    {
      plan:"FREE",
      price:"0",
      users:"Single User",
      storage:"5GB Storage",
      publicProjects:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProjects:"Unlimited Private Projects",
      phoneSupports:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      plan:"PLUS",
      price:"9",
      users:"5 User",
      storage:"50GB Storage",
      publicProjects:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProjects:"Unlimited Private Projects",
      phoneSupports:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      plan:"PRO",
      price:"49",
      users:"Unlimited User",
      storage:"150GB Storage",
      publicProjects:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProjects:"Unlimited Private Projects",
      phoneSupports:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      reports:"Monthly Status Reports"
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

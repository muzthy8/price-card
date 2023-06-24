import React from 'react'

function card({data}) {
    console.log(data)
  return <>
  {/* <!-- Free Tier --> */}
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isUsers?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{data.users}</li>
              <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
              <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProjects}</li>
              <li className={data.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{data.communityAccess}</li>
              <li className={data.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className="fas fa-times"></i></span>{data.privateProjects}</li>
              <li className={data.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className="fas fa-times"></i></span>{data.phoneSupport}</li>
              <li className={data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className="fas fa-times"></i></span>{data.subDomain}
              </li>
              <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className="fas fa-times"></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}
export default card
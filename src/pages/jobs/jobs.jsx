import React from "react";
import "./jobs.css"; // Import your CSS file here

export const jobs = () => {
  return (
    <div className="container" style={{ padding: "100px" }}>
      {/* <h1 className="text-center" style={{ color: "white" }}>
        Job Opportunities
      </h1> */}
      <div className="card-wrapper" style={{ background: "#fff", padding: "0px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "10px" }}>
      <div className="row" style={{ paddingLeft: "50px", padding: "50px" }}>
        <div className="col-md-4">
          <div className="single-blog" >
            <p className="blog-meta">
              <span>Date Posted : February 6, 2024</span>
            </p>
            <div style={{display: "flex"}}>
            <img
              src="https://www.nicepng.com/png/detail/258-2585308_job-search-skills-girl-using-laptop-png.png"
              alt="job1"
              style={{ width: "auto", height: "150px" }} // Adjust height as needed
            />
            <p className="blog-text" style={{marginTop: "20px"}}>
              Conducting market research and analysis to identify opportunities
              and understand customer needsDefining product vision, strategy,
              and roadmap, in alignment with company goals Collaborating with
              cross-functional teams, such as engineering, design, and sales, to
              bring products to marketManaging the product lifecycle, from
              ideation to launch and post-launch evaluationMonitoring product
              performance and making data-driven decisions to drive growth and
              profitability.
              <br />
              Strong leadership and decision-making skills.Excellent strategic
              and analytical skills.Good communication and collaboration skills.
              <br/>
              <p style={{marginTop:"10px"}}>
              <a
                href="https://www.naukri.com/job-listings-product-manager-k-m-trans-logistic-pvt-ltd-new-delhi-4-to-8-years-230223502826?src=seo_srp&sid=17074837228937459&xp=1&px=1"
                className="read-more-btn"
                
              >
                Apply Here
              </a>
              </p>
            </p>
            </div>
            <h2>
              <a href="#">Product Manager</a>
            </h2>
            <h4>KM Trans Logistics</h4>
        
            <span></span>
          </div>
        </div>
      </div>
      </div>

      <div className="card-wrapper" style={{ background: "#fff", padding: "0px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "10px" }}>
      <div className="row" style={{ paddingLeft: "50px", padding: "50px" }}>
        <div className="col-md-4">
          <div className="single-blog" >
            <p className="blog-meta">
              <span>Date Posted : February 6, 2024</span>
            </p>
            <div style={{display: "flex"}}>
            <img
              src="https://www.nicepng.com/png/detail/258-2585308_job-search-skills-girl-using-laptop-png.png"
              alt="job1"
              style={{ width: "auto", height: "150px" }} // Adjust height as needed
            />
            <p className="blog-text" style={{marginTop: "20px"}}>
            We are seeking a highly motivated Sales executive with 2+ years extensive experience in the 3PL (Third-Party Logistics) industry. The ideal candidate should possess in-depth knowledge of understanding customer requirements and providing customized solutions
              <br />
              Strong leadership and decision-making skills.Excellent strategic
              and analytical skills.Good communication and collaboration skills.
              <br/>
              <p style={{marginTop:"10px"}}>
              <a
                href="https://www.naukri.com/job-listings-regional-sales-executive-north-v-logis-a-division-of-v-trans-i-ltd-delhi-ncr-2-to-5-years-180124006333?src=seo_srp&sid=17074882612544554&xp=2&px=1"
                className="read-more-btn"
                
              >
                Apply Here
              </a>
              </p>
            </p>
            </div>
            <h2>
              <a href="#">Regional Sales Executive - North</a>
            </h2>
            <h4>V-Logis (A division of V-Trans (I) Ltd)</h4>
        
            <span></span>
          </div>
        </div>
      </div>
      </div>
  
    </div>
  );
};



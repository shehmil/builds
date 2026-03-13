import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & DevOps Engineer</h4>
                <h5>Maxwell GeoSystems</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Engineered end-to-end CI/CD ecosystems with Jenkins, ArgoCD, and 
              SonarQube, achieving 50% faster release cycles. Hardened K8s 
              security using Istio and Kyverno, and optimized AWS costs by 20% 
              through automated resource management with Python/Boto3.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Inspired Gaming Inc</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting multi-region Kubernetes clusters for 99.9% uptime. 
              Orchestrating infrastructure with Terraform and Ansible, slashing 
              provisioning time by 40%. Implementing SLI/SLO-based monitoring 
              to reduce MTTR by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

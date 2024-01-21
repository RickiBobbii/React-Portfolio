import { FaGithub, FaLink } from "react-icons/fa";

export default function Project(props) {
  const cardStyle = {
    width: "300px",
  };

  // Helper function that generates a random width for our placeholder images
  // const randomWidth = () => {
  //   const number = Math.random() * (300 - 200) + 200;
  //   return number.toString().split('.')[0];
  // };

  return (
    <div className="container">
        {/* Test grid */}
        <h1 className="text-center">Portfolio</h1>
        <div className="row justify-content-center">    
           

                    {props.projects.map((project) => (
                    <div className="col d-flex justify-content-center" key={project.id}>   
                        <div className="card m-3 p-2"  style={cardStyle}>
                        <img className="card-img-top" src={project.image} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-header text-center bg-info-subtle">{project.name}</h5>
                            <p className="card-text">Description: {project.description}</p>
                            <p className="card-text">Technologies: {project.technologies}</p>
                            <div className="d-flex justify-content-around">
                                <a href={project.githubLink} className="btn btn-info pb-2">
                                <i className="p-1 fs-5"> <FaGithub /></i>
                                {" "}
                                Github
                                </a>
                                <a href={project.appLink} className="btn btn-secondary pb-2">
                                <i className="p-1 fs-5"> <FaLink /></i>
                                {" "}
                                AppLink
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>                        
                    ))}
          
      
        </div>


    </div>
  );
}

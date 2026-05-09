import { useEffect, useState } from "react";
import userImage from "../../assets/Sample_User_Icon.png"; 
import Topper from "../../components/Topper/Topper";


function Profile() {
   
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [role, setrole] = useState("");
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                
                
                    setname(user.name);
                    setemail(user.email);
                    setrole(user.role);
              
            } catch (err) {
                console.log(err);
            }
        };   
        getUser();
    }, []);
        
    return (
        <>
            <Topper title={`Welcome ${name}`} breadcrumb={"Profile"} />
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card shadow-sm border-0 rounded-4">
                            <div className="card-body p-4 p-md-5 text-center">
                                <img 
                                    src={userImage} 
                                    className="rounded-circle img-thumbnail shadow-sm mb-4" 
                                    style={{ width: "130px", height: "130px", objectFit: "cover" }}

                                />
                                <h3 className="fw-bold text-dark mb-1">{name || "PLease try to login "}</h3>
                                <p className="text-muted mb-4">{role}</p>
                                <hr className="w-50 mx-auto text-secondary mb-4" />
                                <ul className="list-group list-group-flush text-start w-100 rounded-3 border">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <span className="text-secondary fw-semibold">Name</span>
                                        <span className="text-dark fw-bold">{name}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <span className="text-secondary fw-semibold">Email</span>
                                        <span className="text-dark fw-bold">{email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3 bg-light">
                                        <span className="text-secondary fw-semibold">Role</span>
                                        <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">
                                            {role}
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Profile;
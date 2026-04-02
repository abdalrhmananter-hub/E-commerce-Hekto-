import "./Topper.css"

function Topper({title,breadcrumb}){
    return(
        <div className="topper container-fluid py-5 mb-5">
            <div className="container py-5">
                <div className="row g-0">
                    <div className="col-6 text-center text-lg-start">
                        <h1 className="display-5 fw-bold" style={{ color: '#101750' }}>{title}</h1>
                        <nav aria-label="breadcrumb" >
                            <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0" style={{"--bs-breadcrumb-divider": "'.'"}}>
                                <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-dark">Home</a></li>
                                <li className="breadcrumb-item"><span className="text-dark">Pages</span></li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#FB2E86' }}>
                                {breadcrumb}
                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Topper
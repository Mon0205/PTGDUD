import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
    const chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's university, Sydney, Australia"
    }
    return (
        <div>
            <div class="container mt-5">
                <div class="card p-3">
                    <div class="card-body">
                        <h5>{chidi.firstName}</h5>
                        <h6>{chidi.lastName}</h6>
                        <hr />
                        <p><span class="info">{chidi.phone}</span></p>
                        <hr />
                        <p><span class="info">{chidi.address}</span></p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
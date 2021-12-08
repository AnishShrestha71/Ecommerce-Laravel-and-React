import React from 'react'

function Test(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Test Component</div>

                        <div className="card-body">
                            {props.example}
                            I'm an example component!
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Test;
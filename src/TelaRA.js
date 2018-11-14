import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TelaRA  extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <embed src="modelo01/ra1.html" width="100%" height="400px" />
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <Link to="/inicio">
                            <span className="btn btn-primary">Voltar</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TelaRA;
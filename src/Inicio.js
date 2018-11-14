import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Inicio  extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <Link to="/ra">
                            <span className="btn btn-primary">Iniciar</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;
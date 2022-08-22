import React, {Component} from "react";
import Popup from './Popup';

// Loading Assets (SubComponents & CSS)
import "../css/Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            popup: false
        };
    }

    updatePopup = popup => {
        this.setState({popup})
    };

    render() {
        return (
            <div>
                <Popup
                    popup={this.state.popup}
                    message={this.state.message}
                    updatePopup={this.updatePopup}
                />
                <div className="love-author abs bottom">
                    <button onClick={() => {
                        const content = <span>
                        </span>;
                        this.setState({popup: true, message: content});
                    }}><span role="img" aria-label="Love">Made with️ ❤ by SelfLabs</span>
                    </button>
                    &nbsp;|&nbsp;
                    <button onClick={() => {
                        const content = <span>
                        </span>;
                        this.setState({popup: true, message: content});
                    }}>
                        <span>| All Rights Reserved </span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Footer;

import React, {Component} from 'react';
import {CustomView, isMobileOnly, isTablet, isBrowser, withOrientationChange} from "react-device-detect";
import Typed from "react-typed";

import logo from './logo.svg';
import './css/App.css';

// Loading category list
import CategoryList from "./library/category.json";

// Loading WebGL main stage
import MainStage from "./components/webgl/MainStage";

// Loading components
import PageLoader from "./components/PageLoader";
import Name from "./components/Name";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer"
import Popup from "./components/Popup";
import Category from "./components/Category";
import PartLoader from "./components/PartLoader";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: CategoryList,
            currentCategory: "head",
            avatarName: "Give it a name",
            UIDisplayed: true,
            popup: false,
            loadedMeshes: {
                Torso: "default_torso",
                LegR: "default_leg_R",
                LegL: "default_leg_L",
                Head: "default_head",
                ArmR: "default_arm_R",
                ArmL: "default_arm_L",
                HandR: "open_hand_R",
                HandL: "open_hand_L",
                FootR: "default_foot_R",
                FootL: "default_foot_L",
                Stand: "circle"
            },
            editor: true,
            partLoading: false,
            message: "Sorry, this feature is still under development..."
        }
    };

    componentDidMount() {
        if (isBrowser || isTablet) {
            this.mainStage = new MainStage();
            this.mainStage.init();
            this.mainStage.animate();
        }
    }

    // Update the state of parent App from child Component
    updateCategory = currentCategory => {
        this.setState({currentCategory});
    };
    updateAvatarName = avatarName => {
        this.setState({avatarName});
    };
    updatePopup = popup => {
        this.setState({popup});
    };
    updateMeshes = loadedMeshes => {
        this.setState({loadedMeshes});
    };
    updateLoading = partLoading => {
        this.setState({partLoading});
    };
    updatePopupMessage = message => {
        this.setState({message});
    };

    render() {
        return (
            <div className="App">
                <CustomView condition={isBrowser || isTablet}>
                    <PageLoader/>
                    <Name
                        avatarName={this.state.avatarName}
                        updateAvatarName={this.updateAvatarName}
                    />
                    <Footer/>
                    <Buttons
                        avatarName={this.state.avatarName}
                        loadedMeshes={this.state.loadedMeshes}
                    />
                    <Popup
                        popup={this.state.popup}
                        message={this.state.message}
                        updatePopup={this.updatePopup}
                    />
                    <Category
                        category={this.state.category}
                        currentCategory={this.state.currentCategory}
                        updateCategory={this.updateCategory}
                        // updatePose={this.updatePose}
                        UIDisplayed={this.state.UIDisplayed}
                        loadedMeshes={this.state.loadedMeshes}
                        updateMeshes={this.updateMeshes}
                        updatePopup={this.updatePopup}
                        updatePopupMessage={this.updatePopupMessage}
                        editor={this.state.editor}
                        updateLoading={this.updateLoading}
                    />
                    <PartLoader
                        loading={this.state.partLoading}
                        updateLoading={this.updateLoading}
                    />
                </CustomView>
                <CustomView condition={isMobileOnly}>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="SelfLabsLogo"/>
                            <div className="full-screen-message">
                                <code>
                                    <Typed
                                        strings={[
                                            "Sorry",
                                            "This content is currently unavailable on mobile phones.^2000",
                                            "Come back soon for updates!"
                                        ]}
                                        typeSpeed={50}
                                        showCursor={true}
                                    />
                                </code>
                            </div>
                           
                        </header>
                    </div>
                </CustomView>
            </div>
        );
    };
}

App = withOrientationChange(App)

export default App;

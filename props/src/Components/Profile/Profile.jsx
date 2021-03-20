import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Profile({ fullName, bio, profession, handleAlert, children }) {
    return (
        <div>
            <Card style={{ width: "25rem", backgroundColor: "#f0e4d7" }}>
                {children}
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Text>{profession}</Card.Text>
                    <Card.Text>{bio}</Card.Text>

                    <Button id="but" onClick={() => handleAlert(fullName)}>
                        Check it out
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
Profile.defaultProps = {
    fullName: "Amal Lahmar",
    profession: "Engineer",
};
Profile.propTypes = {
    fullNames: PropTypes.string,
    bio: PropTypes.string,
    handleAlert: PropTypes.func,
};
export default Profile;

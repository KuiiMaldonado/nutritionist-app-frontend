import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faAt, faGear, faUtensils, faDumbbell, faUsersGear, faWeightScale, faPencil} from '@fortawesome/free-solid-svg-icons';
import Avatar from "./Avatar";
import Divider from "./Divider";

import '../assets/css/ProfileSections.css';

const ProfileSections = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleEditPicture = () => {
        console.log('Edit profile pic');
        handleShow();
    }
    return (
        <Container>
            <Modal centered show={showModal}>
                <Modal.Header>
                    <Modal.Title>Update your picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'secondary'} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant={'success'}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className={'mt-4'} id={'profile-picture'}>
                <Avatar size={'200px'}/>
            </Row>
            <div className={'image-button'}>
                <button onClick={() => handleEditPicture()}>
                    <FontAwesomeIcon icon={faPencil} size={'xl'}/>
                    <span>Edit</span>
                </button>
            </div>
            <Row className={'mt-2'}>
                <h4>{`${props.userData.firstName} ${props.userData.lastName}`}</h4>
            </Row>
            <Row className={'mt-1'}>
                <span className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faUser} size={'xl'}/>
                    <h5 className={'ms-2'}>{`${props.userData.username}`}</h5>
                </span>
            </Row>
            <Row className={'mt-1'}>
                <span className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faAt} size={'xl'}/>
                    <h5 className={'ms-2'}>{`${props.userData.email}`}</h5>
                </span>
            </Row>
            <Divider/>
            <Row className={'mt-1 sectionRow'}>
                <Link to={'/profile/measures'} className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faWeightScale} size={'xl'}/>
                    <h5 className={'ms-2'}>Measures</h5>
                </Link>
            </Row>
            <Row className={'mt-1 sectionRow'}>
                <Link to={'/profile/diets'} className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faUtensils} size={'xl'}/>
                    <h5 className={'ms-2'}>Diets</h5>
                </Link>
            </Row>
            <Row className={'mt-1 sectionRow'}>
                <Link to={'/profile/trainings'} className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faDumbbell} size={'xl'}/>
                    <h5 className={'ms-2'}>Trainings</h5>
                </Link>
            </Row>
            <Divider/>
            <Row className={'mt-1 sectionRow'}>
                <Link to={'/profile/settings'} className={'d-inline-flex'}>
                    <FontAwesomeIcon icon={faGear} size={'xl'}/>
                    <h5 className={'ms-2'}>Account</h5>
                </Link>
            </Row>
            {props.userData.isAdmin && (
                <>
                    <Divider/>
                    <Row className={'mt-1 sectionRow'}>
                        <Link to={'/profile/manage'} className={'d-inline-flex'}>
                            <FontAwesomeIcon icon={faUsersGear} size={'xl'}/>
                            <h5 className={'ms-2'}>Manage users</h5>
                        </Link>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default ProfileSections;
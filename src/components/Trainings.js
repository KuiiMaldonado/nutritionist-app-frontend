import React from "react";
import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Divider from "./Divider";
import {useQuery} from "@apollo/client";
import {GET_USER_TRAININGS} from "../utils/queries";
import LoadingSpinners from "./LoadingSpinners";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const Trainings = (props) => {
    const {data, loading, refetch} = useQuery(GET_USER_TRAININGS, {
        variables: {userId: props.userId}
    });
    let trainings;

    if (!loading) {
        trainings = data.getUserTrainings.userTrainings;
        console.log(trainings);
    }
    else {
        return (
            <LoadingSpinners/>
        );
    }
    return (
        <Container>
            {!props.edit &&
                <Row>
                    <h2>Diets</h2>
                    <Divider/>
                </Row>
            }
            {trainings.length === 0
                ? <h3>No data available</h3>
                :
                <>
                    <ListGroup as={'ul'}>
                        {trainings.map((training) => {
                            return (
                                <ListGroupItem key={training._id} as={'li'} className={'d-flex justify-content-between align-items-start'}>
                                    <div>
                                        <h5>{training.fileName}</h5>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faDownload} size={'xl'}/>
                                    </div>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </>
            }
        </Container>
    );
}

export default Trainings;
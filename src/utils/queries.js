import {gql} from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            password
            firstName
            lastName
            birthDate
            isAdmin
            userMeasures {
                _id
                date
                weight
                bodyFatPercentage
                leanBodyWeight
                bodyFat
                bodyType
            }
        }
    }
`;

export const GET_USER = gql`
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            firstName
            lastName
            userMeasures {
                _id
                date
                weight
                bodyFatPercentage
                leanBodyWeight
                bodyFat
                bodyType
            }
        }
    }
`;

export const GET_ALL_USERS = gql`
    query users {
        users {
            _id
            firstName
            lastName
            email
        }
    }
`;
import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';


const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch( flight_number: $flight_number ) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
             }
        }
    }
`;


export class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>{

                    ({ loading, error, data }) => {
                        if (loading) return <h4>loading</h4>
                        if (error) console.log(error);


                        // Data success
                        const {
                            flight_number,
                            mission_name,
                            launch_year,
                            launch_date_local,
                            launch_success,
                            rocket: {
                                rocket_name,
                                rocket_type,
                            }
                        } = data.launch;


                        // Render content
                        return (
                            <div>
                                <h1 className="display-4 my-3">
                                    <span className="text-dark">Mission: </span>
                                    <span className={classNames({
                                        'text-success': !!launch_success,
                                        'text-danger': !launch_success
                                    })}> {mission_name} </span>
                                </h1>

                                <h4 className="mb-3">Launch Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">flight_number: {flight_number}</li>
                                    <li className="list-group-item">launch_year: {launch_year}</li>
                                    <li className="list-group-item">Date: <Moment format="YYYY-MM-DD HH:MM">{launch_date_local}</Moment></li>
                                </ul>

                                <h4 className="my-3">Rocket Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">rocket_name: {rocket_name}</li>
                                    <li className="list-group-item">rocket_type: {rocket_type}</li>
                                </ul>

                                <Link
                                    to={'/'}
                                    className="btn btn-info my-3">Back to launches</Link>

                            </div>
                        ); // end query return
                    } // end query func

                }</Query>
            </Fragment>
        ) // end rednder return
    } // end render
}

export default Launch
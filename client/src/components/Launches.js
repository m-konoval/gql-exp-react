import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';


const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`; // end LAUNCHES_QUERY


export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey />
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>loading</h4>
                            if (error) console.log(error)

                            return (
                                <Fragment>
                                    {
                                        data.launches.map((launch, index) => {
                                            return <LaunchItem key={`${launch.flight_number}-${index}`} launch={launch} />
                                        })
                                    }
                                </Fragment>
                            );
                        }
                    }
                </Query>
            </Fragment>
        ) // end render return
    } // end render
} // Launches

export default Launches
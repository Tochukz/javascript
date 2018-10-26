import React from 'react';
const PeopleList = ({data}) => 
    <div className="people-list">
        <h3>People List</h3>
        <ol>
            {
                data.results.map((person, i) => {
                        const {first, last} = person.name
                        return (
                                <li key={i}>{first} {last}</li>   
                        )
                    } 
                )
            }
        </ol>
    </div>
export default PeopleList;
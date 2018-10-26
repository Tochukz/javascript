import React from 'react';
import fetch  from 'isomorphic-fetch';

const DataComponent = (ComposedComponent, url) => 
    class DataComponent extends React.Component
    {
        constructor(props){
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            };
        }
        componentWillMount(){
            this.setState({loading: true});
            const {param} = this.props;
            fetch(`${url}${param}`).then(response => response.json())
                      .then(data => this.setState({data, loading: false, loaded: true}));
        }
        render(){
            const {data, loading} = this.state; 
            return(
                <div className="data-component">
                    {(loading)? <p>Loading people...</p> : (data)?
                              <ComposedComponent {...this.props} {...this.state}/> : <p>No person found</p>
                    }
                </div>
            );
        }
    }; 

export default DataComponent;
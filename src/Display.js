import React, { Component } from 'react';



class DisplayForm extends Component {

    constructor(props) {
        super(props);
       console.log(this.props.value);
    }


    render() {

     return (
           <>
                <div className='result'>
                    {this.props.value.map((employee, index) => (
                        <p className='property' key={index}>
                            Name: {employee.name} |
                            Department: {employee.dept} |
                            Rate: {employee.rate}
                        </p>
                    ))}
                </div>
                <button onClick={this.props.toggleFunc}>Go Back</button>
                
                </>
        );
    }
}

export default DisplayForm
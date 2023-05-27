import React from "react";


class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>My Footer</h1>
                <p>{this.props.paragraf()}</p>
            </div>
        )
    }
}

export default Footer;
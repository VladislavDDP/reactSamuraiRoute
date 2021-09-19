import React from 'react'

class ProfileStatus extends React.Component {

    constructor() {
        super();
        this.input_status = React.createRef()
        this.state = {
            editMode: false
        }
      }
    

    turnOnEditMode = () =>  {
        this.setState({
            editMode: true
        })
    }

    turnOffEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    changeStatusText(event) {
        const text = event.target.value 
        debugger
        this.props.setStatus(text)
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                    ? <div onDoubleClick={ this.turnOnEditMode }>{this.props.status}</div>
                    : <div><input onChange={this.changeStatusText.bind(this)} autoFocus={true} onBlur={ this.turnOffEditMode } type="text" value={this.props.status} /></div> 
                }
            </div>
        )
    }
}

export default ProfileStatus
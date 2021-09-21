import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        status: this.props.status,
        editMode: false
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
        this.props.updateStatus(this.state.status)
    }

    changeStatusText = (event) => {
        const text = event.currentTarget.value 
        this.setState({
            status: text
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                    ? <div onDoubleClick={ this.turnOnEditMode }>{this.props.status || '-----'}</div>
                    : <div><input onChange={this.changeStatusText} 
                                  autoFocus={true} 
                                  onBlur={ this.turnOffEditMode } 
                                  type="text" 
                                  value={this.state.status} /></div> 
                }
            </div>
        )
    }
}

export default ProfileStatus
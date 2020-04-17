import React, {Component} from 'react'
import './index.css';
import './button.css';


class Button extends Component {
    render() {
        return (
            <div>
              <p styleName="small">Small</p>
              <p styleName="primary">Submit</p>
              <div styleName="colour">ABS</div>
            </div>
        )
    }
}

export default Button

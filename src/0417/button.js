import React, {Component} from 'react'
import './index.css';
import style from  './button.css';


class Button extends Component {
    render() {
        return (
            <div>
              <p className="small">Small</p>
              <p styleName="style.primary">Submit</p>
              <div styleName="style.colour">ABS</div>
            </div>
        )
    }
}

export default Button

import React, {Component} from 'react'
import main from  './index.css';
import style from  './button.css';


class Button extends Component {
    render() {
        return (
            <div>
              <p className={main.small}>Small</p>
              <p className={style.primary}>Submit</p>
              <div className={style.colour}>ABS</div>
            </div>
        )
    }
}

export default Button

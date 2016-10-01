import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Field} from './field';

class Preview extends React.Component<any, any> {
    render() {
        const field = [
            [1, 0, 1],
            [0, 1, 0],
            [0, 0 ,1]
        ]
        return <Field width="300" height="300" field={field} />;
    }
}

ReactDOM.render(<Preview />, document.querySelector("#root"));

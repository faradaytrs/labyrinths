import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Field} from './field';
import {ThickWallsField} from './ThickWallsField'

class Preview extends React.Component<any, any> {
    render() {
        const field = new ThickWallsField(50, 50);
        return <Field width="1000" height="1000" field={field} />;
    }
}

ReactDOM.render(<Preview />, document.querySelector("#root"));

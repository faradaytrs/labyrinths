///<reference path="node_modules/@types/react/index.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Preview extends React.Component<any, any> {
    render() {
        return <div></div>;
    }
}

ReactDOM.render(<Preview />, document.querySelector("#root"));

///<reference types="react"/>
///<reference types="react-dom"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Preview extends React.Component<any, any> {
    render() {
        return <div>1</div>;
    }
}

ReactDOM.render(<Preview />, document.querySelector("#root"));

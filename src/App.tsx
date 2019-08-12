import * as React from 'react';
import Dog from './Dog';

const component: React.FC = () => {
    return (
        <div>
            <Dog name={'pochi'} age={5} />
        </div>
    );
};

export default component;
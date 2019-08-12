import * as React from 'react';

type Props = {
    name: string;
    age: number;
};

const component: React.FC<Props> = (props: Props) => {
    return (
        <div>
            {props.age}歳の{props.name}です。
        </div>
    );
};

export default component;
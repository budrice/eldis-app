import React from 'react';
import Col from 'react-bootstrap/Col';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <Col md={12}>
            <div>
                <iframe src={src} title="github_budrice" crossorigin />
            </div>
        </Col>
    );
};

export default Iframe;
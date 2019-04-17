import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';

function Hit(props) {

    const { hit } = props

    return (
        <Card>
            <Image src={hit.image} />
            <Card.Content>
                <Card.Header>${hit.price}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                {hit.name}
            </Card.Content>
        </Card>
    )
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired
}

export default Hit
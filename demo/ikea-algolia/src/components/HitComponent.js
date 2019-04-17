import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';

function Hit(props) {

    const { hit } = props

    return (
        <Card>
            <Image src={hit.image} />
            <Card.Content>
                <Card.Header>${hit.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {hit.price}
            </Card.Content>
        </Card>
    )
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired
}

export default Hit
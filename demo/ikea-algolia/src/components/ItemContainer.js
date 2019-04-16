import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { Grid } from 'semantic-ui-react'

class ItemContainer extends Component {

    render() {

        let style = {
            width: '85%',
            margin: 'auto',
            paddingTop: '25px'
        }

        const { books } = this.props

        const makeItems = () => {
            return items.map(item => <ItemCard key={item.id} item={tem} />)
        }

        return (
            <div style={style}>
                <div className="bookCont">
                    <Grid stackable columns={3} >
                        <Grid.Row>
                            <Grid.Column>
                                {makeItems()[0]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[1]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[2]}
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                {makeItems()[3]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[4]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[5]}
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                {makeItems()[6]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[7]}
                            </Grid.Column>
                            <Grid.Column>
                                {makeItems()[8]}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ItemContainer
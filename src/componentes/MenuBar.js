import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import menuItems from '../datos/menuItems'
import { Link } from 'react-router-dom'
import '../css/MenuBar.css';

const styles = {
    list: {
        width: 250,
    },
    links: {
        textDecoration: 'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    }
};

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick(item) {
        this.setState(prevState => (
            { [item]: !prevState[item] }
        ))
    }

    handler(children) {
        const { classes } = this.props
        const { state } = this
        return children.map((subOption) => {
            if (!subOption.children) {
                return (
                    <div key={subOption.name}>
                        <ListItem className="children"
                            button
                            key={subOption.name}>
                            <Link
                                to={{pathname:subOption.url,
                                aboutProps:{
                                    nombre:subOption.name,
                                    ligas:subOption.ligas,
                                                                }}}
                                className={classes.links}
                                >
                                <ListItemText
                                    inset
                                    primary={subOption.name}
                                />
                            </Link>

                        </ListItem>
                    </div>
                )
            }
            return (
                <div key={subOption.name}>
                    <ListItem
                        button
                        onClick={() => this.handleClick(subOption.name)}>
                        <ListItemText
                            inset
                            primary={subOption.name} />
                        {state[subOption.name] ?
                            <span> - </span> :
                            <span> + </span>
                        }

                    </ListItem>
                    <Collapse
                        in={state[subOption.name]}
                        timeout="auto"
                        unmountOnExit
                    >
                        {this.handler(subOption.children)}
                    </Collapse>
                </div>
            )
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.list}>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open
                    classes={{ paper: classes.list }}>
                    <div>
                        <List>
                            {this.handler(menuItems.data)}
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
} export default withStyles(styles)(MenuBar)
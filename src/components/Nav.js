import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchCategories();
    }

    render() {
        const { categories, onClick, error } = this.props;
        const to = category => (
            category.id === '1'
              ? '/all'
              : `/category/${category.id}`
        );
        
        return (
            <div>
                {(() => {
                    if (error) {
                        return <p>エラーが発生しました。リロードして下さい。</p>
                    } else if (typeof categories === 'undefined') {
                        return <p>読み込み中...</p>
                    } else {
                        return <Drawer variant="permanent" >
                            <List style={{ width: 240}}>
                                {categories.map(category => (
                                    <ListItem
                                    button 
                                    key={`menu-item-${category.id}`}
                                    onClick={() => onClick(to(category))}
                                    >
                                        <ListItemText primary={category.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    }
                })()}
            </div>
        )
    }
}

Nav.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
};

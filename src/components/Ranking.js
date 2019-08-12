import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Ranking extends React.Component {
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }

    render() {
        const { category, ranking, error } = this.props;

        return (
            <div>
                <h2>{
                    typeof category !== 'undefined'
                    ? `${category.name}のランキング`
                    : ''
                }</h2>

                {(() => {
                    if (error) {
                        return <p>エラーが発生しました。リロードして下さい。</p>
                    } else if (typeof ranking === 'undefined') {
                        return <p>読み込み中...</p>
                    } else {
                        return ranking.map((item, i) => (
                            <Card
                              key={`ranking-item-${item.code}`}
                              style={{ display: 'inline-block', maxWidth: '220px', margin: '32px'}}
                            >
                                <CardMedia
                                  image={item.imageUrl}
                                  title={`${i + 1}位 ${item.name}`}
                                  style={{ height: '220px'}}
                                />
                                <CardContent>
                                    <Typography style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                        {`${i + 1}位　${item.name}`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                      raised
                                      color="secondary"
                                      fullWidth
                                      href={item.url}
                                    >商品ページ</Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                })()}
            </div>
        )
    }
}

Ranking.propTypes = {
    categoryId: PropTypes.string,
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
    error: PropTypes.bool.isRequired,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

Ranking.defaultProps = {
    categoryId: '1'
};
const getCategories = categoriesResponse => {
    const categoryArray = [{
        id: '1',
        name: 'すべてのカテゴリ'
    }];

    const allCategory = categoriesResponse.ResultSet['0'].Result.Categories.Children;
    
    for (let key in Object.keys(allCategory)) {
        if (typeof allCategory[key] === 'undefined') {
            continue;
        }
        categoryArray.push({
            id: allCategory[key].Id,
            name: allCategory[key].Title.Medium
        });
    };
    return categoryArray;
};

const initialState = {
    categories: [{
        id: '1',
        name: 'すべてのカテゴリ'
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_CATEGORIES':
            return action.payload.error
                ? { ...state, error: true}
                : { ... state, 
                    categories : getCategories(action.payload.categoriesResponse)
                };
        default:
            return state;
    }
}
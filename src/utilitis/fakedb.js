// use local storage as your db for now
const addToDb = id => {
    const exists = getDb();
    let tour_confirm = {};
    if (!exists) {
        tour_confirm[id] = 1;
    }
    else {
        tour_confirm = JSON.parse(exists);
        if (tour_confirm[id]) {
            const newCount = tour_confirm[id] + 1;
            tour_confirm[id] = newCount;
        }
        else {
            tour_confirm[id] = 1;
        }
    }
    updateDb(tour_confirm);
}

const getDb = () => localStorage.getItem('tour_confirm');

const updateDb = cart => {
    localStorage.setItem('tour_confirm', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const tour_confirm = JSON.parse(exists);
        delete tour_confirm[id];
        updateDb(tour_confirm);
    }
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('tour_confirm');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }
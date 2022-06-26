import { Beer, ShoppingCar, UnitsUpdate } from "../../interfaces";

interface Props {
    valid: boolean
    data: Beer[]
}

export const checkItem = (beer: Beer, car: ShoppingCar): Props => {
    let data: Beer[] = [];
    let valid = false;
    if (car.items.length < 0) return { valid: false, data: [] };

    data = car.items.map(item => {
        if (item.name === beer.name) {
            item.units += beer.units;
            valid = true;
        }
        return item;
    });

    return {
        data,
        valid
    };

};


export const changesUnits = (Beers: Beer[], updates: UnitsUpdate[]) => {
    const newLIst = Beers.map(item => {
        updates.forEach(update => {
            if (item.name == update.name) {
                item.units = update.units;
            }
        });

        return item;
    });

    return newLIst;
};
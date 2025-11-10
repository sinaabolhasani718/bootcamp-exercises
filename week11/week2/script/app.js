import { fetchData } from "./fetchData.js";

export function doubleAndAdd() {
    return fetchData()
        .then(first => {
            if (first < 2) {
                throw new RangeError("Not in valid range");
            }
            return fetchData().then(second => {
                if (second < 2) {
                    throw new RangeError("Not in valid range");
                }
                return first * 2 + second;
            });
        })
        .catch(error => {
            return error;
        });
}
doubleAndAdd().then(result => console.log(result));
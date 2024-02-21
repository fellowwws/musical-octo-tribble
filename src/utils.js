export function makeLabels(
    cluster = 'A', 
    cols = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'J'], 
    rows = 4, 
    aisles = 52
    ) {
    const labels = []; // ['A1-1A', 'A1-2A', ...]

    for (let aisle = 1; aisle <= aisles; aisle++) {
        for (let col of cols) {
            for (let row = 1; row <= rows; row++) {
                const label = `${cluster}${aisle}-${row}${col}`; // 'A1-1A';
                labels.push(label);
            }
        }
    }

    return labels;
}
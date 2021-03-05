
// You should implement your task here.

module.exports = function towelSort(matrix = []) {

    if (!matrix.length || !matrix) {
        return []
    }

    let res = []

    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            res = [...res, ...item.sort((a, b) => a - b)]
        } else {
            res = [...res, ...item.sort((a, b) => b - a)]
        }
    })

    return res

}


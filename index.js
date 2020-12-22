function reverse (sentence) {
    const delimiter = " "
    const arrWords = sentence.split(delimiter)

    return (arrWords.reverse()).join(delimiter)
}

module.exports = reverse
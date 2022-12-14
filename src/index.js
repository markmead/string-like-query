Object.assign(String.prototype, {
  like(searchData = {}) {
    const {
      splitAt = 3,
      searchAgainst = [],
      forceLowercase = false,
      looseSearch = false,
      eagerSearch = false,
    } = searchData

    const stringLength = this.length

    if (!eagerSearch && stringLength !== splitAt) {
      return true
    }

    const stringFormatted = forceLowercase ? this.toLowerCase() : this

    let stringChunks = []

    for (let loopPos = 0; loopPos < stringLength; loopPos += splitAt) {
      stringChunks.push(stringFormatted.substring(loopPos, loopPos + splitAt))
    }

    const includedResults = searchAgainst.flatMap((searchAgainstValue) => {
      const stringFormatted = forceLowercase
        ? searchAgainstValue.toLowerCase()
        : searchAgainstValue

      const chunksFiltered = looseSearch
        ? stringChunks
        : stringChunks.filter((stringChunk) => stringChunk.length === splitAt)

      return chunksFiltered.filter((stringChunk) =>
        stringFormatted.includes(stringChunk)
      )
    })

    return !!includedResults.length
  },
})

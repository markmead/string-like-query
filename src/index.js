export default function () {
  Object.assign(String.prototype, {
    like(searchData = {}) {
      const {
        splitAt = 3,
        searchAgainst = [],
        forceLowercase = false,
        looseSearch = false,
      } = searchData;

      const stringLength = this.length;
      const stringFormatted = forceLowercase ? this.toLowerCase() : this;

      let stringChunks = [];

      for (let i = 0; i < stringLength; i += splitAt) {
        stringChunks.push(stringFormatted.substring(i, i + splitAt));
      }

      const includedResults = searchAgainst.flatMap((searchAgainstValue) => {
        const stringFormatted = forceLowercase
          ? searchAgainstValue.toLowerCase()
          : searchAgainstValue;

        const chunksFiltered = looseSearch
          ? stringChunks
          : stringChunks.filter(
              (stringChunk) => stringChunk.length === splitAt
            );

        return chunksFiltered.filter((stringChunk) =>
          stringFormatted.includes(stringChunk)
        );
      });

      return !!includedResults.length;
    },
  });
}

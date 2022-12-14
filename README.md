# String `Like` Query

A looser but configurable approach to searching a string for a matching
substring 🔍

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/string-like-query@latest/dist/like.min.js"
></script>
```

### With a Package Manager

```shell
yarn add -D string-like-query

npm install -D string-like-query
```

```js
import like from 'string-like-query'
```

## Example

```js
const bookDetail = {
  title: 'Business Secrets of the Pharoahs',
  author: 'Mark Crorigan',
}

const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value

  const hasSearch = searchValue.like({
    splitAt: 3,
    searchAgainst: [bookDetail.title, bookDetail.author],
  })
})
```

#### Options

| Option         | Type    | Default | Description                                                       |
| -------------- | ------- | ------- | ----------------------------------------------------------------- |
| splitAt        | Number  | 3       | Point in the string to split it into a chunk.                     |
| searchAgainst  | Array   | []      | What values to search against.                                    |
| forceLowercase | Boolean | false   | If the search should be done all in lowercase.                    |
| looseSearch    | Boolean | false   | Limit the search to string chunks with a length of the `splitAt`. |
| eagerSearch    | Boolean | false   | If the search should filter before a string chunk is created.     |

### How it Works

Here are some searches and the results based on the example.

| Search | Found | Reason                                                                                                               |
| ------ | ----- | -------------------------------------------------------------------------------------------------------------------- |
| Mark   | True  | Because "Mar" is in the `bookDetail.author`                                                                          |
| k      | False | Because `looseSearch` isn't enabled, therefore "k" is never searched as it doesn't meet the min length of `splitAt`. |
| BusZZZ | True  | Because "Bus" is in the `bookDetail.title`                                                                           |

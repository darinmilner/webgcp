/**
 * Data library for Notes
 * @packageDocumentation
 */
/**
 * @ignore
 */

const list = `[
  {
    "id":"1","datetime":"2021-03-06T10:10Z","title":"Note 1"
  },
  {
    "id":"1","datetime":"2021-03-07T10:11Z","title":"Note 2"
  },
  {
    "id":"1","datetime":"2021-03-09T10:11Z","title":"Note 3"
  },
  {
    "id":"1","datetime":"2021-03-12T10:13Z","title":"Note 4"
  }
]`;

/**
 *
 * Returns kist of all notes
 */
export function getList() {
  return JSON.parse(list);
}

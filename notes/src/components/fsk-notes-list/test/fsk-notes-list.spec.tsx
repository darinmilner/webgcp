import { newSpecPage } from '@stencil/core/testing';

jest.mock("../../../library/NotesData.ts", () => ({
  getList: () => 
  JSON.parse(
    `[
  {
    "id":"1","datetime":"2021-03-06T10:10Z","title":"Note 1"
  },
  {
    "id":"2","datetime":"2021-03-07T10:11Z","title":"Note 2"
  },
  {
    "id":"3","datetime":"2021-03-09T10:11Z","title":"Note 3"
  },
  {
    "id":"4","datetime":"2021-03-12T10:13Z","title":"Note 4"
  }
]`
  )
}));
import { FskNotesList } from '../fsk-notes-list';

describe('fsk-notes-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FskNotesList],
      html: `<fsk-notes-list></fsk-notes-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fsk-notes-list>
        <mock:shadow-root>
          <div>
              <table>
                <thead>
                   <tr>
                      <th>#</th>
                      <th>Date/Time</th>
                      <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="note4">
                    <td>1</td>
                    <td>March 12, 2021 5:13 PM</td>
                    <td>Note 4</td>
                 </tr>
                  <tr id="note3">
                    <td>2</td> 
                    <td>March 9, 2021 5:11 PM</td>
                    <td>Note 3</td>
                  </tr>
                  <tr id="note2">
                    <td>3</td>
                    <td>March 7, 2021 5:11 PM</td>
                    <td>Note 2</td>
                  </tr>
                  <tr id="note1">
                    <td>4</td>
                     <td>March 6, 2021 5:10 PM</td>
                    <td>Note 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </mock:shadow-root>
      </fsk-notes-list>
    `);
  });

  it("Should handle row click", async () => {
    const page = await newSpecPage({
      components: [FskNotesList],
      html: `<fsk-notes-list></fsk-notes-list>`,
    });
    const row : HTMLElement = (page.root.shadowRoot.querySelector("#note1"));
    const spy = jest.fn();

    page.win.addEventListener("selectedNote", spy);
    row.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0].detail).toBe("1");
  
  })
});

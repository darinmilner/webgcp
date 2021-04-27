import { Component, EventEmitter, h, Event } from '@stencil/core';
import {getList} from "../../library/NotesData";
import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");
/**
 * fsk-notes-list
 */
@Component({
  tag: 'fsk-notes-list',
  styleUrl: 'fsk-notes-list.css',
  shadow: true,
})
export class FskNotesList {

  /**
   * Sent when user clicks on a note
   * @event
   */
  @Event() selectedNote: EventEmitter;
  /**
   * id of the selected note
   * @param noteId
   */
  onSelectNote(noteId: number) {
    console.log(noteId);
    this.selectedNote.emit(noteId);
  }

  render() {
    const notes = getList();
    //console.log(notes);
    return (
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
           {notes.reverse().map((note: any, index:number) =>
             <tr id={"note"+note.id} onClick={() => this.onSelectNote(note.id)} >
               <td>{index + 1}</td>
               <td>{dayjs(note.datetime).format("MMMM D, YYYY h:mm A")}</td>
               <td>{note.title}</td>
             </tr>
            )}
         </tbody>
       </table>
     </div>
    );
  }

}

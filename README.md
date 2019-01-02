# README

## Whimsy Notes 
Whimsy Notes is an Evernote clone that implements near identical appearance and limited functionality of the original site.
Whimsy Notes is a creation of [Aaron Zheng](https://github.com/aaxzheng)

## Access 
You can [access](https://whimsy-notes.herokuapp.com) the site at https://whimsy-notes.herokuapp.com

## Key Features 
#### Rich Text Editing
A rich text experience is made possible through implementation and formatting of the API text editor [ReactQuill](https://github.com/zenoamaro/react-quill).

#### CRUD experience
The ability to create, read, update and destroy notes, and to certain extents notebooks and tags.

## How to Use
1. Click Log in or Sign Up in either the top right or bottom of the splash page.
2. Either create a new account or proceed with a demo user.
3. Pressing the Green button on the sidebar called New Note will generate a new note for you to edit.
4. Click the note to begin editing it and allow a moment for the application to save your work when done.

## Code Snippets
Trash is collected and removed utilizing a custom route that grabs all notes with a specified property and deletes them one at a time.
  
 ``` ruby
 
     namespace :api, defaults: { format: :json } do
     delete '/notes/deleted', to: 'notes#empty_trash'
     resources :users, only: [:create]
     resource :session, only: [:create, :destroy]
```

The route points at a method defined in the controller that handles the removal of the files.

``` ruby  
    
    def empty_trash
    @notes = current_user.notes.where(trashed: true)
     @notes.each do |note|
       note.destroy
     end
     @notes = current_user.notes.where(trashed: false)
     render "api/notes/index"
     end
```  
Tags are organized using a small trick to separate the tags by first letter.
``` javascript    
      const tags = this.props.tags.slice(0);
      let sorted = tags.sort((a,b) => a.tag.toLowerCase().localeCompare(b.tag.toLowerCase()));
      const lists = [];
     while (sorted.length > 0 ) {
      let compare = sorted[0].tag[0].toLowerCase();
      let category = [];
      category.push(sorted.shift());
      for (let i = 0; i < sorted.length; i++) {
        if(sorted[i].tag[0].toLowerCase() === compare) {
          category.push(sorted[i]);
          sorted.splice(i,1);
          i--;
        }
      }
      lists.push(category);
    }
```
This method allows each tag to compare its first character with the first tag's character (the first tag is shifted off so the array is reduced each iteration.) and organized into unique arrays for tags that share the same characters. 

An important feature of this note-taking application is how the index determines which notes to display. This is accomplished by making the index act as a filter. 
``` javascript
      const msp = (state,ownProps) => {
    let notes;
    let trash = false
    switch(state.entities.results.obj) {
      case "trash":
        notes = Object.values(state.entities.notes);
        trash = true;
        break;
      case "notebook":
        const notebook = state.entities.notebooks[state.entities.results.array];
        notes = notebook.note_ids.map(noteId => state.entities.notes[noteId]);
        break;
      case "search":
        notes = state.entities.results.array;
        break;
      default:
        notes = Object.values(state.entities.notes);
        break;
    }
```    
The cases in the index container will dictate what notes will appear in the props. Additional modifiers are added as necessary to the props for special cases such as when the user presses the trash button or submits a search request. If no inputs are given, the index will default to displaying all notes.

## Future Features 
#### Improved User Experience 
There will be updates to the responsiveness and quality of the interface to ensure that the experience is as seemless and rich as the original site.
#### Improved Search 
The search currently acts as a very simple filter and will eventually be replaced by a more efficient and smoother search component.
#### Image Upload
Currently the site lacks the ability to store images on notes, this will eventually be updated. 



import React from 'react'
import PropTypes from 'prop-types'
import { Note } from '../Note/Note'

class NoteList extends React.Component {

    static defaultProps = {
        notes: [
            {"noteText": "You have no notes! Add one above.", "postedBy": "-", "datePosted": '2019-02-23 14:00:00', "edited": false}
        ]
    };

    state = {
        loading: false
    };

    componentDidMount() {
      this.props.updateHandler()
    }

    render() {
        const { notes } = this.props;
        const { groups } = this.props;
        const { updateHandler } = this.props;
        return (
            <div>
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {notes.map(
                            (note, i) =>
                                <Note
                                    key={i}
                                    noteText={note.entryText}
                                    postedBy={note.postedBy}
                                    timePosted={note.timePosted}
                                    noteId={note.noteId}
                                    edited={this.state.open}
                                    updateHandler ={updateHandler}
                                    groups={groups}/>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default NoteList

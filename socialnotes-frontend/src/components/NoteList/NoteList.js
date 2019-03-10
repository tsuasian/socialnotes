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

    componentDidUpdate() {
        console.log("The component just updated")
    }

    render() {
        const { notes } = this.props;
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
                                    edited={this.state.open}/>
                        )}
                    </div>
                }
            </div>
        )
    }
}

Note.propTypes = {
    noteText: PropTypes.string,
    postedBy: PropTypes.string,
    datePosted: PropTypes.string,
    edited: PropTypes.bool
};

export default NoteList
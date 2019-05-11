import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { onGetCharacters, getSpecificPage } from '../redux/actions/charactersActions'

class Paginated extends PureComponent {

    componentDidMount() {
        this.props.onGetCharacters()
    }

    render() {
        //console.log(this.props)
        let pageName = `page${this.props.currentPage}`
        let pageIds = this.props.pages[pageName] || []

        return (
            <div style={{ marginBottom: 50 }}>
                <ul>
                    {pageIds.map((id, i) => <li key={i} >{this.props.chars[id].name}</li>)}
                </ul>
                <span
                    style={styles.link}
                >{"<< Prev"} </span>
                <span>{" | "}</span>
                <span
                    style={styles.current}
                >{this.props.currentPage}</span>
                <span>{" | "}</span>
                <span
                    style={styles.link}
                    onClick={() => this.props.getSpecificPage(Number(this.props.currentPage) + 1)}
                >{"Next >>"}</span>
            </div>
        )
    }
}

export default connect(
    state => state.characters,
    { onGetCharacters, getSpecificPage }
)(Paginated)

let styles = {
    link: {
        cursor: "pointer",
        fontSize: "2rem",
        color: "lightblue"
    },
    current: {
        color: "white",
        fontSize: "2.5rem",
        margin: 10
    }
}
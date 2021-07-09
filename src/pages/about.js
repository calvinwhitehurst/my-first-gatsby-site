import * as React from 'React'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link to="/about">Back to Home</Link>
            <p>Hi there! This is the "About" page.  It is built on Gatsby.</p>
        </main>
    )
}

export default AboutPage
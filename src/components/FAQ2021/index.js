import React, { Component } from "react";

import { Accordion, Card } from "react-bootstrap";

import styles from "./styles.module.css"

// For some reason when we pass in the style through the className it gets overridden by the default
// Bootstrap Accordion styles, so we have to pass in our custom styles like this.
var accordionStyle = {
    width: "100%",
    borderRadius: "25px",
    borderWidth: "1px",
    borderBottomStyle: "solid",
    borderColor: "white",
    backgroundColor: "transparent",
    marginBottom: "0px",
    marginTop: "10px"
}
var cardStyle = {
    borderRadius: "25px",
    borderWidth: "1px",
    borderBottomStyle: "solid",
    borderColor: "white",
    backgroundColor: "transparent",
    marginBottom: "0px",
    marginTop: "10px"
}
var accordionToggleStyle = {
    borderRadius: "30px",
    borderWidth: "1px",
    borderColor: "white",
    backgroundColor: "transparent",
    marginBottom: "0px"
}

export default class FAQ2021 extends Component {
    render() {
        return (
            <Accordion style={ accordionStyle }>
                { this.props.faqs.map((item, index) => (
                    <Card style={cardStyle}>
                        <Accordion.Toggle as={Card.Header} eventKey={ index } style={ accordionToggleStyle }>
                            <p className={styles.white}>{ item.question }</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={ index }>
                            <Card.Body>
                                {/* Janky way of adding spaces between lines if it's not the last line in the answer */}
                                {item.answer.map((line, index) => {
                                    if (index !== item.answer.length - 1) {
                                        return (
                                            <div>
                                                <p className={styles.white}>{ line }</p>
                                                <br/>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                <p className={styles.white}>{ line }</p>
                                            </div>
                                        )
                                    }
                                })}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        )
    }
}
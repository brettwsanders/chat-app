import React, { Component } from 'react';
const $ = el => document.querySelector(el);

class Form extends Component {
    onSendMessage(event) {
        event.preventDefault();
        const textarea = $(".message-box")
        const input = textarea && textarea.value;
        // convert input to json
        // const message = new Message(input)
        $("pre .json").innerHTML = input;
        textarea.value = "";
    }

    render() {
        return (
            <section className="form-section">
                <form className="chat-form" onSubmit={this.onSendMessage}>
                    <textarea
                        className="message-box"
                        autoFocus
                        placeholder="Message here...">
                     </textarea>
                    <input type="submit" value="Send" />
                </form>
            </section>
        );
    }
}

export default Form;


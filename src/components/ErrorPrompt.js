import React from 'react';

/**
 * Prompt for latest uncaught error.
 * @extends React.Component
 *
 * @param props {object}
 * @param props.callback {onLeaveCallback}
 * @param props.client {object}
 * @param props.message {string}
 * @param props.prompt {prompt}
 */
class ErrorPrompt extends React.Component {
  handleError = ({ error }) => {
    const { callback, client, prompt, ...promptProps } = this.props;
    const data = {
      client: client,
      error: {
        message: error.message,
        stack: error.stack
      }
    };
    prompt(callback, { ...promptProps, data: data });
  }

  componentDidMount() {
    window.addEventListener('error', this.handleError);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleError);
  }

  render() {
    return null;
  }
}

export default ErrorPrompt;

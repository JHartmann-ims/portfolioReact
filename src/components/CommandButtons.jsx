import React from 'react';
import PropTypes from 'prop-types';


const CommandButtons = ({ commands, onCommand }) => (
  <div className="flex flex-wrap gap-2 p-2 bg-gray-800">
    {Object.keys(commands).map((cmd) => (
      <button
        key={cmd}
        onClick={() => onCommand(cmd)}
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 active:bg-gray-800 text-base"
      >
        {cmd}
      </button>
    ))}
  </div>
);

CommandButtons.propTypes = {
  commands: PropTypes.object.isRequired,
  onCommand: PropTypes.func.isRequired,
};

export default CommandButtons;
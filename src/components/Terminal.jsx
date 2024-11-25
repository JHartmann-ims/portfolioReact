import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Code,
  Terminal as TerminalIcon,
  Loader2,
} from 'lucide-react';
import { FaGithub as Github, FaLinkedinIn as Linkedin, FaYoutube as Youtube } from 'react-icons/fa';
import CommandButtons from './CommandButtons';

const CommandOutput = ({ children }) => (
  <div className="mt-2">{children}</div>
);

CommandOutput.propTypes = {
  children: PropTypes.node.isRequired,
};

const LoadingOutput = () => (
  <div className="flex items-center space-x-2 text-primary">
    <Loader2 className="animate-spin" size={16} />
    <span>Processing command...</span>
  </div>
);

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const COMMANDS = {
    help: {
      description: 'Show available commands',
      action: () => (
        <CommandOutput>
          <div className="space-y-1">
            <p className="text-primary">Available commands:</p>
            <p className="ml-2">
              <span className="text-secondary">github</span> - Opens my GitHub profile
            </p>
            <p className="ml-2">
              <span className="text-secondary">linkedin</span> - Opens my LinkedIn profile
            </p>
            <p className="ml-2">
              <span className="text-secondary">youtube</span> - Opens my YouTube channel
            </p>
            <p className="ml-2">
              <span className="text-secondary">mahara</span> - Opens my mahara portfolio
            </p>
            <p className="ml-2">
              <span className="text-secondary">source</span> - Opens the source code of this website
            </p>
            <p className="ml-2">
              <span className="text-secondary">clear</span> - Clears the terminal
            </p>
            <p className="ml-2">
              <span className="text-secondary">help</span> - Shows this help message
            </p>
          </div>
        </CommandOutput>
      ),
    },
    github: {
      description: 'Open GitHub profile',
      action: () => (
        <CommandOutput>
          <div className="flex items-center space-x-2">
            <Github className="text-white" size={18} />
            <span className="text-primary">Opening GitHub profile: JHartmann-ims...</span>
          </div>
        </CommandOutput>
      ),
      link: 'https://github.com/JHartmann-ims',
    },
    linkedin: {
      description: 'Open LinkedIn profile',
      action: () => (
        <CommandOutput>
          <div className="flex items-center space-x-2">
            <Linkedin className="text-white" size={18} />
            <span className="text-primary">Opening LinkedIn profile: Julian Hartmann...</span>
          </div>
        </CommandOutput>
      ),
      link: 'https://www.linkedin.com/in/julian-hartmann-a17999239/',
    },
    youtube: {
      description: 'Open YouTube channel',
      action: () => (
        <CommandOutput>
          <div className="flex items-center space-x-2">
            <Youtube className="text-white" size={18} />
            <span className="text-primary">Opening YouTube channel: quacksterr...</span>
          </div>
        </CommandOutput>
      ),
      link: 'https://www.youtube.com/channel/UCCQpiU3-tQ1gbrj7JdVyqKQ',
    },
    mahara: {
      description: 'Open Mahara',
      action: () => (
        <CommandOutput>
          <div className="flex items-center space-x-2">
            <span className="text-primary">Opening Mahara Projects...</span>
          </div>
        </CommandOutput>
      ),
      link: 'https://portfolio.bbbaden.ch/view/view.php?t=hJRKLrHia4WAlUx1MCPs',
    },
    source: {
      description: 'Open Source Code from this website',
      action: () => (
        <CommandOutput>
          <div className="flex items-center space-x-2">
            <Code className="text-white" size={18} />
            <span className="text-primary">Opening source code on GitHub...</span>
          </div>
        </CommandOutput>
      ),
      link: 'https://github.com/JHartmann-ims/portfolioReact',
    },
    clear: {
      description: 'Clears the terminal',
      action: () => {
        setHistory([]);
        return null; 
      },
    },
  };

  useEffect(() => {
    setHistory([
      {
        input: '',
        output: (
          <div className="space-y-1">
            <p className="text-primary font-bold">Find me on the web!</p>
            <p className="text-gray-400">Type 'help' to see available commands.</p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    const command = COMMANDS[trimmedCmd];

    if (command) {
      if (command.link) {
        setIsLoading(true);
        setHistory((prev) => [
          ...prev,
          { input: cmd, output: <LoadingOutput /> },
        ]);

        await new Promise((resolve) =>
          setTimeout(resolve, 500 + Math.random() * 500)
        );

        setIsLoading(false);

        window.open(command.link, '_blank');

        setHistory((prev) => [
          ...prev.slice(0, -1),
          { input: cmd, output: command.action() },
        ]);
      } else {
        // For 'clear' and other non-link commands
        const output = command.action();
        if (output !== null) {
          setHistory((prev) => [...prev, { input: cmd, output }]);
        }
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: (
            <span className="text-red-400">
              Command not found. Type 'help' for available commands.
            </span>
          ),
        },
      ]);
    }
  };

  const handleButtonCommand = (cmd) => {
    if (!isLoading) {
      handleCommand(cmd);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-lg overflow-hidden bg-gray-900 shadow-xl">
        <div className="bg-gray-800 px-4 py-2 items-center justify-between hidden sm:flex">
          <div className="flex items-center space-x-2">
            <TerminalIcon size={18} className="text-gray-400" />
            <span className="text-gray-200 font-medium">Julian's PowerShell</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-base-300" />
            <div className="w-3 h-3 rounded-full bg-base-300" />
            <div className="w-3 h-3 rounded-full bg-base-300" />
          </div>
        </div>

        <div className="sm:hidden">
          <CommandButtons commands={COMMANDS} onCommand={handleButtonCommand} />
        </div>

        <div
          ref={terminalRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.input && (
                <div className="flex items-center space-x-2">
                  <span className="text-primary">➜</span>
                  <span className="text-white">{entry.input}</span>
                </div>
              )}
              <div className="ml-4">{entry.output}</div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-2">
            <span className="text-primary">➜</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white"
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Terminal;

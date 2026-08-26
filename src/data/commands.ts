export interface CommandEntry {
  cmd: string;
  desc: string;
}

export interface CommandCategory {
  title: string;
  commands: CommandEntry[];
}

// Single source of truth for every known command — HelpOutput renders these
// categories directly, and useTerminal's autocomplete flattens them into a
// suggestion list. Add a command here once and both surfaces stay in sync.
export const commandCategories: CommandCategory[] = [
  {
    title: "Navigation",
    commands: [
      { cmd: 'pwd', desc: 'Show current location' },
      { cmd: 'ls', desc: 'List available files' },
      { cmd: 'cd', desc: 'Change directory' },
      { cmd: 'tree', desc: 'Show portfolio structure' },
      { cmd: 'cat', desc: 'Read file contents' },
      { cmd: 'clear', desc: 'Clear terminal' },
    ]
  },
  {
    title: "Profile",
    commands: [
      { cmd: 'about', desc: 'About me' },
      { cmd: 'whoami', desc: 'Fun command identifying yourself' },
      { cmd: 'neofetch', desc: 'Display developer profile' },
      { cmd: 'resume', desc: 'Resume summary and options' },
      { cmd: 'view resume', desc: 'Display full resume in terminal' },
      { cmd: 'download resume', desc: 'Download PDF resume' },
      { cmd: 'education', desc: 'Educational background' },
      { cmd: 'experience', desc: 'Work experience' },
      { cmd: 'contact', desc: 'Contact information' },
      { cmd: 'github', desc: 'Open GitHub profile' },
      { cmd: 'linkedin', desc: 'Open LinkedIn profile' },
      { cmd: 'email', desc: 'Copy email address' },
    ]
  },
  {
    title: "Portfolio",
    commands: [
      { cmd: 'projects', desc: 'View my projects' },
      { cmd: 'achievements', desc: 'Achievements & Hackathons' },
      { cmd: 'publications', desc: 'Research Publications' },
      { cmd: 'certs', desc: 'Certifications' },
      { cmd: 'learning', desc: 'Currently learning topics' },
      { cmd: 'stack', desc: 'Technical stack breakdown' },
      { cmd: 'skills', desc: 'Technical skills' },
    ]
  },
  {
    title: "Utilities",
    commands: [
      { cmd: 'help', desc: 'Show all available commands' },
      { cmd: 'theme', desc: 'Switch terminal themes' },
      { cmd: 'analytics', desc: 'View portfolio statistics' },
      { cmd: 'history', desc: 'Show command history' },
      { cmd: 'date', desc: 'Show current date and time' },
      { cmd: 'status', desc: 'Candidate availability status' },
    ]
  },
  {
    title: "Fun Commands",
    commands: [
      { cmd: 'coffee', desc: 'Brew a virtual coffee' },
      { cmd: 'hack nasa', desc: 'Simulate a hacking sequence' },
      { cmd: 'sudo hire-me', desc: 'Recruiter shortcut' },
    ]
  }
];

export const allCommands: string[] = commandCategories.flatMap(
  category => category.commands.map(c => c.cmd)
);

const Navbar = ({
  onHomeClick,
  onProjectsClick,
  onSkillsClick,
  onAboutClick,
  onContactClick,
}) => {
  return (
    <nav className='py-4 px-10 bg-[#0d1117] text-gray-100 flex justify-between sticky top-0 border-b z-50'>
      <h1 className='py-1 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600'>
        Shubham Dunagrwal
      </h1>

      <ul className='text-white text-lg flex space-x-5 cursor-pointer'>
        <li
          onClick={onHomeClick}
          className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
        >
          Home
        </li>
        <li
          onClick={onProjectsClick}
          className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
        >
          Projects
        </li>
        <li
          onClick={onSkillsClick}
          className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
        >
          Skills
        </li>
        <li
          onClick={onAboutClick}
          className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
        >
          About
        </li>
        <li
          onClick={onContactClick}
          className="text-xl font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r from-sky-500 to-violet-600"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

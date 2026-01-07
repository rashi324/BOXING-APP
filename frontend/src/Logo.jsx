const Logo = ({ size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rashi Boxing Logo"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#e10600" strokeWidth="4" />

      {/* Fist shape (abstract) */}
      <rect x="32" y="28" width="36" height="28" rx="6" fill="#fff" />
      <rect x="32" y="56" width="36" height="14" rx="6" fill="#e10600" />
    </svg>
  );
};

export default Logo;

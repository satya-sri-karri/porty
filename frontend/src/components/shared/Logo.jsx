const Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="28" height="28" rx="8" fill="var(--accent)" />
    <path d="M10 24V8h6.5a5 5 0 0 1 0 10H10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="22" cy="22" r="3" fill="#fff" opacity="0.9" />
  </svg>
);

export default Logo;
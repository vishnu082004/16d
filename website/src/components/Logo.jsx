function BrandSlogan() {
  return (
    <span className="logo-lockup__slogan">
      Shaping{' '}
      <span className="logo-lockup__leader">
        <svg className="logo-lockup__crown" viewBox="0 0 24 16" aria-hidden="true">
          <path d="M2 12 1 4l5 4 6-7 6 7 5-4-1 8H2Zm1 1h18v2H3z" />
        </svg>
        L
      </span>
      eaders, Building Future
    </span>
  );
}

export default function Logo() {
  return (
    <span className="logo-lockup">
      <img className="logo" src="/images/brand/logo-stacked.png" alt="16Dimensions" width="638" height="400" />
      <BrandSlogan />
    </span>
  );
}

// The footer uses the complete brand lockup, including the crown detail in
// the slogan. The compact header mark keeps the slogan as live text.
export default function Logo({ full = false }) {
  return (
    <span className="logo-lockup">
      <img
        className={`logo${full ? ' logo--full' : ''}`}
        src={full ? '/images/brand/logo-16d.png' : '/images/brand/logo-stacked.png'}
        alt={full ? '16Dimensions — Shaping Leaders, Building Future' : '16Dimensions'}
        width={full ? 638 : 638}
        height={400}
      />
      {!full && <span className="logo-lockup__slogan">Shaping Leaders, Building Future</span>}
    </span>
  );
}

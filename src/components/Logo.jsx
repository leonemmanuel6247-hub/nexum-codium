export default function Logo({ className = '' }) {
  return (
    <img
      src="/nexum-logo.png"
      alt=""
      className={`brand-mark ${className}`.trim()}
      width="40"
      height="40"
      aria-hidden="true"
      draggable="false"
    />
  )
}
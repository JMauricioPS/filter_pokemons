export default function Loading({ title }) {
  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-secondary">{title}</p>
    </div>
  );
}

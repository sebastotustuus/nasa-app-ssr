import './style.css';
export default function MainContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 flex flex-row gap-16">
      {children}
    </div>
  );
}

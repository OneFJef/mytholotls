export default function footer() {
  return (
    <div className="sticky bottom-0 bg-white z-50">
      <div className="flex justify-center items-center p-2">
        Copyright © {new Date().getFullYear()} Mytholotls.
      </div>
    </div>
  );
}

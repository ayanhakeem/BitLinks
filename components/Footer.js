export default function Footer() {
  return (
    <footer className="py-4 border-t">
      <p className="text-center text-sm text-gray-500 ">
        © {new Date().getFullYear()} BitLinks. All rights reserved.
      </p>
    </footer>
  );
}

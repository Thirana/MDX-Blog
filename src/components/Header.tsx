export default function Header({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 dark:bg-gray-800 p-8">{children}</div>;
}

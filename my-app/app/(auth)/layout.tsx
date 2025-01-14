function AuthLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      {children}
    </div>
  );
}

export default AuthLayout;

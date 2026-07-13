function LoadingPage() {
  return (
    <div className="flex h-125 items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />

        <h2 className="font-semibold">Loading...</h2>
      </div>
    </div>
  );
}

export default LoadingPage;

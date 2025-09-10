export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto px-6">
        <div className="h-12 bg-surface rounded-lg w-1/3 mx-auto"></div>
        <div className="h-6 bg-surface rounded w-2/3 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-surface rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

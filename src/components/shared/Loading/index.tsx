const Loading = ({
  title,
  className = "",
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`flex h-screen items-center justify-center ${className}`}>
      <div className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
      </div>

      {/* <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
      </div> */}
    </div>
  );
};

export default Loading;

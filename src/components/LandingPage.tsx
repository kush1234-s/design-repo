export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#f9eddc] overflow-hidden">
      <section className="relative h-screen rounded-bl-[50px] rounded-br-[50px] ">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            controlsList="nodownload"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#094766]/30" />
        </div>

        <header className="relative z-10 flex items-center justify-between px-6 py-5 mb-8">
          <div className="w-12 h-10">
            <img
              src="/asset-9-1.svg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden lg:block absolute left-8 top-120">
            <div className="rotate-270 origin-top-left">
              <img src="/asset-2-1.svg" alt="Neptune" className="h-10 w-auto" />
            </div>
          </div>

          <button
            type="button"
            className="bg-[#f9a058]/50 hover:bg-[#f9a058]/60 transition-all duration-300 md:px-7 px-2 py-4 rounded-full shadow-lg text-white font-semibold text-base tracking-tight"
          >
            Get Started
          </button>
        </header>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-80px)] px-4 ">
          <h1
            className="text-white 
             text-xl sm:text-3xl md:text-4xl lg:text-[65px]
             font-normal text-center max-w-4xl
             mt-14 md:mt-40 lg:mt-0
             leading-tight mb-16"
          >
            Take the next step together, or explore how we can guide you.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl px-4">
            <PathCard
              pathNumber="01"
              title="We are still trying to understand out money values, can you help guide this conversation?"
            />

            <PathCard
              pathNumber="02"
              title="We have a clear vision on our next step as partners but need guidance on whats next?"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface PathCardProps {
  pathNumber: string;
  title: string;
}

function PathCard({ pathNumber, title }: PathCardProps) {
  return (
    <article className="glass-card bg-white/10 backdrop-blur-sm rounded-[50px] border border-white/30 p-8 lg:p-12 flex flex-col justify-between md:min-h-[415px] sm:min-h-[200px]  hover:backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_22px_11px_rgba(255,255,255,0.1)]">
      <div className="flex justify-start relative z-10">
        <span className="text-white text-base font-bold tracking-widest uppercase">
          Path {pathNumber}.
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center py-8 relative z-10">
        <p className="text-white text-2xl lg:text-[32px] font-medium leading-tight text-center">
          {title}
        </p>
      </div>

      <div className="flex justify-center relative z-10">
        <button
          type="button"
          className="glass-button bg-[#84ff88]/40 hover:bg-[#84ff88]/50  border border-[#84ff88]/40 transition-all duration-300 px-7 py-4 rounded-full text-white font-semibold text-base tracking-tight shadow-[0_8px_24px_rgba(132,255,136,0.2),inset_0_1px_0_rgba(132,255,136,0.6),inset_0_-1px_0_rgba(132,255,136,0.2)]"
        >
          <span className="relative z-10">Let's Start Here</span>
        </button>
      </div>
    </article>
  );
}

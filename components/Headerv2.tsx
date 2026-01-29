<div className="w-full sticky top-0 z-50">
      {/* Top navy bar */}
      <header className="relative w-full md:w-screen bg-byuNavy text-white py-4 shadow-md">
        <div className="px-6 flex items-center justify-between">
          {/* Left: BYU Logo + Title */}
          <div className="flex items-center">
            <a
              // ref={logoRef} // <-- measure this block
              href="https://www.byu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 border-r-[1px] border-byuRoyal"
            >
              <img src={NEXT_PUBLIC_BASE_PATH + "/BYU monogram_white.png"} alt="Logo" className="h-10 w-auto" />
            </a>
            <h1 className="text-2xl">ECE Purchasing</h1>
          </div>
          <Navbar />
        </div>
      </header>
    </div>
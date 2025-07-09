export default function Footer() {
  return (
    <>
      <footer className=" w-[100vw] bg-stone-800 h-fit contain-content">
        <div className="h-[100%] w-[100%]">
            <div className="m-2 h-[100%] w-auto">
            <div className="w-auto">
                <div className="w-fit">
                    <div
                        id="logo"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text"
                    >
                        iNotebook
                    </div>
                    </div>
                    <h2>
                    iNotebook is your secure online notebook — write anytime, and
                    we’ll keep your notes safe and organized
                    </h2>
            </div>
            </div>
            <div className="w-[100%] border-t-[.1px] border-gray-100 opacity-50  ">
                <p className="text-center text-sm text-gray-500 mt-1 mb-2">
                    © 2025 iNotebook. All rights reserved.
                </p>

            </div>
        </div>
      </footer>
    </>
  );
}

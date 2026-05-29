import { useState, useRef, useEffect } from "react";

function SearchableSelect({ markets = [], market, setMarket }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  // 🔍 Filter
  const filteredMarkets = markets.filter((m) =>
    m.toLowerCase().includes(search.toLowerCase())
  );

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-56">
      
      {/* 🔽 Input */}
      <input
        type="text"
        placeholder="Select country..."
        value={open ? search : market || ""}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        className="w-full bg-white border border-blue-300 text-blue-800 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute z-10 w-full bg-white border border-blue-300 rounded-lg shadow-lg max-h-48 overflow-y-auto mt-1">
          
          {filteredMarkets.length > 0 ? (
            filteredMarkets.map((m) => (
              <div
                key={m}
                onClick={() => {
                  setMarket(m);
                  setSearch("");
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-blue-800 text-left"
              >
                {m}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">
              No results found
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default SearchableSelect;
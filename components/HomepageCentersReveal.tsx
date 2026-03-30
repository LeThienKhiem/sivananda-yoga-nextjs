const centers = [
  {
    title: "DALAT MOUNTAIN RESORT",
    location: "Tuyen Lam Lake, Da Lat",
    image:
      "https://images.unsplash.com/photo-1549416878-b9ca95e26903?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "HCMC CITY OASIS",
    location: "District 3, TP.HCM",
    image:
      "https://images.unsplash.com/photo-1583418911556-9799986b510c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "HANOI HERITAGE CENTER",
    location: "Hoan Kiem, Ha Noi",
    image:
      "https://images.unsplash.com/photo-1601004147366-c95679c21b2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "PHU QUOC BEACH SANCTUARY",
    location: "Bai Truong, Phu Quoc",
    image:
      "https://images.unsplash.com/photo-1586500036706-419a3de65677?q=80&w=400&auto=format&fit=crop",
  },
];

export default function HomepageCentersReveal() {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-[#093C0C] min-h-[35vh] flex items-center justify-center z-0 pt-10 pb-6 md:pt-16 md:pb-8 shadow-inner">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 max-w-[1200px] mx-auto px-4 md:px-8 w-full">
        {centers.map((center) => (
          <div key={center.title} className="flex flex-col gap-2 rounded-lg overflow-hidden shadow-md bg-white pb-3">
            <img src={center.image} alt={center.title} className="w-full h-32 md:h-40 object-cover" />
            <div className="px-3">
              <h4 className="font-bold text-sm md:text-base text-[#093C0C]">{center.title}</h4>
              <p className="text-xs text-gray-600">{center.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

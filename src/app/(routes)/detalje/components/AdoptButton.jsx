export default function AdoptButton({ name }) {
  return (
    <button className="mt-6 bg-[#F2968F] font-manrope font-medium text-white py-2 px-4 rounded-[60px] w-full">
      <span className="font-bold">Adopter</span> {name}
    </button>
  );
}

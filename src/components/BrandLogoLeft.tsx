export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      {/* ESSENCE Brand Logo */}
      <img 
        src="/logo.svg" 
        alt="ESSENCE"
        className="h-8 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold tracking-wide">ESSENCE</span>';
        }}
      />
    </a>
  )
}
import brackets from "../assets/svg/Brackets"

export const Tagline = ({className, children}) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-neutral-3">{children}</div>
      {brackets("right")}
    </div>
  )
}

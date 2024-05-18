
export default function ResonCard({reason}) {

  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center text-center px-2 ">
        <>{reason?.icon}</>
        <h4 className="text-xl font-semibold">{reason?.title}</h4>
        <p className="text-sm">{reason?.description}</p>
    </div>
  )
}

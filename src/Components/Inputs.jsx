import { BiCurrentLocation, BiSearch } from "react-icons/bi"

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input className="text-gray-500 text-xl font-light p-2 shadow-xl w-full capitalize focus:outline-none placeholder:lowercase" type="text" placeholder="search by city..." />
            <BiSearch size={30} className="cursor-pointer target:transition ease-out hover:scale-125 "/>
            <BiCurrentLocation size={30} className="cursor-pointer target:transition ease-out hover:scale-125 "/>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button>{/*  */}</button>
            <button></button>
        </div>
    </div>
  )
}

export default Inputs
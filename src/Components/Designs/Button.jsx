import React from 'react'

function Button() {
  return (
   <label
  for="nav_bar_icon"
  class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
>
  <input id="nav_bar_icon" type="checkbox" class="hidden peer" />
  <div
    class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
  ></div>
  <div
    class="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
  ></div>
  <div
    class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
  ></div>
</label>


  )
}

export default Button
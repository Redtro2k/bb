"use client"

import Image from "next/image";
import { useState } from "react";
import { Heart, Gift, Sparkles, BookOpen } from "lucide-react";
import {Button} from './components/ui/button'
import { Transition } from "@headlessui/react";

export default function Home() {
  const [message, setMessage] = useState("Love mo ako?! ❤️");
  const [showPoem, setShowPoem] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-red-500 p-4">
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center max-w-md w-full border border-red-300">
      <Image 
        src="https://github.com/Redtro2k/bb/blob/main/public/images/IMG_0642.jpg?raw=true" 
        alt="Valentine's Day"
        width={400} 
        height={250} 
        className="rounded-lg mb-4 shadow-md w-full"
        unoptimized={true}
      />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 flex items-center justify-center gap-2">
        <Heart className="text-red-600 animate-pulse" /> Happy Valentine's Day Bibi!
      </h1>
      <p className="mt-4 text-gray-800 text-base sm:text-lg italic">{message}</p>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
            onClick={() => setMessage("You are one and Only bibi Penguin 🐧💖")}
          >
            <Sparkles className="mr-2" /> Love 
          </Button>
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
            onClick={() => setMessage("Love kita! 🤗")}
          > 
            <Gift className="mr-2" /> hindi
          </Button>
        </div>
        <Button 
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-3 w-full sm:w-auto"
          onClick={() => setShowPoem(!showPoem)}
        > 
        <div className="flex justify-center">
          <BookOpen className="mr-2" /> {showPoem ? "Itago" : "Basahin mo"}
        </div>
        </Button>
        <Transition
          show={showPoem}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-4 text-gray-700 italic border-t pt-4">
            <img 
              src="https://th.bing.com/th/id/R.c7c65ed81d0380cd210e6eb59825e363?rik=bVZaEFS436GNIg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fraNDr3R.jpg&ehk=q4ISzcmIWRXOua9VWwFcGMt54up%2fq9EwUy37InA7%2bh0%3d&risl=&pid=ImgRaw&r=0" 
              alt="Romantic Flowers" 
              className="rounded-lg mb-2 shadow-md w-full"
            />
            <p className="text-sm sm:text-base">
              Ikaw ang Penguin ng Buhay Ko <br/>

              Sa malamig na gabi, ikaw ang init, <br/>
              Sa bawat paghinga, ikaw ang silip,<br/>
              Sa puso kong ikaw lang ang laman,<br/>
              Ikaw, aking Penguin, aking tahanan.<br/>
<br/>
              Minsan may unos, minsan may ulan,<br/>
              Ngunit hindi kita bibitawan,<br/>
              Kahit magkalayo, ikaw pa rin,<br/>
              Ikaw ang ngiti sa aking damdamin.<br/>
<br/>
              Ikaw ang Penguin ng buhay ko,<br/>
              Sa’yo lang ako, dito at sa dulo,<br/>
              Kahit saan, kahit kailan,<br/>
              Ikaw ang pipiliin, walang hanggan.<br/>
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  );
}

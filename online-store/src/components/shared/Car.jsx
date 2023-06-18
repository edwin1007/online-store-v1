import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = (props) => {
  const { showOrder, setShowOrder } = props

  return (
    //{/**panel derecho */}
    <div className={`lg:col-span-2 fixed lg:w-96 lg:right-0 first-letter: 
                          top-0 bg-[#1F1D2B] w-full h-full transition-all z-50
                          ${showOrder ? "right-0" : "-right-full"} `}>
      {/** Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        {/**boton de cerrar panel derecho */}
        <RiCloseLine onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837]
                                      rounded-full text-xl "/>
        <h1 className="text-2xl my-4"> Order #151416</h1>
        {/*** Pills - Etiquetas (tres botones)*/}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>

          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>

          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/**Carrito */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>

          {/**Productos */}
          <div className="h-[400px] md:h-[700px] lg:h-[450px] overflow-scroll">
            {/**Producto -1*/}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/**Product description*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/** Quantity */}
                <div>
                  <span>2</span>
                </div>
                {/** Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/***Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..." />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>

            {/**Product -2 */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/**Product description*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/** Quantity */}
                <div>
                  <span>2</span>
                </div>
                {/** Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/***Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..." />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>

            {/**Product -3 */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/**Product description*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/** Quantity */}
                <div>
                  <span>2</span>
                </div>
                {/** Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/***Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..." />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>

            {/**Product -4 */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/**Product description*/}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/** Quantity */}
                <div>
                  <span>2</span>
                </div>
                {/** Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/***Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..." />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/***Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue to payment</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
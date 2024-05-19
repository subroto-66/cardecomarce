"use client"
import { FcOk } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Input } from "rizzui";

export default function page() {
  return (
    <div className='w-full'>
        <div className="max-w-[1140px] h-full mx-auto p-2 min-h-[70vh]">
            <div className='w-full'>
                <h1 className='text-2xl font-semibold px-2 py-4'>Enter your email for delivery</h1>
                <div className='w-full px-2 flex gap-2 items-center font-normal'>
                    Code instantly delivered by email  <FcOk />
                </div>

                <div className=" flex flex-col md:flex-row gap-5 md:gap-8 w-full mt-10">
                    <div className="bg-[#F3F9FD] w-full border border-[#017ACD] p-8 rounded-lg">
                        <div className="flex gap-2 items-center pb-4">
                         <MdEmail className="text-[#FB711D] text-4xl" /> Send my code(s) by email
                        </div>
                        <Input label="Enter Email" inputClassName="bg-[#fff]" labelClassName="text-lg mb-2 font-medium" placeholder="Enter your email" size="lg" />
                         <p className="text-base opacity-60 py-4"> You order will be delivered to this email address.</p>
                        <div className="flex justify-end mt-3">
                        <a role='button' href="#" className='text-base rounded-sm cursor-pointer font-medium bg-[#FB711D] hover:bg-[#fc721dd0] text-[#fff] px-4 py-2'> Checkout</a>
                        </div>
                    </div>
                    <div className="w-full">
                        <h4 className="text-base font-semibold pb-4">Shopping Cart</h4>
                        <table className="w-full border-[1px]">
                            <thead></thead>
                            <tbody>
                                <tr className="border-[1px] border-[#D7DFE1]">
                                    <td className="py-3 text-start text-base font-normal opacity-60 pl-4">Grand Theft Auto 5</td>
                                    <td className="py-3 text-end text-base font-normal opacity-60 pr-4">$30</td>
                                </tr>
                                <tr className="border-[1px] border-[#D7DFE1]">
                                    <td className="py-3 text-start text-base font-normal opacity-60 pl-4">Grand Theft Auto 5</td>
                                    <td className="py-3 text-end text-base font-normal opacity-60 pr-4">$30</td>
                                </tr>
                                <tr className="border-[1px] border-[#D7DFE1]">
                                    <td className="py-3 text-start text-base font-normal opacity-60 pl-4">Grand Theft Auto 5</td>
                                    <td className="py-3 text-end text-base font-normal opacity-60 pr-4">$30</td>
                                </tr>
                                <tr className="border-[1px] border-[#D7DFE1]">
                                    <td className="py-3 text-start text-base font-normal opacity-60 pl-4">Grand Theft Auto 5</td>
                                    <td className="py-3 text-end text-base font-normal opacity-60 pr-4">$30</td>
                                </tr>
                                {/* Total */}
                                <tr className="border-[1px] border-[#D7DFE1]">
                                    <td className="py-3 text-start text-lg text-bold pl-4">Total</td>
                                    <td className="py-3 text-end text-lg text-bold pr-4">$30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

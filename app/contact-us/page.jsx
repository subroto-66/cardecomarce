'use client'

import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button, Checkbox, Input, Text, Textarea } from "rizzui";

export default function page() {
  return (
    <div className='w-full'>
        <div className="max-w-[1140px] h-full mx-auto p-2 min-h-[70vh] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[4rem] py-4 lg:py-auto">
                <div className="max-w-96 mx-auto w-full bg-gradient-to-b text-[#fff] from-[#1D6DF6] to-[#0e73ee] rounded-2xl p-6">
                    <h2 className="text-xl text-semibold mb-3">Get in Touch</h2>
                    <div className="w-full flex flex-col gap-y-4">
                        <div>
                            <h4 className="text-lg font-normal mb-2">visit us</h4>
                            <p className="text-sm font-normal leading-5 tracking-wide">Amigo 14 Square, 59/C & 61/C, Asad Avenue, Mohammadpur, Dhaka 1207</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-normal mb-2">chat us</h4>
                            <p className="text-sm font-normal leading-5 tracking-wide">our friendly team here to help <br /> <strong>rootdevs@gmail.com</strong></p>
                        </div>
                        <div>
                            <h4 className="text-lg font-normal mb-2">call us</h4>
                            <p className="text-sm font-normal leading-5 tracking-wide">+8801794-780707</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-normal mb-2">follow us</h4>
                             <ul className="flex gap-2 flex-wrap">
                                <Link href=""><FaFacebook /></Link>
                                <Link href=""><FaLinkedin /></Link>
                                <Link href=""><IoLogoWhatsapp /></Link>
                                <Link href=""><FaSquareTwitter /></Link>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full">

                    <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                        <Input label="User Name *" placeholder="Enter username" inputClassName="border-2" className="col-span-2" size="lg" />
                        <Input
                        label="Email *"
                        placeholder="Enter email"
                        inputClassName="border-2"
                        size="lg"
                        className="col-span-2"
                        />
                        <Checkbox
                        size="md"
                        inputClassName="border-2"
                        className="col-span-2"
                        label={
                            <Text className="text-sm">
                            I agree to GamesKart&lsquo;s{" "}
                            <a className="underline">Terms & Conditions</a> and{" "}
                            <a className="underline">Privacy Policy</a>
                            </Text>
                        }
                        />
                        <Textarea label="Message * " className="col-span-2" placeholder="Write you message..." />
                        <Button
                        type="submit"
                        size="lg"
                        className="col-span-2 mt-2 font-normal bg-[#2984F8]"
                        >
                          Send Message
                        </Button>
                    </div>    

                </div>
            </div>
        
        </div>
    </div>
  )
}

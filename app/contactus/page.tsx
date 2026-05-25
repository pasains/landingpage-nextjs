"use client";

import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { useState } from "react";
import MessageForm from "@/src/form";
import useCreateMessage from "@/src/hooks/contactUs";
import TimedAlert from "@/src/components/timedalert";

export default function ContactUs() {
    const { createMessage, error, success, setSuccess, setError } =
        useCreateMessage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleCreateMessage = async (messageData: any) => {
        setIsSubmitting(true);
        const result = await createMessage(messageData);
        console.log(`MESSAGE 2`, result);
        setIsSubmitting(false);
    };
    return (
        <section className="bg-onepiece bg-fixed bg-cover bg-center bg-no-repeat relative h-full md:h-full font-nunito focus:scroll-auto">
            <div className="bg-black bg-opacity-50 h-full md:h-full w-full">
                <h1 className="pt-24 text-2xl md:text-3xl lg:text-4xl text-white text-center tracking-wider font-extrabold mb-6 md:mb-8">
                    CONTACT US
                </h1>
                <p className="text-md md:text-lg border border-white md:border-0 text-white text-wrap text-center w-3/4 p-2 md:p-0 mx-auto items-center font-light tracking-wider">
                    Kami ingin mendengar cerita seru dari petualangan terbaru kamu!
                    <br />
                    <span>
                        {" "}
                        Punya pertanyaan, tips, atau pengalaman menarik di alam? Hubungi
                        kami! Kami sangat antusias untuk berbagi semangat menjelajah
                        bersama.
                        <br />
                        Kami juga terbuka untuk kritik dan saran terkait website ini
                        agar lebih bermanfaat.
                        <br />
                        Jangan ragu untuk menghubungi kami!
                    </span>{" "}
                </p>
                <div className="flex lg:grid-cols-2 flex-wrap mt-10 place-items-center w-full lg:w-3/4 mx-auto space-y-10 md:space-y-0">
                    <div className=" mx-auto text-left space-y-5 lg:space-y-10">
                        <div className="flex place-items-center gap-4">
                            <MdPlace className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                            <div>
                                <h1 className="my-[10px] text-lg text-light-orange font-bold">
                                    ADDRESS
                                </h1>
                                <p className="font-bold text-md text-white">
                                    Secretariat
                                    <br />
                                    <span className="font-normal text-md">
                                        Gedung SIC, FMIPA, UGM
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex place-items-center gap-4">
                            <MdPhone className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                            <div>
                                <h1 className="my-[10px] text-lg text-light-orange font-bold">
                                    PHONE
                                </h1>
                                <p className="font-bold text-md text-white">
                                    Logistic & Public Relations
                                    <br />
                                    <span className="font-normal text-md">
                                        +62 878-9323-7132
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex place-items-center gap-4">
                            <MdEmail className="justify-center rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                            <div>
                                <h1 className="my-[10px] text-lg text-light-orange font-bold">
                                    EMAIL
                                </h1>
                                <p className="font-bold text-md text-white">
                                    Business Inquire
                                    <br />
                                    <span className="font-normal text-md">
                                        me@pasains.org
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex place-items-center gap-4">
                            <button className="flex box bg-orange-600 rounded-md w-fit h-fit p-2 place-content-center items-center animate-bounce text-white hover:bg-light-orange duration-300">
                                Form Peminjaman Alat
                            </button>
                        </div>
                    </div>
                    <div className="items-center mx-auto pb-10 md:pb-16 sm:p-5">
                        <MessageForm
                            onSubmit={handleCreateMessage}
                            isSubmitting={isSubmitting}
                            success={success}
                        />
                        <div className="fixed z-0 top-3 right-2 md:top-4 md:right-4 p-2 md:p-4  w-[320px] md:w-fit">
                            {success && (
                                <TimedAlert
                                    message={
                                        "Your message has been sent. Please check your email for further discussion. Thank you!"
                                    }
                                    duration={5000}
                                    color="green"
                                    onClose={() => setSuccess("")}
                                />
                            )}
                            <div className="fixed z-0 top-2 right-2 md:top-4 md:right-4">
                                {error && (
                                    <TimedAlert
                                        message={error}
                                        duration={5000}
                                        color="red"
                                        onClose={() => setError("")}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <iframe
                    className="w-full h-[720px]"
                    title="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2075950551744!2d110.37432787596912!3d-7.767797377050637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a585eaaaaaaab%3A0x5fcbc633778f41a0!2sSIC%20FMIPA%20UGM%20(Student%20Internet%20Center)!5e0!3m2!1sen!2sid!4v1717151264582!5m2!1sen!2sid"
                ></iframe>
            </div>
        </section>
    );
}

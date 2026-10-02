import { MdPlace, MdEmail, MdPhone } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-background border border-gray-200">
        <h3 className="font-stardos text-xl p-4 tracking-wider font-bold border-b w-full border-gray-300">
          SEKRETARIAT
        </h3>

        <div className="space-y-5 p-4 ml-2">
          <div className="flex gap-4 items-start">
            <MdPlace className="shrink-0 mt-0.5 size-5 text-bold-green" />
            <div>
              <p className="font-bold text-xs tracking-wider uppercase mb-1">
                Alamat
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Gedung SIC, FMIPA, Universitas Gadjah Mada
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MdPhone className="shrink-0 mt-0.5 size-5 text-bold-green" />
            <div>
              <p className="font-bold text-xs tracking-wider uppercase mb-1">
                Telepon
              </p>
              <p className="text-sm text-gray-700">
                Logistic &amp; Public Relations
              </p>
              <p className="text-sm text-gray-700">+62 878-9323-7132</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MdEmail className="shrink-0 mt-0.5 size-5 text-bold-green" />
            <div>
              <p className="font-bold text-xs tracking-wider uppercase mb-1">
                Surel
              </p>
              <p className="text-sm text-gray-700">Business Inquiry</p>
              <p className="text-sm text-gray-700">me@pasains.org</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200">
        <div className="bg-bold-green/80 font-stardos text-white text-center py-2 text-xs tracking-widest uppercase font-bold">
          PETA LOKASI
        </div>
        <iframe
          className="w-full h-72"
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2075950551744!2d110.37432787596912!3d-7.767797377050637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a585eaaaaaaab%3A0x5fcbc633778f41a0!2sSIC%20FMIPA%20UGM%20(Student%20Internet%20Center)!5e0!3m2!1sen!2sid!4v1717151264582!5m2!1sen!2sid"
        ></iframe>
      </div>
    </div>
  );
}

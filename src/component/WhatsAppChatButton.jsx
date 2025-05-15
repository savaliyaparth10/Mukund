import React, { useState } from "react";
import logo from "../assets/blacknewneturx8-8 1.svg";

export const WhatsAppChatButton = () => {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const businessPhoneNumber = "+91 99988 52256"; // Your business phone number

  const openWhatsAppChat = () => {
    setShowChatWindow(true);
  };

  const closeWhatsAppChat = () => {
    setShowChatWindow(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99]">
      {/* WhatsApp Icon */}
      <div className="relative cursor-pointer mb-12" onClick={openWhatsAppChat}>
        <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.047 1.02-1.047 2.482 1.074 2.879 1.224 3.077c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </div>

        {/* Notification Dot */}
        <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
      </div>

      {/* Chat Window Modal */}
      {showChatWindow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg w-[90%] max-w-md h-[80%] max-h-[600px] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#25D366] text-white p-4 flex justify-between items-center rounded-t-lg">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-white rounded-full mr-3 overflow-hidden">
                  <img src={logo} alt="" className="mt-3.5 p-1 " />
                </div>
                <div className="flex-row justify-start ">
                  <h2 className="font-bold"> NatureX Premium Textures</h2>
                  <p className="text-sm ">
                    Customer Support
                  </p>
                </div>
              </div>
              <button
                onClick={closeWhatsAppChat}
                className="text-white hover:bg-opacity-20 hover:bg-white rounded-full p-2"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 flex-grow overflow-y-auto">
              <div className="text-center text-gray-500 py-10">
                <p>
                  Need assistance? Start a conversation with our customer
                  support team on WhatsApp for a faster, more convenient, and
                  completely secure experience! Whether you have questions about
                  our products, need troubleshooting help, or require any
                  assistance, our friendly support team is just a message away.
                  Chatting on WhatsApp ensures real-time responses, easy sharing
                  of images or documents, and seamless support anytime,
                  anywhere. Plus, your privacy is our priority—our WhatsApp chat
                  is 100% safe and fully encrypted, ensuring your information
                  remains secure. Don’t wait—click the chat button now and
                  experience hassle-free support on WhatsApp!
                </p>
                <a
                  href={`whatsapp://send?phone=${businessPhoneNumber}&text=Hello!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

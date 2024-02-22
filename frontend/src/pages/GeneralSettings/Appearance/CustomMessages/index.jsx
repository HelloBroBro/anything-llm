import EditingChatBubble from "@/components/EditingChatBubble";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function CustomMessages() {
  const [hasChanges, setHasChanges] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const messages = await System.getWelcomeMessages();
      setMessages(messages);
    }
    fetchMessages();
  }, []);

  const addMessage = (type) => {
    if (type === "user") {
      setMessages([
        ...messages,
        { user: "Double click to edit...", response: "" },
      ]);
    } else {
      setMessages([
        ...messages,
        { user: "", response: "Double click to edit..." },
      ]);
    }
  };

  const removeMessage = (index) => {
    setHasChanges(true);
    setMessages(messages.filter((_, i) => i !== index));
  };

  const handleMessageChange = (index, type, value) => {
    setHasChanges(true);
    const newMessages = [...messages];
    newMessages[index][type] = value;
    setMessages(newMessages);
  };

  const handleMessageSave = async () => {
    const { success, error } = await System.setWelcomeMessages(messages);
    if (!success) {
      showToast(`Failed to update welcome messages: ${error}`, "error");
      return;
    }
    showToast("Successfully updated welcome messages.", "success");
    setHasChanges(false);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col gap-y-2">
        <h2 className="leading-tight font-medium text-white">
          Custom Messages
        </h2>
        <p className="text-sm font-base text-white/60">
          Customize the automatic messages displayed to your users.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-y-6 bg-zinc-900 rounded-lg px-6 pt-4 max-w-[700px]">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            {message.user && (
              <EditingChatBubble
                message={message}
                index={index}
                type="user"
                handleMessageChange={handleMessageChange}
                removeMessage={removeMessage}
              />
            )}
            {message.response && (
              <EditingChatBubble
                message={message}
                index={index}
                type="response"
                handleMessageChange={handleMessageChange}
                removeMessage={removeMessage}
              />
            )}
          </div>
        ))}
        <div className="flex gap-4 mt-12 justify-between pb-7">
          <button
            className="self-end text-white hover:text-white/60 transition"
            onClick={() => addMessage("response")}
          >
            <div className="flex items-center justify-start">
              <Plus className="w-5 h-5 m-2" weight="fill" /> New System Message
            </div>
          </button>
          <button
            className="self-end text-sky-400 hover:text-sky-400/60 transition"
            onClick={() => addMessage("user")}
          >
            <div className="flex items-center">
              <Plus className="w-5 h-5 m-2" weight="fill" /> New User Message
            </div>
          </button>
        </div>
      </div>
      {hasChanges && (
        <div className="flex justify-center py-6">
          <button
            className="transition-all duration-300 border border-slate-200 px-4 py-2 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
            onClick={handleMessageSave}
          >
            Save Messages
          </button>
        </div>
      )}
    </div>
  );
}

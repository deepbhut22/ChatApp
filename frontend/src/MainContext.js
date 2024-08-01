import React, { useState, createContext } from "react";

export const userContext = createContext();

export function MainContextProvider( {children} ) {
    const [usm, setUsm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [conversationId, setConversationId] = useState({
        id: "",
        type: "",
    });
    const [isDone, setIsDone] = useState(false);
    const [conv, setConv] = useState([]);
    const [msg, setMsg] = useState([]);
    const [otherName, setOtherName] = useState("");
    const [usersOnline, setUsersOnline] = useState([]);
    const [isProfileOpen, setIsProfileOpen] = useState({
        state: false,
        profile: "own",
        msgdeleted: Boolean
    });
    const [refresh, setRefresh] = useState(Boolean);
    const [groupMessage, setGroupMessage] = useState([]);
    const [unseenMsgs, setUnseenMsgs] = useState([]);

    const value={
        usm,
        setUsm,
        isOpen,
        setIsOpen,
        conversationId,
        setConversationId,
        isDone,
        setIsDone,
        conv,
        setConv,
        msg,
        setMsg,
        otherName,
        setOtherName,
        usersOnline,
        setUsersOnline,
        isProfileOpen,
        setIsProfileOpen,
        refresh,
        setRefresh,
        groupMessage,
        setGroupMessage,
        unseenMsgs,
        setUnseenMsgs,
      };

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}
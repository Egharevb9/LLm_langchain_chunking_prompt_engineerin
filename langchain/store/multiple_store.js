import useAuthStore from "./authStore";
import useChatStore from "./Chatstore";
import useuiStore from "./uiStore";

function Header() {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const theme = useuiStore((state) => state.theme);
    const clearMessages = useChatStore((state) => state.clearMessages);


    const handleLogout = () => {
        clearMessages();
        logout();
    }
    return (
        <header className={`header ${theme}`}>
            <h1>Naija AI Assistant</h1>
}
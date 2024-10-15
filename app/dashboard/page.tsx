"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db} from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { FaPowerOff } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { doc, onSnapshot } from "firebase/firestore"; 

export default function Dashboard() {
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [displayUsername, setDisplayUsername] = useState("");
    const [userId, setUserId] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
    
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUserId(user.uid);
          } else {
            setUserId("");
            setIsLoggedOut(true);
          }
        });
    
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isLoggedOut) {
            router.push("/auth/login");
        }
    }, [isLoggedOut, router]);

    useEffect(() => {
        if (!userId) return;
        
        const userDocRef = doc(db, "users", userId);
        const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setDisplayUsername(userData.username);
          }
        }, (error) => {
            setDisplayUsername("");
            toast({
                variant: "theme2",
                title: "Error fetching user data",
                description: error.message
            });
        });
    
        return () => unsubscribe();
    }, [userId]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsLoggedOut(true);

            toast({
                variant: "theme1",
                title: "Logged out",
                description: "You have successfully logged out."
            });
        } catch (error:any) {
            toast({
                variant: "theme2",
                title: "Logout failed!",
                description: error.message
            });
        }
    }
     
    return (
        <div className="h-screen w-screen bg-gradient-login-wrapper flex justify-center items-center relative">
            <div className="absolute top-[20px] right-[20px]">
                <button onClick={handleLogout} className="bg-[#dc3545] text-white text-[18px] font-semibold rounded-[8px] py-[8px] px-[15px] flex items-center shadow-tutorials-item-hover hover:bg-[#ff3b3b] hover:logout-button transition transform duration-300 ease-in-out">
                    <FaPowerOff className="mr-[8px] inline-block hover:animate-rotate360 transition transform duration-300 ease-in-out" /> Logout
                </button>
            </div>

            <div className="w-[900%] max-w-[800px] backdrop-blur-[15px] p-[10px] bg-black bg-opacity-90 mb-[60px] rounded-[15px] text-center toolpage-container">
                <h2 className="text-[28px] font-bold text-[#ff0000] text-center mb-[20px] toolpage-head-shadow">Dashboard</h2>
                <div className="flex flex-col justify-center items-center text-white text-[20px]">
                    <h3 className="text-[20px] font-semibold mb-[8px]">UID : {userId}</h3>
                    <h3 className="text-[20px] font-semibold mb-[8px]">Name : {displayUsername}</h3>
                </div>
            </div>
        </div>
    );
}
import { useState, useEffect } from "react";
import { supabase } from "./lib/api";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { Nullable } from "./type/Nullable";
import { User } from "@supabase/gotrue-js";

function App() {
    // const [user, setUser] = useState<Nullable<User>>(null);

    // useEffect(() => {
    //     const session = supabase.auth.session();
    //     setUser(session?.user ?? null);

    //     const { data: authListener } = supabase.auth.onAuthStateChange(
    //         async (event, session) => {
    //             const currentUser = session?.user;
    //             setUser(currentUser ?? null);
    //         }
    //     );

    //     return () => {
    //         authListener?.unsubscribe();
    //     };
    // }, [user]);

    return (
        <>
        https://ukiyo.qodeinteractive.com/metro-portfolio/ 클론코딩
        </>
    );
}

export default App;

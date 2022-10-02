import { useState, useEffect } from "react";
import { supabase } from "lib/api";
import { Nullable } from "types/Nullable";
import { User } from "@supabase/gotrue-js";
import Auth from "components/Auth";
import Home from "components/Home";
import { Row } from "widget/Row";
import { Column } from "widget/Column";
import logoSource from "assets/logo-dark.png";
import styled from "styled-components";
import { Space } from "widget/Space";

const LogoImage = styled.img.attrs(({}) => ({
  src: logoSource,
}))`
    height:30px;
`;

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
    <Column useRandomBackgroundColor={true} fullWidth={true}>
      <Row useRandomBackgroundColor={true} fullWidth={true}>
        <Space width={'60px'}/>
        <LogoImage />
      </Row>
      <Row useRandomBackgroundColor={true} fullWidth={true}>
        https://ukiyo.qodeinteractive.com/metro-portfolio/ 클론코딩
      </Row>
    </Column>
  );
}

export default App;

import { Row } from "widget/Row";
import { Column } from "widget/Column";
import logoSource from "assets/logo-dark.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "widget/Divider";
import { useCallback, useMemo } from "react";
import log from "utils/log";
import ImageUtil from "utils/ImageUtil";

function App() {
  const imageList:string[] = useMemo(()=>[
    ImageUtil.random(382,382),
    ImageUtil.random(382,382),

    ImageUtil.random(784,382),

    ImageUtil.random(784,382),

    ImageUtil.random(784,784),

    ImageUtil.random(382,382),
    ImageUtil.random(382,382),

    ImageUtil.random(784,784),

    ImageUtil.random(382,382),
    ImageUtil.random(382,382),
    
    ImageUtil.random(784,382),
  ],[]);
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

  const header=useCallback(()=>{
    return <>
      <Row fullWidth={true} justifyContent="space-between" padding="45px 65px">
        <LogoImage height={'30px'} />
        <FontAwesomeIcon icon={faBars} size={'lg'} />
      </Row>
    </>;
  },[]);

  const body=useCallback(()=>{
    return <>
      <BodyText fullWidth={true} padding="31px 65px">
        you can have a beautiful metro portfolio just like me.
        {/*https://ukiyo.qodeinteractive.com/metro-portfolio/ 클론코딩*/}
      </BodyText>
      <BodyImageGrid fullWidth={true} padding="84px 65px">
        {imageList.map((image)=>{
          const isSpan = image.endsWith("/784/382") || image.endsWith("/784/784");
          return <img src={image} style={{gridColumnEnd:isSpan?'span 2':undefined}}/>
        })}
      </BodyImageGrid>
    </>;
  },[]);

  return (
    <Column fullWidth={true}>
      {header()}
      <Divider indent="5px" endIndent="5px"/>
      {body()}
    </Column>
  );
}

export default App;


const LogoImage = styled.img.attrs<{height?:string}>(({}) => ({
  src: logoSource,
}))`
  height:${({height}) => height?`${height}`:'0'};
`;

const BodyText = styled(Row).attrs<{height?:string}>(({}) => ({
  // src: logoSource,
}))`
  font-size: 3em; //1em은 기본 글자크기의 높이, %는 기본 글자크기에서의 크기, 1rem은 html 루트 태그의 글자 크기.
  font-weight: 700;
  line-height: 1.7em;
  text-align: center;
  width: 780px;
`;

const BodyImageGrid = styled<any>(Row).attrs(({}) => ({
  // src: logoSource,
}))`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 384px;
  grid-gap: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
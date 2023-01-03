function Portpolio2Page() {
  return <BackgroundWidget/>;
}
  
export default Portpolio2Page;

//100%는 부모 신경써서 최대한, 100wv는 뷰화면 크기에 비례하여 이다.
const BackgroundWidget = ()=>{
  return <div style={{width:'100vw',height:'100vh', backgroundColor:"rgb(17,24,39)"}}>
    <p>test</p>
  </div>
}
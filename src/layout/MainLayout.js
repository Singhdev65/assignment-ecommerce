import { Footer, Header } from "../components"

const MainLayout = props => {
  return (
    <div>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  )
}

export default MainLayout

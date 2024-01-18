import Navbar from "./_components/navbar"

const MarketingLayout = ({children}) => {
  return (
    <div className="h-full ">
        <Navbar/>
        <main className="h-full pt-40 p-10">
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout
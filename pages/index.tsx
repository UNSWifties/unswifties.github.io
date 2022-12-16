import Navigation from "components/navigation"

const PAGES : string[] = ["Home", "About", "Blog", "Contact"];

export default function Home() {
  return (
    <Navigation links={PAGES}></Navigation>
  )
}
